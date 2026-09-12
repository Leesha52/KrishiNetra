
// ======================================================
// KRISHINETRA - MAIN JAVASCRIPT
// ======================================================


// ======================================================
// TRANSLATIONS
// ======================================================

const translations = {

    // ================= ENGLISH =================

    en: {

        home: "Home",
        about: "About",
        features: "Features",
        history: "History",
        dashboard: "Dashboard",
        profile: "Profile",
        logout: "Logout",

        login: "Login",
        signup: "Sign Up",
        farmerLogin: "Farmer Login",
        adminLogin: "Admin Login",

        getStarted: "Get Started →",
        learnMore: "Learn More",

        heroDescription:
            "KrishiNetra uses Artificial Intelligence to assess onion quality, classify grades and support better market decisions.",

        aboutTitle:
            "From Onion Image to Intelligent Decision",

        aboutDescription:
            "KrishiNetra transforms traditional visual onion assessment into a faster, consistent and data-driven process using AI.",

        smartAssessment: "Smart Assessment",

        smartAssessmentDescription:
            "Analyze onion images using an AI-based computer vision model.",

        dataDriven: "Data Driven",

        dataDrivenDescription:
            "Get structured quality results and digital assessment records.",

        betterUtilization: "Better Utilization",

        betterUtilizationDescription:
            "Support suitable utilization decisions based on onion condition.",

        aiGrading: "AI Grading",

        aiGradingDescription:
            "AI-based visual assessment for faster and more consistent grading.",

        qualityAssessment: "Quality Assessment",

        qualityAssessmentDescription:
            "Assess visible onion characteristics such as appearance and defects.",

        digitalHistory: "Digital History",

        digitalHistoryDescription:
            "Store assessment records for easy tracking and review.",

        smartUtilization: "Smart Utilization",

        utilizationDescription:
            "Get suitable utilization suggestions according to onion condition.",

        easyAccess: "Easy Access",

        easyAccessDescription:
            "A simple interface designed for farmers and market-level users.",

        multilingual: "Multilingual",

        multilingualDescription:
            "Support for multiple Indian languages for easier adoption.",

        howItWorks: "How It Works",

        simpleProcess:
            "Simple Three Step Process",

        stepLogin: "Login",

        stepLoginDescription:
            "Login to access the onion assessment system.",

        stepAssess: "Assess",

        stepAssessDescription:
            "Upload a clear onion image for AI assessment.",

        stepResult: "Get Result",

        stepResultDescription:
            "View the quality result, grade and recommendation.",

        ctaTitle:
            "Ready to Make Onion Quality Assessment Smarter?",

        ctaDescription:
            "Start using KrishiNetra for fast and intelligent quality assessment.",

        footerTagline:
            "AI की दृष्टि, किसान की समृद्धि",

        assess: "Assess Onion",

        yourOnion: "Your Onion",

        assessmentDescription:
            "Upload an onion image for AI-based quality assessment.",

        upload: "Upload Image",

        analyze: "Analyze Onion",

        quality: "Quality Score",

        grade: "Grade",

        defects: "Defects",

        recommendation: "Recommendation",

        confidence: "Confidence",

        explore: "Explore",

        welcome: "Welcome",

        noHistory: "No assessment history available.",

        invalidImage:
            "Please select a valid image.",

        imageTooLarge:
            "Image size must be less than 5 MB.",

        noImage:
            "Please select an onion image.",

        analysisFailed:
            "AI analysis failed. Please try again.",

        serverError:
            "Server error. Please try again."
    },


    // ================= HINDI =================

    hi: {

        home: "होम",
        about: "हमारे बारे में",
        features: "विशेषताएँ",
        history: "इतिहास",
        dashboard: "डैशबोर्ड",
        profile: "प्रोफ़ाइल",
        logout: "लॉग आउट",

        login: "लॉगिन",
        signup: "साइन अप",
        farmerLogin: "किसान लॉगिन",
        adminLogin: "एडमिन लॉगिन",

        getStarted: "शुरू करें →",
        learnMore: "और जानें",

        heroDescription:
            "कृषिनेत्र AI की मदद से प्याज की गुणवत्ता का आकलन करता है, उसकी श्रेणी बताता है और बेहतर बाजार निर्णय लेने में सहायता करता है।",

        aboutTitle:
            "प्याज की तस्वीर से स्मार्ट निर्णय तक",

        aboutDescription:
            "कृषिनेत्र AI की मदद से पारंपरिक प्याज गुणवत्ता जाँच को तेज़, समान और डेटा आधारित प्रक्रिया में बदलता है।",

        smartAssessment: "स्मार्ट जाँच",

        smartAssessmentDescription:
            "AI आधारित कंप्यूटर विज़न मॉडल से प्याज की तस्वीर का विश्लेषण करें।",

        dataDriven: "डेटा आधारित",

        dataDrivenDescription:
            "गुणवत्ता परिणाम और डिजिटल जाँच रिकॉर्ड प्राप्त करें।",

        betterUtilization: "बेहतर उपयोग",

        betterUtilizationDescription:
            "प्याज की स्थिति के आधार पर उचित उपयोग का निर्णय लेने में सहायता।",

        aiGrading: "AI ग्रेडिंग",

        aiGradingDescription:
            "तेज़ और अधिक समान गुणवत्ता वर्गीकरण के लिए AI आधारित दृश्य जाँच।",

        qualityAssessment: "गुणवत्ता जाँच",

        qualityAssessmentDescription:
            "प्याज की दिखाई देने वाली विशेषताओं और दोषों की जाँच करें।",

        digitalHistory: "डिजिटल इतिहास",

        digitalHistoryDescription:
            "जाँच रिकॉर्ड को सुरक्षित रखें और आसानी से देखें।",

        smartUtilization: "स्मार्ट उपयोग",

        utilizationDescription:
            "प्याज की स्थिति के अनुसार उचित उपयोग का सुझाव प्राप्त करें।",

        easyAccess: "आसान उपयोग",

        easyAccessDescription:
            "किसानों और बाजार स्तर के उपयोगकर्ताओं के लिए सरल इंटरफेस।",

        multilingual: "बहुभाषी",

        multilingualDescription:
            "आसान उपयोग के लिए कई भारतीय भाषाओं का समर्थन।",

        howItWorks: "यह कैसे काम करता है",

        simpleProcess:
            "तीन आसान चरण",

        stepLogin: "लॉगिन",

        stepLoginDescription:
            "प्याज जाँच प्रणाली का उपयोग करने के लिए लॉगिन करें।",

        stepAssess: "जाँच करें",

        stepAssessDescription:
            "AI जाँच के लिए प्याज की साफ तस्वीर अपलोड करें।",

        stepResult: "परिणाम देखें",

        stepResultDescription:
            "गुणवत्ता परिणाम, श्रेणी और सुझाव देखें।",

        ctaTitle:
            "क्या आप प्याज की गुणवत्ता जाँच को स्मार्ट बनाना चाहते हैं?",

        ctaDescription:
            "तेज़ और स्मार्ट गुणवत्ता जाँच के लिए कृषिनेत्र का उपयोग करें।",

        footerTagline:
            "AI की दृष्टि, किसान की समृद्धि",

        assess: "प्याज की जाँच",

        yourOnion: "आपका प्याज",

        assessmentDescription:
            "AI आधारित गुणवत्ता जाँच के लिए प्याज की तस्वीर अपलोड करें।",

        upload: "तस्वीर अपलोड करें",

        analyze: "प्याज का विश्लेषण करें",

        quality: "गुणवत्ता स्कोर",

        grade: "श्रेणी",

        defects: "दोष",

        recommendation: "सुझाव",

        confidence: "विश्वास स्तर",

        explore: "देखें",

        welcome: "स्वागत है",

        noHistory: "कोई जाँच इतिहास उपलब्ध नहीं है।",

        invalidImage:
            "कृपया सही तस्वीर चुनें।",

        imageTooLarge:
            "तस्वीर का आकार 5 MB से कम होना चाहिए।",

        noImage:
            "कृपया प्याज की तस्वीर चुनें।",

        analysisFailed:
            "AI विश्लेषण असफल हुआ। कृपया फिर से प्रयास करें।",

        serverError:
            "सर्वर में समस्या है। कृपया फिर से प्रयास करें।"
    },


    // ================= MARATHI =================

    mr: {

        home: "मुख्यपृष्ठ",
        about: "आमच्याबद्दल",
        features: "वैशिष्ट्ये",
        history: "इतिहास",
        dashboard: "डॅशबोर्ड",
        profile: "प्रोफाइल",
        logout: "लॉग आउट",

        login: "लॉगिन",
        signup: "साइन अप",
        farmerLogin: "शेतकरी लॉगिन",
        adminLogin: "अॅडमिन लॉगिन",

        getStarted: "सुरुवात करा →",
        learnMore: "अधिक जाणून घ्या",

        heroDescription:
            "कृषिनेत्र AI च्या मदतीने कांद्याच्या गुणवत्तेचे मूल्यांकन करते, वर्गीकरण करते आणि बाजारातील निर्णय घेण्यास मदत करते.",

        aboutTitle:
            "कांद्याच्या प्रतिमेपासून स्मार्ट निर्णयापर्यंत",

        aboutDescription:
            "कृषिनेत्र AI च्या मदतीने पारंपरिक कांदा गुणवत्ता तपासणी अधिक जलद आणि डेटा आधारित बनवते.",

        smartAssessment: "स्मार्ट तपासणी",
        smartAssessmentDescription:
            "AI आधारित संगणक दृष्टी मॉडेलद्वारे कांद्याच्या प्रतिमेचे विश्लेषण करा.",

        dataDriven: "डेटा आधारित",
        dataDrivenDescription:
            "गुणवत्ता परिणाम आणि डिजिटल तपासणी नोंदी मिळवा.",

        betterUtilization: "योग्य वापर",
        betterUtilizationDescription:
            "कांद्याच्या स्थितीनुसार योग्य वापराचा निर्णय घेण्यास मदत.",

        aiGrading: "AI वर्गीकरण",
        aiGradingDescription:
            "जलद आणि अधिक सुसंगत गुणवत्तेसाठी AI आधारित तपासणी.",

        qualityAssessment: "गुणवत्ता तपासणी",
        qualityAssessmentDescription:
            "कांद्याचे दिसणारे गुणधर्म आणि दोष तपासा.",

        digitalHistory: "डिजिटल इतिहास",
        digitalHistoryDescription:
            "तपासणी नोंदी जतन करा आणि सहज पाहा.",

        smartUtilization: "स्मार्ट वापर",
        utilizationDescription:
            "कांद्याच्या स्थितीनुसार योग्य वापराचा सल्ला मिळवा.",

        easyAccess: "सोपे वापर",
        easyAccessDescription:
            "शेतकरी आणि बाजारातील वापरकर्त्यांसाठी सोपे इंटरफेस.",

        multilingual: "बहुभाषिक",
        multilingualDescription:
            "सोप्या वापरासाठी अनेक भारतीय भाषांचा सपोर्ट.",

        howItWorks: "हे कसे कार्य करते",

        simpleProcess: "तीन सोपे टप्पे",

        stepLogin: "लॉगिन",
        stepLoginDescription:
            "कांदा तपासणी प्रणाली वापरण्यासाठी लॉगिन करा.",

        stepAssess: "तपासणी",
        stepAssessDescription:
            "AI तपासणीसाठी कांद्याची स्पष्ट प्रतिमा अपलोड करा.",

        stepResult: "निकाल",
        stepResultDescription:
            "गुणवत्ता निकाल, वर्ग आणि शिफारस पहा.",

        ctaTitle:
            "कांद्याची गुणवत्ता तपासणी अधिक स्मार्ट बनवूया?",

        ctaDescription:
            "जलद आणि स्मार्ट गुणवत्ता तपासणीसाठी कृषिनेत्र वापरा.",

        footerTagline:
            "AI ची दृष्टी, शेतकऱ्यांची समृद्धी",

        assess: "कांदा तपासा",
        yourOnion: "तुमचा कांदा",

        assessmentDescription:
            "AI आधारित गुणवत्ता तपासणीसाठी कांद्याची प्रतिमा अपलोड करा.",

        upload: "प्रतिमा अपलोड करा",
        analyze: "कांद्याचे विश्लेषण करा",

        quality: "गुणवत्ता स्कोअर",
        grade: "वर्ग",
        defects: "दोष",
        recommendation: "शिफारस",
        confidence: "विश्वास पातळी",

        explore: "पहा",
        welcome: "स्वागत आहे",

        noHistory: "तपासणी इतिहास उपलब्ध नाही.",

        invalidImage:
            "कृपया योग्य प्रतिमा निवडा.",

        imageTooLarge:
            "प्रतिमेचा आकार 5 MB पेक्षा कमी असावा.",

        noImage:
            "कृपया कांद्याची प्रतिमा निवडा.",

        analysisFailed:
            "AI विश्लेषण अयशस्वी झाले. पुन्हा प्रयत्न करा.",

        serverError:
            "सर्व्हरमध्ये समस्या आहे. पुन्हा प्रयत्न करा."
    },


    // ================= GUJARATI =================

    gu: {

        home: "હોમ",
        about: "અમારા વિશે",
        features: "વિશેષતાઓ",
        history: "ઇતિહાસ",
        dashboard: "ડેશબોર્ડ",
        profile: "પ્રોફાઇલ",
        logout: "લોગ આઉટ",

        login: "લોગિન",
        signup: "સાઇન અપ",
        farmerLogin: "ખેડૂત લોગિન",
        adminLogin: "એડમિન લોગિન",

        getStarted: "શરૂ કરો →",
        learnMore: "વધુ જાણો",

        heroDescription:
            "કૃષિનેત્ર AI ની મદદથી ડુંગળીની ગુણવત્તાનું મૂલ્યાંકન કરે છે, વર્ગીકરણ કરે છે અને બજારના સારા નિર્ણયો લેવામાં મદદ કરે છે.",

        aboutTitle:
            "ડુંગળીની તસવીરથી સ્માર્ટ નિર્ણય સુધી",

        aboutDescription:
            "કૃષિનેત્ર AI દ્વારા પરંપરાગત ડુંગળી ગુણવત્તા તપાસને ઝડપી અને ડેટા આધારિત પ્રક્રિયામાં ફેરવે છે.",

        smartAssessment: "સ્માર્ટ તપાસ",
        smartAssessmentDescription:
            "AI આધારિત કમ્પ્યુટર વિઝન મોડલથી ડુંગળીની તસવીરનું વિશ્લેષણ કરો.",

        dataDriven: "ડેટા આધારિત",
        dataDrivenDescription:
            "ગુણવત્તા પરિણામો અને ડિજિટલ તપાસ રેકોર્ડ મેળવો.",

        betterUtilization: "સારો ઉપયોગ",
        betterUtilizationDescription:
            "ડુંગળીની સ્થિતિ પ્રમાણે યોગ્ય ઉપયોગ માટે મદદ મેળવો.",

        aiGrading: "AI વર્ગીકરણ",
        aiGradingDescription:
            "ઝડપી અને સતત ગુણવત્તા વર્ગીકરણ માટે AI તપાસ.",

        qualityAssessment: "ગુણવત્તા તપાસ",
        qualityAssessmentDescription:
            "ડુંગળીના દેખાતા ગુણધર્મો અને ખામીઓ તપાસો.",

        digitalHistory: "ડિજિટલ ઇતિહાસ",
        digitalHistoryDescription:
            "તપાસના રેકોર્ડ સાચવો અને સરળતાથી જુઓ.",

        smartUtilization: "સ્માર્ટ ઉપયોગ",
        utilizationDescription:
            "ડુંગળીની સ્થિતિ અનુસાર યોગ્ય ઉપયોગની ભલામણ મેળવો.",

        easyAccess: "સરળ ઉપયોગ",
        easyAccessDescription:
            "ખેડૂતો અને બજારના વપરાશકર્તાઓ માટે સરળ ઇન્ટરફેસ.",

        multilingual: "બહુભાષી",
        multilingualDescription:
            "સરળ ઉપયોગ માટે ઘણી ભારતીય ભાષાઓનો સપોર્ટ.",

        howItWorks: "તે કેવી રીતે કામ કરે છે",

        simpleProcess: "ત્રણ સરળ પગલાં",

        stepLogin: "લોગિન",
        stepLoginDescription:
            "ડુંગળી તપાસ સિસ્ટમનો ઉપયોગ કરવા લોગિન કરો.",

        stepAssess: "તપાસ",
        stepAssessDescription:
            "AI તપાસ માટે ડુંગળીની સ્પષ્ટ તસવીર અપલોડ કરો.",

        stepResult: "પરિણામ",
        stepResultDescription:
            "ગુણવત્તા પરિણામ, વર્ગ અને ભલામણ જુઓ.",

        ctaTitle:
            "ડુંગળીની ગુણવત્તા તપાસને વધુ સ્માર્ટ બનાવવા તૈયાર છો?",

        ctaDescription:
            "ઝડપી અને સ્માર્ટ ગુણવત્તા તપાસ માટે કૃષિનેત્રનો ઉપયોગ કરો.",

        footerTagline:
            "AI ની દૃષ્ટિ, ખેડૂતની સમૃદ્ધિ",

        assess: "ડુંગળી તપાસો",
        yourOnion: "તમારી ડુંગળી",

        assessmentDescription:
            "AI આધારિત ગુણવત્તા તપાસ માટે ડુંગળીની તસવીર અપલોડ કરો.",

        upload: "તસવીર અપલોડ કરો",
        analyze: "ડુંગળીનું વિશ્લેષણ કરો",

        quality: "ગુણવત્તા સ્કોર",
        grade: "વર્ગ",
        defects: "ખામીઓ",
        recommendation: "ભલામણ",
        confidence: "વિશ્વાસ સ્તર",

        explore: "જુઓ",
        welcome: "સ્વાગત છે",

        noHistory: "કોઈ તપાસ ઇતિહાસ ઉપલબ્ધ નથી.",

        invalidImage:
            "કૃપા કરીને યોગ્ય તસવીર પસંદ કરો.",

        imageTooLarge:
            "તસવીરનું કદ 5 MB કરતાં ઓછું હોવું જોઈએ.",

        noImage:
            "કૃપા કરીને ડુંગળીની તસવીર પસંદ કરો.",

        analysisFailed:
            "AI વિશ્લેષણ નિષ્ફળ થયું. ફરી પ્રયાસ કરો.",

        serverError:
            "સર્વરમાં સમસ્યા છે. ફરી પ્રયાસ કરો."
    },


    // ================= PUNJABI =================

    pa: {

        home: "ਹੋਮ",
        about: "ਸਾਡੇ ਬਾਰੇ",
        features: "ਵਿਸ਼ੇਸ਼ਤਾਵਾਂ",
        history: "ਇਤਿਹਾਸ",
        dashboard: "ਡੈਸ਼ਬੋਰਡ",
        profile: "ਪ੍ਰੋਫਾਈਲ",
        logout: "ਲੌਗ ਆਉਟ",

        login: "ਲੌਗਇਨ",
        signup: "ਸਾਈਨ ਅੱਪ",
        farmerLogin: "ਕਿਸਾਨ ਲੌਗਇਨ",
        adminLogin: "ਐਡਮਿਨ ਲੌਗਇਨ",

        getStarted: "ਸ਼ੁਰੂ ਕਰੋ →",
        learnMore: "ਹੋਰ ਜਾਣੋ",

        heroDescription:
            "ਕ੍ਰਿਸ਼ੀਨੇਤ੍ਰ AI ਦੀ ਮਦਦ ਨਾਲ ਪਿਆਜ਼ ਦੀ ਗੁਣਵੱਤਾ ਦੀ ਜਾਂਚ ਕਰਦਾ ਹੈ, ਸ਼੍ਰੇਣੀ ਦੱਸਦਾ ਹੈ ਅਤੇ ਵਧੀਆ ਮਾਰਕੀਟ ਫੈਸਲਿਆਂ ਵਿੱਚ ਮਦਦ ਕਰਦਾ ਹੈ।",

        aboutTitle:
            "ਪਿਆਜ਼ ਦੀ ਤਸਵੀਰ ਤੋਂ ਸਮਾਰਟ ਫੈਸਲੇ ਤੱਕ",

        aboutDescription:
            "ਕ੍ਰਿਸ਼ੀਨੇਤ੍ਰ AI ਦੀ ਮਦਦ ਨਾਲ ਰਵਾਇਤੀ ਪਿਆਜ਼ ਗੁਣਵੱਤਾ ਜਾਂਚ ਨੂੰ ਤੇਜ਼ ਅਤੇ ਡਾਟਾ ਅਧਾਰਿਤ ਬਣਾਉਂਦਾ ਹੈ।",

        smartAssessment: "ਸਮਾਰਟ ਜਾਂਚ",
        smartAssessmentDescription:
            "AI ਅਧਾਰਿਤ ਕੰਪਿਊਟਰ ਵਿਜ਼ਨ ਮਾਡਲ ਨਾਲ ਪਿਆਜ਼ ਦੀ ਤਸਵੀਰ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ।",

        dataDriven: "ਡਾਟਾ ਅਧਾਰਿਤ",
        dataDrivenDescription:
            "ਗੁਣਵੱਤਾ ਨਤੀਜੇ ਅਤੇ ਡਿਜ਼ੀਟਲ ਜਾਂਚ ਰਿਕਾਰਡ ਪ੍ਰਾਪਤ ਕਰੋ।",

        betterUtilization: "ਵਧੀਆ ਵਰਤੋਂ",
        betterUtilizationDescription:
            "ਪਿਆਜ਼ ਦੀ ਸਥਿਤੀ ਅਨੁਸਾਰ ਢੁਕਵੀਂ ਵਰਤੋਂ ਲਈ ਮਦਦ।",

        aiGrading: "AI ਗ੍ਰੇਡਿੰਗ",
        aiGradingDescription:
            "ਤੇਜ਼ ਅਤੇ ਇਕਸਾਰ ਗੁਣਵੱਤਾ ਵਰਗੀਕਰਨ ਲਈ AI ਜਾਂਚ।",

        qualityAssessment: "ਗੁਣਵੱਤਾ ਜਾਂਚ",
        qualityAssessmentDescription:
            "ਪਿਆਜ਼ ਦੀ ਦਿੱਖ ਅਤੇ ਨਜ਼ਰ ਆਉਣ ਵਾਲੀਆਂ ਖਾਮੀਆਂ ਦੀ ਜਾਂਚ ਕਰੋ।",

        digitalHistory: "ਡਿਜ਼ੀਟਲ ਇਤਿਹਾਸ",
        digitalHistoryDescription:
            "ਜਾਂਚ ਰਿਕਾਰਡ ਸੁਰੱਖਿਅਤ ਕਰੋ ਅਤੇ ਆਸਾਨੀ ਨਾਲ ਵੇਖੋ।",

        smartUtilization: "ਸਮਾਰਟ ਵਰਤੋਂ",
        utilizationDescription:
            "ਪਿਆਜ਼ ਦੀ ਸਥਿਤੀ ਅਨੁਸਾਰ ਢੁਕਵੀਂ ਵਰਤੋਂ ਦੀ ਸਿਫਾਰਸ਼ ਪ੍ਰਾਪਤ ਕਰੋ।",

        easyAccess: "ਆਸਾਨ ਵਰਤੋਂ",
        easyAccessDescription:
            "ਕਿਸਾਨਾਂ ਅਤੇ ਮਾਰਕੀਟ ਉਪਭੋਗਤਾਵਾਂ ਲਈ ਸਧਾਰਣ ਇੰਟਰਫੇਸ।",

        multilingual: "ਬਹੁਭਾਸ਼ੀ",
        multilingualDescription:
            "ਆਸਾਨ ਵਰਤੋਂ ਲਈ ਕਈ ਭਾਰਤੀ ਭਾਸ਼ਾਵਾਂ ਦਾ ਸਮਰਥਨ।",

        howItWorks: "ਇਹ ਕਿਵੇਂ ਕੰਮ ਕਰਦਾ ਹੈ",

        simpleProcess: "ਤਿੰਨ ਆਸਾਨ ਕਦਮ",

        stepLogin: "ਲੌਗਇਨ",
        stepLoginDescription:
            "ਪਿਆਜ਼ ਜਾਂਚ ਪ੍ਰਣਾਲੀ ਦੀ ਵਰਤੋਂ ਲਈ ਲੌਗਇਨ ਕਰੋ।",

        stepAssess: "ਜਾਂਚ",
        stepAssessDescription:
            "AI ਜਾਂਚ ਲਈ ਪਿਆਜ਼ ਦੀ ਸਾਫ਼ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ।",

        stepResult: "ਨਤੀਜਾ",
        stepResultDescription:
            "ਗੁਣਵੱਤਾ ਨਤੀਜਾ, ਸ਼੍ਰੇਣੀ ਅਤੇ ਸਿਫਾਰਸ਼ ਵੇਖੋ।",

        ctaTitle:
            "ਕੀ ਤੁਸੀਂ ਪਿਆਜ਼ ਦੀ ਗੁਣਵੱਤਾ ਜਾਂਚ ਨੂੰ ਹੋਰ ਸਮਾਰਟ ਬਣਾਉਣਾ ਚਾਹੁੰਦੇ ਹੋ?",

        ctaDescription:
            "ਤੇਜ਼ ਅਤੇ ਸਮਾਰਟ ਗੁਣਵੱਤਾ ਜਾਂਚ ਲਈ ਕ੍ਰਿਸ਼ੀਨੇਤ੍ਰ ਦੀ ਵਰਤੋਂ ਕਰੋ।",

        footerTagline:
            "AI ਦੀ ਨਜ਼ਰ, ਕਿਸਾਨ ਦੀ ਤਰੱਕੀ",

        assess: "ਪਿਆਜ਼ ਦੀ ਜਾਂਚ",

        yourOnion: "ਤੁਹਾਡਾ ਪਿਆਜ਼",

        assessmentDescription:
            "AI ਅਧਾਰਿਤ ਗੁਣਵੱਤਾ ਜਾਂਚ ਲਈ ਪਿਆਜ਼ ਦੀ ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ।",

        upload: "ਤਸਵੀਰ ਅਪਲੋਡ ਕਰੋ",
        analyze: "ਪਿਆਜ਼ ਦਾ ਵਿਸ਼ਲੇਸ਼ਣ ਕਰੋ",

        quality: "ਗੁਣਵੱਤਾ ਸਕੋਰ",
        grade: "ਸ਼੍ਰੇਣੀ",
        defects: "ਖਾਮੀਆਂ",
        recommendation: "ਸਿਫਾਰਸ਼",
        confidence: "ਭਰੋਸੇ ਦਾ ਪੱਧਰ",

        explore: "ਵੇਖੋ",
        welcome: "ਜੀ ਆਇਆਂ ਨੂੰ",

        noHistory: "ਕੋਈ ਜਾਂਚ ਇਤਿਹਾਸ ਉਪਲਬਧ ਨਹੀਂ ਹੈ।",

        invalidImage:
            "ਕਿਰਪਾ ਕਰਕੇ ਸਹੀ ਤਸਵੀਰ ਚੁਣੋ।",

        imageTooLarge:
            "ਤਸਵੀਰ ਦਾ ਆਕਾਰ 5 MB ਤੋਂ ਘੱਟ ਹੋਣਾ ਚਾਹੀਦਾ ਹੈ।",

        noImage:
            "ਕਿਰਪਾ ਕਰਕੇ ਪਿਆਜ਼ ਦੀ ਤਸਵੀਰ ਚੁਣੋ।",

        analysisFailed:
            "AI ਵਿਸ਼ਲੇਸ਼ਣ ਅਸਫਲ ਹੋ ਗਿਆ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।",

        serverError:
            "ਸਰਵਰ ਵਿੱਚ ਸਮੱਸਿਆ ਹੈ। ਦੁਬਾਰਾ ਕੋਸ਼ਿਸ਼ ਕਰੋ।"
    },


    // ================= BENGALI =================

    bn: {

        home: "হোম",
        about: "আমাদের সম্পর্কে",
        features: "বৈশিষ্ট্য",
        history: "ইতিহাস",
        dashboard: "ড্যাশবোর্ড",
        profile: "প্রোফাইল",
        logout: "লগ আউট",

        login: "লগইন",
        signup: "সাইন আপ",
        farmerLogin: "কৃষক লগইন",
        adminLogin: "অ্যাডমিন লগইন",

        getStarted: "শুরু করুন →",
        learnMore: "আরও জানুন",

        heroDescription:
            "কৃষিনেত্র AI ব্যবহার করে পেঁয়াজের গুণমান পরীক্ষা করে, শ্রেণিবদ্ধ করে এবং ভালো বাজার সিদ্ধান্ত নিতে সাহায্য করে।",

        aboutTitle:
            "পেঁয়াজের ছবি থেকে স্মার্ট সিদ্ধান্ত পর্যন্ত",

        aboutDescription:
            "কৃষিনেত্র AI ব্যবহার করে প্রচলিত পেঁয়াজের গুণমান পরীক্ষা দ্রুত ও ডেটা ভিত্তিক করে।",

        smartAssessment: "স্মার্ট পরীক্ষা",
        smartAssessmentDescription:
            "AI ভিত্তিক কম্পিউটার ভিশন মডেল দিয়ে পেঁয়াজের ছবি বিশ্লেষণ করুন।",

        dataDriven: "ডেটা ভিত্তিক",
        dataDrivenDescription:
            "গুণমানের ফলাফল এবং ডিজিটাল পরীক্ষার রেকর্ড পান।",

        betterUtilization: "উন্নত ব্যবহার",
        betterUtilizationDescription:
            "পেঁয়াজের অবস্থার ভিত্তিতে উপযুক্ত ব্যবহারে সহায়তা পান।",

        aiGrading: "AI গ্রেডিং",
        aiGradingDescription:
            "দ্রুত এবং নির্ভরযোগ্য গুণমান শ্রেণিবিন্যাসের জন্য AI পরীক্ষা।",

        qualityAssessment: "গুণমান পরীক্ষা",
        qualityAssessmentDescription:
            "পেঁয়াজের দৃশ্যমান বৈশিষ্ট্য এবং ত্রুটি পরীক্ষা করুন।",

        digitalHistory: "ডিজিটাল ইতিহাস",
        digitalHistoryDescription:
            "পরীক্ষার রেকর্ড সংরক্ষণ করুন এবং সহজে দেখুন।",

        smartUtilization: "স্মার্ট ব্যবহার",
        utilizationDescription:
            "পেঁয়াজের অবস্থার ভিত্তিতে উপযুক্ত ব্যবহারের পরামর্শ পান।",

        easyAccess: "সহজ ব্যবহার",
        easyAccessDescription:
            "কৃষক এবং বাজার ব্যবহারকারীদের জন্য সহজ ইন্টারফেস।",

        multilingual: "বহুভাষিক",
        multilingualDescription:
            "সহজ ব্যবহারের জন্য একাধিক ভারতীয় ভাষার সমর্থন।",

        howItWorks: "এটি কীভাবে কাজ করে",

        simpleProcess: "তিনটি সহজ ধাপ",

        stepLogin: "লগইন",
        stepLoginDescription:
            "পেঁয়াজ পরীক্ষা ব্যবস্থা ব্যবহার করতে লগইন করুন।",

        stepAssess: "পরীক্ষা",
        stepAssessDescription:
            "AI পরীক্ষার জন্য পেঁয়াজের পরিষ্কার ছবি আপলোড করুন।",

        stepResult: "ফলাফল",
        stepResultDescription:
            "গুণমানের ফলাফল, শ্রেণি এবং পরামর্শ দেখুন।",

        ctaTitle:
            "পেঁয়াজের গুণমান পরীক্ষা আরও স্মার্ট করতে প্রস্তুত?",

        ctaDescription:
            "দ্রুত এবং স্মার্ট গুণমান পরীক্ষার জন্য কৃষিনেত্র ব্যবহার করুন।",

        footerTagline:
            "AI-এর দৃষ্টি, কৃষকের সমৃদ্ধি",

        assess: "পেঁয়াজ পরীক্ষা করুন",

        yourOnion: "আপনার পেঁয়াজ",

        assessmentDescription:
            "AI ভিত্তিক গুণমান পরীক্ষার জন্য পেঁয়াজের ছবি আপলোড করুন।",

        upload: "ছবি আপলোড করুন",
        analyze: "পেঁয়াজ বিশ্লেষণ করুন",

        quality: "গুণমান স্কোর",
        grade: "শ্রেণি",
        defects: "ত্রুটি",
        recommendation: "পরামর্শ",
        confidence: "নির্ভরযোগ্যতার স্তর",

        explore: "দেখুন",
        welcome: "স্বাগতম",

        noHistory: "কোনো পরীক্ষার ইতিহাস নেই।",

        invalidImage:
            "অনুগ্রহ করে সঠিক ছবি নির্বাচন করুন।",

        imageTooLarge:
            "ছবির আকার 5 MB-এর কম হতে হবে।",

        noImage:
            "অনুগ্রহ করে পেঁয়াজের ছবি নির্বাচন করুন।",

        analysisFailed:
            "AI বিশ্লেষণ ব্যর্থ হয়েছে। আবার চেষ্টা করুন।",

        serverError:
            "সার্ভারে সমস্যা হয়েছে। আবার চেষ্টা করুন।"
    }

};


// ======================================================
// LANGUAGE SYSTEM
// ======================================================

function changeLanguage(language) {

    localStorage.setItem(
        "krishinetraLanguage",
        language
    );

    loadLanguage(language);
}


function loadLanguage(language = null) {

    const savedLanguage =
        language ||
        localStorage.getItem("krishinetraLanguage") ||
        "en";

    const texts =
        translations[savedLanguage] ||
        translations.en;


    // Change HTML language

    document.documentElement.lang =
        savedLanguage;


    // Translate normal elements

    document
        .querySelectorAll("[data-i18n]")
        .forEach(element => {

            const key =
                element.getAttribute("data-i18n");

            if (texts[key]) {

                element.textContent =
                    texts[key];

            }

        });


    // Translate placeholders

    document
        .querySelectorAll("[data-i18n-placeholder]")
        .forEach(element => {

            const key =
                element.getAttribute(
                    "data-i18n-placeholder"
                );

            if (texts[key]) {

                element.placeholder =
                    texts[key];

            }

        });


    // Set language dropdown

    const languageSelect =
        document.getElementById(
            "languageSelect"
        );

    if (languageSelect) {

        languageSelect.value =
            savedLanguage;

    }
}


// ======================================================
// GET CURRENT LANGUAGE TEXT
// ======================================================

function getText(key) {

    const language =
        localStorage.getItem(
            "krishinetraLanguage"
        ) || "en";

    return (
        translations[language]?.[key] ||
        translations.en[key] ||
        key
    );
}


// ======================================================
// IMAGE INPUT
// ======================================================

function setupImageInput() {

    const imageInput =
        document.getElementById(
            "onionImage"
        );

    if (!imageInput) {
        return;
    }


    imageInput.addEventListener(
        "change",
        function () {

            const file =
                this.files[0];

            if (!file) {
                return;
            }


            // Check image type

            if (!file.type.startsWith("image/")) {

                alert(
                    getText("invalidImage")
                );

                this.value = "";

                return;
            }


            // Maximum 5 MB

            if (file.size > 5 * 1024 * 1024) {

                alert(
                    getText("imageTooLarge")
                );

                this.value = "";

                return;
            }


            // Preview

            const preview =
                document.getElementById(
                    "previewImage"
                ) ||
                document.getElementById(
                    "preview"
                );


            if (preview) {

                const reader =
                    new FileReader();

                reader.onload =
                    function (event) {

                        preview.src =
                            event.target.result;

                        preview.style.display =
                            "block";

                    };

                reader.readAsDataURL(file);
            }

        }
    );
}


// ======================================================
// ANALYZE ONION
// ======================================================

async function analyzeOnion() {

    const imageInput =
        document.getElementById(
            "onionImage"
        );


    if (!imageInput) {
        return;
    }


    const file =
        imageInput.files[0];


    if (!file) {

        alert(
            getText("noImage")
        );

        return;
    }


    // Check size again

    if (file.size > 5 * 1024 * 1024) {

        alert(
            getText("imageTooLarge")
        );

        return;
    }


    const formData =
        new FormData();

    formData.append(
        "image",
        file
    );


    // Find button

    const button =
        document.querySelector(
            ".analyze-btn"
        ) ||
        document.querySelector(
            "[onclick='analyzeOnion()']"
        );


    const originalText =
        button ?
        button.textContent :
        "";


    if (button) {

        button.disabled = true;

        button.textContent =
            "Analyzing...";

    }


    try {

        const response =
            await fetch(
                "/analyze",
                {
                    method: "POST",
                    body: formData
                }
            );


        const result =
            await response.json();


        if (!response.ok) {

            throw new Error(
                result.error ||
                getText("analysisFailed")
            );

        }


        // Save result

        sessionStorage.setItem(
            "analysisResult",
            JSON.stringify(result)
        );


        // Open result page

        window.location.href =
            "/result";


    }
    catch (error) {

        console.error(
            "Analysis Error:",
            error
        );

        alert(
            error.message ||
            getText("analysisFailed")
        );


        if (button) {

            button.disabled = false;

            button.textContent =
                originalText ||
                getText("analyze");

        }

    }
}


// ======================================================
// PAGE LOAD
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadLanguage();

        setupImageInput();

    }
);


