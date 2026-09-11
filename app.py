from flask import Flask, render_template, request, jsonify, session, redirect, url_for, send_file
import os
from io import BytesIO
from datetime import datetime
from werkzeug.utils import secure_filename
from xml.sax.saxutils import escape

from reportlab.lib.pagesizes import A4
from reportlab.platypus import (
    SimpleDocTemplate,
    Paragraph,
    Spacer,
    Table,
    TableStyle
)
from reportlab.lib import colors
from reportlab.lib.styles import getSampleStyleSheet, ParagraphStyle
from reportlab.lib.enums import TA_CENTER

from database import (
    create_database,
    save_analysis,
    get_history,
    login_user,
    create_user,
    get_total_users,
    get_grade_counts
)

from model.onion_model import predict_onion


app = Flask(__name__)

app.secret_key = "krishinetra_secret_key_2026"

UPLOAD_FOLDER = "uploads"

os.makedirs(UPLOAD_FOLDER, exist_ok=True)

app.config["UPLOAD_FOLDER"] = UPLOAD_FOLDER

create_database()


# =========================
# HOME
# =========================

@app.route("/")
def home():
    return render_template("index.html")


# =========================
# LOGIN
# =========================

@app.route("/login", methods=["GET", "POST"])
def login():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]
        role = request.form["role"]

        user = login_user(username, password, role)

        if user:

            session["user_id"] = user["id"]
            session["username"] = user["username"]
            session["role"] = user["role"]

            if role == "admin":
                return redirect(url_for("admin_dashboard"))

            return redirect(url_for("farmer_dashboard"))

        return render_template(
            "login.html",
            error="Invalid username, password or role."
        )

    return render_template("login.html")


# =========================
# SIGNUP
# =========================

@app.route("/signup", methods=["GET", "POST"])
def signup():

    if request.method == "POST":

        username = request.form["username"]
        password = request.form["password"]

        if len(username) < 3 or len(password) < 4:

            return render_template(
                "signup.html",
                error="Username or password is too short."
            )

        success = create_user(
            username,
            password,
            "farmer"
        )

        if success:

            return redirect(url_for("login"))

        return render_template(
            "signup.html",
            error="Username already exists."
        )

    return render_template("signup.html")


# =========================
# FARMER DASHBOARD
# =========================

@app.route("/farmer-dashboard")
def farmer_dashboard():

    if "user_id" not in session:
        return redirect(url_for("login"))

    if session["role"] != "farmer":
        return redirect(url_for("admin_dashboard"))

    return render_template(
        "farmer_dashboard.html",
        username=session["username"]
    )


# =========================
# ADMIN DASHBOARD
# =========================

@app.route("/admin-dashboard")
def admin_dashboard():

    if "user_id" not in session:
        return redirect(url_for("login"))

    if session["role"] != "admin":
        return redirect(url_for("farmer_dashboard"))

    history = get_history()
    total_users = get_total_users()
    grade_counts = get_grade_counts()

    return render_template(
        "admin_dashboard.html",
        username=session["username"],
        history=history,
        total_users=total_users,
        grade_counts=grade_counts
    )


# =========================
# ASSESSMENT
# =========================

@app.route("/assessment")
def assessment():

    if "user_id" not in session:
        return redirect(url_for("login"))

    return render_template(
        "assessment.html",
        username=session["username"]
    )


# =========================
# UTILIZATION
# =========================

@app.route("/utilization")
def utilization():

    if "user_id" not in session:
        return redirect(url_for("login"))

    return render_template(
        "utilization.html",
        username=session["username"]
    )


# =========================
# PROFILE
# =========================

@app.route("/profile")
def profile():

    if "user_id" not in session:
        return redirect(url_for("login"))

    return render_template(
        "profile.html",
        username=session["username"]
    )


# =========================
# AI ANALYSIS
# =========================

@app.route("/analyze", methods=["POST"])
def analyze():

    if "user_id" not in session:
        return jsonify({
            "error": "Please login first."
        }), 401

    if "image" not in request.files:
        return jsonify({
            "error": "No image uploaded."
        }), 400

    image = request.files["image"]

    if image.filename == "":
        return jsonify({
            "error": "No image selected."
        }), 400

    allowed_extensions = {
        "jpg",
        "jpeg",
        "png",
        "webp"
    }

    extension = image.filename.rsplit(
        ".",
        1
    )[-1].lower()

    if extension not in allowed_extensions:
        return jsonify({
            "error": "Please upload a valid image."
        }), 400

    filename = secure_filename(image.filename)

    name, ext = os.path.splitext(filename)

    filename = (
        f"{name}_"
        f"{datetime.now().strftime('%Y%m%d%H%M%S')}"
        f"{ext}"
    )

    image_path = os.path.join(
        app.config["UPLOAD_FOLDER"],
        filename
    )

    image.save(image_path)

    try:

        result = predict_onion(image_path)

        score = result.get(
            "confidence",
            0
        )

        grade = result.get(
            "grade",
            "Unknown"
        )

        defects = result.get(
            "defects",
            "Not available"
        )

        recommendation = result.get(
            "recommendation",
            "Further inspection recommended."
        )

        size = result.get(
            "size",
            "Assessment pending"
        )

        shape = result.get(
            "shape",
            "Assessment pending"
        )

        colour = result.get(
            "colour",
            "Assessment pending"
        )

        save_analysis(
            filename,
            score,
            grade,
            defects,
            recommendation,
            session["user_id"]
        )

        return jsonify({

            "score": score,

            "confidence": score,

            "grade": grade,

            "defects": defects,

            "recommendation": recommendation,

            "size": size,

            "shape": shape,

            "colour": colour,

            "image_name": filename

        })

    except Exception as e:

        print("Prediction error:", e)

        return jsonify({
            "error": "AI analysis failed. Please try again."
        }), 500


# =========================
# RESULT PAGE
# =========================

@app.route("/result")
def result():

    if "user_id" not in session:
        return redirect(url_for("login"))

    return render_template(
        "result.html",
        username=session["username"]
    )


# =========================
# DOWNLOAD PDF REPORT
# =========================

@app.route("/download-report", methods=["POST"])
def download_report():

    if "user_id" not in session:

        return jsonify({
            "error": "Please login first."
        }), 401

    try:

        data = request.get_json(silent=True)

        if not data:

            return jsonify({
                "error": "No report data received."
            }), 400

        grade = str(
            data.get(
                "grade",
                "Not Available"
            )
        )

        defects = str(
            data.get(
                "defects",
                "Not Available"
            )
        )

        recommendation = str(
            data.get(
                "recommendation",
                "Further inspection recommended."
            )
        )

        image_name = str(
            data.get(
                "image_name",
                "Uploaded Onion Image"
            )
        )

        # Safely escape dynamic text for ReportLab Paragraph
        safe_grade = escape(grade)
        safe_defects = escape(defects)
        safe_recommendation = escape(recommendation)
        safe_image_name = escape(image_name)
        safe_username = escape(
            str(session.get("username", "User"))
        )

        pdf_buffer = BytesIO()

        document = SimpleDocTemplate(
            pdf_buffer,
            pagesize=A4,
            rightMargin=45,
            leftMargin=45,
            topMargin=45,
            bottomMargin=45
        )

        styles = getSampleStyleSheet()

        title_style = ParagraphStyle(
            "ReportTitle",
            parent=styles["Title"],
            alignment=TA_CENTER,
            fontSize=22,
            spaceAfter=10
        )

        subtitle_style = ParagraphStyle(
            "Subtitle",
            parent=styles["Normal"],
            alignment=TA_CENTER,
            fontSize=11,
            spaceAfter=20
        )

        heading_style = ParagraphStyle(
            "Heading",
            parent=styles["Heading2"],
            fontSize=14,
            spaceBefore=12,
            spaceAfter=8
        )

        normal_style = ParagraphStyle(
            "NormalText",
            parent=styles["Normal"],
            fontSize=10,
            leading=15
        )

        story = []

        # TITLE

        story.append(
            Paragraph(
                "KRISHINETRA",
                title_style
            )
        )

        story.append(
            Paragraph(
                "AI-Based Onion Quality Assessment Report",
                subtitle_style
            )
        )

        # REPORT DETAILS

        story.append(
            Paragraph(
                "Report Details",
                heading_style
            )
        )

        report_data = [

            [
                "Date & Time",
                datetime.now().strftime(
                    "%d-%m-%Y %I:%M %p"
                )
            ],

            [
                "User",
                safe_username
            ],

            [
                "Image",
                safe_image_name
            ],

            [
                "Predicted Grade",
                safe_grade
            ]

        ]

        table = Table(
            report_data,
            colWidths=[
                150,
                330
            ]
        )

        table.setStyle(
            TableStyle([

                (
                    "BACKGROUND",
                    (0, 0),
                    (0, -1),
                    colors.lightgrey
                ),

                (
                    "GRID",
                    (0, 0),
                    (-1, -1),
                    0.5,
                    colors.grey
                ),

                (
                    "VALIGN",
                    (0, 0),
                    (-1, -1),
                    "TOP"
                ),

                (
                    "FONTSIZE",
                    (0, 0),
                    (-1, -1),
                    10
                ),

                (
                    "LEFTPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                ),

                (
                    "RIGHTPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                ),

                (
                    "TOPPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                ),

                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                )

            ])
        )

        story.append(table)

        # QUALITY OBSERVATIONS

        story.append(
            Paragraph(
                "Quality Observations",
                heading_style
            )
        )

        quality_data = [

            [
                "Parameter",
                "Observation"
            ],

            [
                "Predicted Grade",
                Paragraph(
                    safe_grade,
                    normal_style
                )
            ],

            [
                "Visible Defects",
                Paragraph(
                    safe_defects,
                    normal_style
                )
            ]

        ]

        quality_table = Table(
            quality_data,
            colWidths=[
                150,
                330
            ]
        )

        quality_table.setStyle(
            TableStyle([

                (
                    "BACKGROUND",
                    (0, 0),
                    (-1, 0),
                    colors.lightgrey
                ),

                (
                    "GRID",
                    (0, 0),
                    (-1, -1),
                    0.5,
                    colors.grey
                ),

                (
                    "FONTNAME",
                    (0, 0),
                    (-1, 0),
                    "Helvetica-Bold"
                ),

                (
                    "VALIGN",
                    (0, 0),
                    (-1, -1),
                    "TOP"
                ),

                (
                    "FONTSIZE",
                    (0, 0),
                    (-1, -1),
                    10
                ),

                (
                    "LEFTPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                ),

                (
                    "RIGHTPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                ),

                (
                    "TOPPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                ),

                (
                    "BOTTOMPADDING",
                    (0, 0),
                    (-1, -1),
                    8
                )

            ])
        )

        story.append(quality_table)

        # SMART UTILIZATION

        story.append(
            Paragraph(
                "Smart Utilization Recommendation",
                heading_style
            )
        )

        story.append(
            Paragraph(
                safe_recommendation,
                normal_style
            )
        )

        story.append(
            Spacer(1, 20)
        )

        # DISCLAIMER

        story.append(
            Paragraph(
                "<b>Disclaimer:</b> "
                "This report is generated using AI-based "
                "preliminary assessment. Final quality "
                "verification should be performed according "
                "to applicable quality standards.",
                normal_style
            )
        )

        story.append(
            Spacer(1, 20)
        )

        story.append(
            Paragraph(
                "KrishiNetra — AI ki Drishti, "
                "Kisan ki Samriddhi",
                subtitle_style
            )
        )

        document.build(story)

        pdf_buffer.seek(0)

        return send_file(
            pdf_buffer,
            as_attachment=True,
            download_name="KrishiNetra_Onion_Report.pdf",
            mimetype="application/pdf"
        )

    except Exception as e:

        print("PDF generation error:", repr(e))

        return jsonify({
            "error": "Unable to generate report. Please try again."
        }), 500


# =========================
# HISTORY
# =========================

@app.route("/history")
def history():

    if "user_id" not in session:
        return redirect(url_for("login"))

    if session["role"] == "admin":

        data = get_history()

    else:

        data = get_history(
            session["user_id"]
        )

    return render_template(
        "history.html",
        history=data,
        is_admin=session["role"] == "admin"
    )


# =========================
# LOGOUT
# =========================

@app.route("/logout")
def logout():

    session.clear()

    return redirect(url_for("home"))


# =========================
# RUN
# =========================

if __name__ == "__main__":

    app.run(
        debug=True
    )