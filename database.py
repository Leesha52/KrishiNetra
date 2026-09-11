import sqlite3
from werkzeug.security import generate_password_hash, check_password_hash

DATABASE = "krishinetra.db"


def create_database():
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    # Analysis history table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS analysis_history (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image_name TEXT,
            score INTEGER,
            grade TEXT,
            defects TEXT,
            recommendation TEXT,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    """)

    # Add user_id if old database does not have it
    try:
        cursor.execute(
            "ALTER TABLE analysis_history ADD COLUMN user_id INTEGER"
        )
    except sqlite3.OperationalError:
        pass

    # Users table
    cursor.execute("""
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            role TEXT NOT NULL
        )
    """)

    connection.commit()
    connection.close()


def save_analysis(
    image_name,
    score,
    grade,
    defects,
    recommendation,
    user_id
):
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    cursor.execute("""
        INSERT INTO analysis_history
        (
            image_name,
            score,
            grade,
            defects,
            recommendation,
            user_id
        )
        VALUES (?, ?, ?, ?, ?, ?)
    """, (
        image_name,
        score,
        grade,
        defects,
        recommendation,
        user_id
    ))

    connection.commit()
    connection.close()


def get_history(user_id=None):
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    if user_id is None:
        cursor.execute("""
            SELECT
                id,
                image_name,
                score,
                grade,
                defects,
                recommendation,
                created_at
            FROM analysis_history
            ORDER BY created_at DESC
        """)
    else:
        cursor.execute("""
            SELECT
                id,
                image_name,
                score,
                grade,
                defects,
                recommendation,
                created_at
            FROM analysis_history
            WHERE user_id = ?
            ORDER BY created_at DESC
        """, (user_id,))

    data = cursor.fetchall()

    connection.close()
    return data


def create_user(username, password, role):
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    hashed_password = generate_password_hash(password)

    try:
        cursor.execute("""
            INSERT INTO users
            (
                username,
                password,
                role
            )
            VALUES (?, ?, ?)
        """, (
            username,
            hashed_password,
            role
        ))

        connection.commit()

    except sqlite3.IntegrityError:
        connection.close()
        return False

    connection.close()
    return True


def login_user(username, password, role):
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    cursor.execute("""
        SELECT
            id,
            username,
            password,
            role
        FROM users
        WHERE username = ?
        AND role = ?
    """, (
        username,
        role
    ))

    user = cursor.fetchone()

    connection.close()

    if user and check_password_hash(user[2], password):
        return {
            "id": user[0],
            "username": user[1],
            "role": user[3]
        }

    return None


def get_total_users():
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    cursor.execute("""
        SELECT COUNT(*)
        FROM users
    """)

    total = cursor.fetchone()[0]

    connection.close()
    return total


def get_grade_counts():
    connection = sqlite3.connect(DATABASE)
    cursor = connection.cursor()

    cursor.execute("""
        SELECT grade, COUNT(*)
        FROM analysis_history
        GROUP BY grade
    """)

    data = cursor.fetchall()

    connection.close()

    return dict(data)