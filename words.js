// فایل داده‌های لغات - لغت‌نامه جامع انگلیسی به فارسی
const vocabularyData = {
    // دسته 1: مکالمه روزمره
    daily_conversation: [
        {
            english: "Hello",
            persian: "سلام",
            phonetic: "həˈloʊ",
            type: "حرف ندا",
            difficulty: "easy",
            example: "Hello, how are you today? - سلام، امروز چطوری؟"
        },
        {
            english: "Goodbye",
            persian: "خداحافظ",
            phonetic: "ɡʊdˈbaɪ",
            type: "حرف ندا",
            difficulty: "easy",
            example: "Goodbye, see you tomorrow! - خداحافظ، فردا می‌بینمت!"
        },
        {
            english: "Thank you",
            persian: "متشکرم",
            phonetic: "θæŋk juː",
            type: "عبارت",
            difficulty: "easy",
            example: "Thank you for your help. - متشکرم برای کمکت."
        },
        {
            english: "Sorry",
            persian: "متاسفم",
            phonetic: "ˈsɑːri",
            type: "حرف ندا",
            difficulty: "easy",
            example: "I'm sorry for being late. - متاسفم که دیر کردم."
        },
        {
            english: "Please",
            persian: "لطفاً",
            phonetic: "pliːz",
            type: "قید",
            difficulty: "easy",
            example: "Please sit down. - لطفاً بنشین."
        },
        {
            english: "Friend",
            persian: "دوست",
            phonetic: "frend",
            type: "اسم",
            difficulty: "easy",
            example: "She is my best friend. - او بهترین دوست من است."
        },
        {
            english: "Family",
            persian: "خانواده",
            phonetic: "ˈfæməli",
            type: "اسم",
            difficulty: "easy",
            example: "I love my family. - من خانواده‌ام را دوست دارم."
        },
        {
            english: "Morning",
            persian: "صبح",
            phonetic: "ˈmɔːrnɪŋ",
            type: "اسم",
            difficulty: "easy",
            example: "Good morning, everyone! - صبح بخیر همه!"
        },
        {
            english: "Evening",
            persian: "عصر",
            phonetic: "ˈiːvnɪŋ",
            type: "اسم",
            difficulty: "easy",
            example: "Good evening, how are you? - عصر بخیر، چطوری؟"
        },
        {
            english: "Night",
            persian: "شب",
            phonetic: "naɪt",
            type: "اسم",
            difficulty: "easy",
            example: "Good night, sleep well. - شب بخیر، خوب بخواب."
        },
        {
            english: "Today",
            persian: "امروز",
            phonetic: "təˈdeɪ",
            type: "قید",
            difficulty: "easy",
            example: "What are you doing today? - امروز چکار می‌کنی؟"
        },
        {
            english: "Tomorrow",
            persian: "فردا",
            phonetic: "təˈmɑːroʊ",
            type: "قید",
            difficulty: "easy",
            example: "See you tomorrow. - فردا می‌بینمت."
        },
        {
            english: "Yesterday",
            persian: "دیروز",
            phonetic: "ˈjestərdeɪ",
            type: "قید",
            difficulty: "easy",
            example: "Yesterday was a good day. - دیروز روز خوبی بود."
        },
        {
            english: "Weather",
            persian: "آب و هوا",
            phonetic: "ˈweðər",
            type: "اسم",
            difficulty: "easy",
            example: "The weather is nice today. - امروز آب و هوا خوب است."
        },
        {
            english: "Rain",
            persian: "باران",
            phonetic: "reɪn",
            type: "اسم",
            difficulty: "easy",
            example: "It's raining outside. - بیرون باران می‌بارد."
        },
        {
            english: "Sun",
            persian: "آفتاب",
            phonetic: "sʌn",
            type: "اسم",
            difficulty: "easy",
            example: "The sun is shining. - آفتاب می‌تابد."
        },
        {
            english: "Food",
            persian: "غذا",
            phonetic: "fuːd",
            type: "اسم",
            difficulty: "easy",
            example: "The food is delicious. - غذا خوشمزه است."
        },
        {
            english: "Water",
            persian: "آب",
            phonetic: "ˈwɔːtər",
            type: "اسم",
            difficulty: "easy",
            example: "Drink water every day. - هر روز آب بنوش."
        },
        {
            english: "Work",
            persian: "کار",
            phonetic: "wɜːrk",
            type: "اسم/فعل",
            difficulty: "easy",
            example: "I go to work every day. - هر روز به سر کار می‌روم."
        },
        {
            english: "Home",
            persian: "خانه",
            phonetic: "hoʊm",
            type: "اسم",
            difficulty: "easy",
            example: "I'm going home now. - الان دارم به خانه می‌روم."
        },
        {
            english: "Love",
            persian: "عشق/دوست داشتن",
            phonetic: "lʌv",
            type: "اسم/فعل",
            difficulty: "easy",
            example: "I love you. - دوستت دارم."
        },
        {
            english: "Happy",
            persian: "خوشحال",
            phonetic: "ˈhæpi",
            type: "صفت",
            difficulty: "easy",
            example: "I feel happy today. - امروز احساس خوشحالی می‌کنم."
        },
        {
            english: "Sad",
            persian: "غمگین",
            phonetic: "sæd",
            type: "صفت",
            difficulty: "easy",
            example: "Why are you sad? - چرا غمگینی؟"
        },
        {
            english: "Beautiful",
            persian: "زیبا",
            phonetic: "ˈbjuːtɪfl",
            type: "صفت",
            difficulty: "medium",
            example: "You are beautiful. - تو زیبایی."
        },
        {
            english: "Handsome",
            persian: "خوش‌تیپ",
            phonetic: "ˈhænsəm",
            type: "صفت",
            difficulty: "medium",
            example: "He is handsome. - او خوش‌تیپ است."
        },
        {
            english: "Hungry",
            persian: "گرسنه",
            phonetic: "ˈhʌŋɡri",
            type: "صفت",
            difficulty: "easy",
            example: "I am hungry. - من گرسنه هستم."
        },
        {
            english: "Thirsty",
            persian: "تشنه",
            phonetic: "ˈθɜːrsti",
            type: "صفت",
            difficulty: "easy",
            example: "I am thirsty. - من تشنه هستم."
        },
        {
            english: "Tired",
            persian: "خسته",
            phonetic: "ˈtaɪərd",
            type: "صفت",
            difficulty: "easy",
            example: "I am tired tonight. - امشب خسته هستم."
        }
    ],

    // دسته 2: تکنولوژی
    technology: [
        {
            english: "Computer",
            persian: "کامپیوتر",
            phonetic: "kəmˈpjuːtər",
            type: "اسم",
            difficulty: "easy",
            example: "I work on my computer. - من روی کامپیوترم کار می‌کنم."
        },
        {
            english: "Smartphone",
            persian: "تلفن هوشمند",
            phonetic: "ˈsmɑːrtfoʊn",
            type: "اسم",
            difficulty: "medium",
            example: "Everyone has a smartphone now. - الان همه تلفن هوشمند دارند."
        },
        {
            english: "Internet",
            persian: "اینترنت",
            phonetic: "ˈɪntərnet",
            type: "اسم",
            difficulty: "easy",
            example: "The internet is fast here. - اینترنت اینجا سریع است."
        },
        {
            english: "Website",
            persian: "وب‌سایت",
            phonetic: "ˈwebsaɪt",
            type: "اسم",
            difficulty: "easy",
            example: "This website is useful. - این وب‌سایت مفید است."
        },
        {
            english: "Email",
            persian: "ایمیل",
            phonetic: "ˈiːmeɪl",
            type: "اسم",
            difficulty: "easy",
            example: "Send me an email. - به من ایمیل بفرست."
        },
        {
            english: "Password",
            persian: "رمز عبور",
            phonetic: "ˈpæswɜːrd",
            type: "اسم",
            difficulty: "medium",
            example: "Enter your password. - رمز عبورت را وارد کن."
        },
        {
            english: "Download",
            persian: "دانلود کردن",
            phonetic: "ˌdaʊnˈloʊd",
            type: "فعل",
            difficulty: "medium",
            example: "Download the file. - فایل را دانلود کن."
        },
        {
            english: "Upload",
            persian: "آپلود کردن",
            phonetic: "ʌpˈloʊd",
            type: "فعل",
            difficulty: "medium",
            example: "Upload your photos. - عکس‌هایت را آپلود کن."
        },
        {
            english: "Software",
            persian: "نرم‌افزار",
            phonetic: "ˈsɔːftwer",
            type: "اسم",
            difficulty: "medium",
            example: "Install the software. - نرم‌افزار را نصب کن."
        },
        {
            english: "Hardware",
            persian: "سخت‌افزار",
            phonetic: "ˈhɑːrdwer",
            type: "اسم",
            difficulty: "medium",
            example: "Hardware is the physical part. - سخت‌افزار بخش فیزیکی است."
        },
        {
            english: "Keyboard",
            persian: "صفحه کلید",
            phonetic: "ˈkiːbɔːrd",
            type: "اسم",
            difficulty: "medium",
            example: "Type with the keyboard. - با صفحه کلید تایپ کن."
        },
        {
            english: "Screen",
            persian: "صفحه نمایش",
            phonetic: "skriːn",
            type: "اسم",
            difficulty: "easy",
            example: "The screen is broken. - صفحه نمایش شکسته است."
        },
        {
            english: "Application",
            persian: "برنامه کاربردی",
            phonetic: "ˌæplɪˈkeɪʃn",
            type: "اسم",
            difficulty: "medium",
            example: "Open the application. - برنامه را باز کن."
        },
        {
            english: "Database",
            persian: "پایگاه داده",
            phonetic: "ˈdeɪtəbeɪs",
            type: "اسم",
            difficulty: "hard",
            example: "The database stores information. - پایگاه داده اطلاعات را ذخیره می‌کند."
        },
        {
            english: "Artificial Intelligence",
            persian: "هوش مصنوعی",
            phonetic: "ˌɑːrtɪfɪʃl ɪnˈtelɪdʒəns",
            type: "اسم",
            difficulty: "hard",
            example: "AI is changing the world. - هوش مصنوعی جهان را تغییر می‌دهد."
        },
        {
            english: "Robot",
            persian: "ربات",
            phonetic: "ˈroʊbɑːt",
            type: "اسم",
            difficulty: "easy",
            example: "Robots can do many tasks. - ربات‌ها می‌توانند کارهای زیادی انجام دهند."
        },
        {
            english: "Digital",
            persian: "دیجیتال",
            phonetic: "ˈdɪdʒɪtl",
            type: "صفت",
            difficulty: "medium",
            example: "Digital technology is advancing. - تکنولوژی دیجیتال در حال پیشرفت است."
        },
        {
            english: "Cloud",
            persian: "ابر (فضای ابری)",
            phonetic: "klaʊd",
            type: "اسم",
            difficulty: "medium",
            example: "Store your files on the cloud. - فایل‌هایت را در فضای ابری ذخیره کن."
        },
        {
            english: "Security",
            persian: "امنیت",
            phonetic: "sɪˈkjʊrəti",
            type: "اسم",
            difficulty: "medium",
            example: "Security is important online. - امنیت در فضای مجازی مهم است."
        },
        {
            english: "Hacker",
            persian: "هکر",
            phonetic: "ˈhækər",
            type: "اسم",
            difficulty: "medium",
            example: "Hackers steal data. - هکرها داده می‌دزدند."
        }
    ],

    // دسته 3: هنر و فرهنگ
    art: [
        {
            english: "Art",
            persian: "هنر",
            phonetic: "ɑːrt",
            type: "اسم",
            difficulty: "easy",
            example: "I love art and music. - من هنر و موسیقی را دوست دارم."
        },
        {
            english: "Music",
            persian: "موسیقی",
            phonetic: "ˈmjuːzɪk",
            type: "اسم",
            difficulty: "easy",
            example: "Music makes me happy. - موسیقی من را خوشحال می‌کند."
        },
        {
            english: "Painting",
            persian: "نقاشی",
            phonetic: "ˈpeɪntɪŋ",
            type: "اسم",
            difficulty: "medium",
            example: "She is painting a picture. - او در حال نقاشی یک تصویر است."
        },
        {
            english: "Sculpture",
            persian: "مجسمه",
            phonetic: "ˈskʌlptʃər",
            type: "اسم",
            difficulty: "hard",
            example: "The sculpture is made of stone. - مجسمه از سنگ ساخته شده است."
        },
        {
            english: "Cinema",
            persian: "سینما",
            phonetic: "ˈsɪnəmə",
            type: "اسم",
            difficulty: "easy",
            example: "Let's go to the cinema. - بریم سینما."
        },
        {
            english: "Theater",
            persian: "تئاتر",
            phonetic: "ˈθiːətər",
            type: "اسم",
            difficulty: "medium",
            example: "We went to the theater last night. - دیشب به تئاتر رفتیم."
        },
        {
            english: "Literature",
            persian: "ادبیات",
            phonetic: "ˈlɪtərətʃər",
            type: "اسم",
            difficulty: "hard",
            example: "I study literature at university. - من در دانشگاه ادبیات می‌خوانم."
        },
        {
            english: "Poem",
            persian: "شعر",
            phonetic: "ˈpoʊəm",
            type: "اسم",
            difficulty: "easy",
            example: "She wrote a beautiful poem. - او یک شعر زیبا نوشت."
        },
        {
            english: "Poet",
            persian: "شاعر",
            phonetic: "ˈpoʊət",
            type: "اسم",
            difficulty: "easy",
            example: "Rumi is a great poet. - مولانا شاعر بزرگی است."
        },
        {
            english: "Novel",
            persian: "رمان",
            phonetic: "ˈnɑːvl",
            type: "اسم",
            difficulty: "medium",
            example: "I'm reading a novel. - دارم یک رمان می‌خوانم."
        },
        {
            english: "Singer",
            persian: "خواننده",
            phonetic: "ˈsɪŋər",
            type: "اسم",
            difficulty: "easy",
            example: "She is a famous singer. - او یک خواننده معروف است."
        },
        {
            english: "Dance",
            persian: "رقص",
            phonetic: "dæns",
            type: "اسم/فعل",
            difficulty: "easy",
            example: "I love to dance. - من عاشق رقص هستم."
        },
        {
            english: "Photography",
            persian: "عکاسی",
            phonetic: "fəˈtɑːɡrəfi",
            type: "اسم",
            difficulty: "medium",
            example: "Photography is my hobby. - عکاسی سرگرمی من است."
        },
        {
            english: "Museum",
            persian: "موزه",
            phonetic: "mjuːˈziːəm",
            type: "اسم",
            difficulty: "easy",
            example: "We visited the museum. - ما از موزه بازدید کردیم."
        },
        {
            english: "Gallery",
            persian: "گالری",
            phonetic: "ˈɡæləri",
            type: "اسم",
            difficulty: "easy",
            example: "There is an art gallery downtown. - یک گالری هنری در مرکز شهر است."
        },
        {
            english: "Exhibition",
            persian: "نمایشگاه",
            phonetic: "ˌeksɪˈbɪʃn",
            type: "اسم",
            difficulty: "hard",
            example: "There is an exhibition of modern art. - یک نمایشگاه هنر مدرن برقرار است."
        },
        {
            english: "Masterpiece",
            persian: "شاهکار",
            phonetic: "ˈmæstərpiːs",
            type: "اسم",
            difficulty: "hard",
            example: "This painting is a masterpiece. - این نقاشی یک شاهکار است."
        },
        {
            english: "Culture",
            persian: "فرهنگ",
            phonetic: "ˈkʌltʃər",
            type: "اسم",
            difficulty: "medium",
            example: "Our culture is very rich. - فرهنگ ما بسیار غنی است."
        },
        {
            english: "Tradition",
            persian: "سنت",
            phonetic: "trəˈdɪʃn",
            type: "اسم",
            difficulty: "medium",
            example: "We celebrate traditional holidays. - ما اعیاد سنتی را جشن می‌گیریم."
        },
        {
            english: "Instrument",
            persian: "ساز (موسیقی)",
            phonetic: "ˈɪnstrəmənt",
            type: "اسم",
            difficulty: "medium",
            example: "I play a musical instrument. - من یک ساز می‌نوازم."
        }
    ],

    // دسته 4: سفر و گردشگری (اختیاری)
    travel: [
        {
            english: "Travel",
            persian: "سفر",
            phonetic: "ˈtrævl",
            type: "اسم/فعل",
            difficulty: "easy",
            example: "I love to travel. - من عاشق سفر هستم."
        },
        {
            english: "Airport",
            persian: "فرودگاه",
            phonetic: "ˈerpɔːrt",
            type: "اسم",
            difficulty: "easy",
            example: "We arrived at the airport. - ما به فرودگاه رسیدیم."
        },
        {
            english: "Hotel",
            persian: "هتل",
            phonetic: "hoʊˈtel",
            type: "اسم",
            difficulty: "easy",
            example: "We stayed at a nice hotel. - ما در یک هتل خوب اقامت کردیم."
        },
        {
            english: "Passport",
            persian: "گذرنامه",
            phonetic: "ˈpæspɔːrt",
            type: "اسم",
            difficulty: "medium",
            example: "Don't forget your passport. - گذرنامه‌ات را فراموش نکن."
        },
        {
            english: "Ticket",
            persian: "بلیط",
            phonetic: "ˈtɪkɪt",
            type: "اسم",
            difficulty: "easy",
            example: "Buy your ticket online. - بلیطت را آنلاین بخر."
        },
        {
            english: "Journey",
            persian: "سفر (طولانی)",
            phonetic: "ˈdʒɜːrni",
            type: "اسم",
            difficulty: "medium",
            example: "The journey was long. - سفر طولانی بود."
        },
        {
            english: "Destination",
            persian: "مقصد",
            phonetic: "ˌdestɪˈneɪʃn",
            type: "اسم",
            difficulty: "hard",
            example: "What is your destination? - مقصد شما کجاست؟"
        },
        {
            english: "Tourist",
            persian: "گردشگر",
            phonetic: "ˈtʊrɪst",
            type: "اسم",
            difficulty: "easy",
            example: "The city is full of tourists. - شهر پر از گردشگر است."
        },
        {
            english: "Beach",
            persian: "ساحل",
            phonetic: "biːtʃ",
            type: "اسم",
            difficulty: "easy",
            example: "Let's go to the beach. - بریم ساحل."
        },
        {
            english: "Mountain",
            persian: "کوه",
            phonetic: "ˈmaʊntən",
            type: "اسم",
            difficulty: "easy",
            example: "We climbed the mountain. - ما از کوه بالا رفتیم."
        }
    ],

    // دسته 5: سلامت و بدن (اختیاری)
    health: [
        {
            english: "Health",
            persian: "سلامتی",
            phonetic: "helθ",
            type: "اسم",
            difficulty: "easy",
            example: "Health is very important. - سلامتی بسیار مهم است."
        },
        {
            english: "Doctor",
            persian: "دکتر",
            phonetic: "ˈdɑːktər",
            type: "اسم",
            difficulty: "easy",
            example: "I need to see a doctor. - باید یک دکتر ببینم."
        },
        {
            english: "Medicine",
            persian: "دارو",
            phonetic: "ˈmedɪsn",
            type: "اسم",
            difficulty: "medium",
            example: "Take your medicine. - داروهایت را مصرف کن."
        },
        {
            english: "Hospital",
            persian: "بیمارستان",
            phonetic: "ˈhɑːspɪtl",
            type: "اسم",
            difficulty: "easy",
            example: "She works at the hospital. - او در بیمارستان کار می‌کند."
        },
        {
            english: "Exercise",
            persian: "تمرین ورزشی",
            phonetic: "ˈeksərsaɪz",
            type: "اسم/فعل",
            difficulty: "medium",
            example: "Exercise every day. - هر روز ورزش کن."
        },
        {
            english: "Headache",
            persian: "سردرد",
            phonetic: "ˈhedeɪk",
            type: "اسم",
            difficulty: "medium",
            example: "I have a headache. - من سردرد دارم."
        },
        {
            english: "Pain",
            persian: "درد",
            phonetic: "peɪn",
            type: "اسم",
            difficulty: "easy",
            example: "I feel pain. - من درد احساس می‌کنم."
        },
        {
            english: "Sleep",
            persian: "خواب",
            phonetic: "sliːp",
            type: "اسم/فعل",
            difficulty: "easy",
            example: "I need sleep. - به خواب نیاز دارم."
        },
        {
            english: "Food",
            persian: "غذا",
            phonetic: "fuːd",
            type: "اسم",
            difficulty: "easy",
            example: "Healthy food is important. - غذای سالم مهم است."
        },
        {
            english: "Water",
            persian: "آب",
            phonetic: "ˈwɔːtər",
            type: "اسم",
            difficulty: "easy",
            example: "Drink water to stay healthy. - برای سالم ماندن آب بنوش."
        }
    ]
};

// نام‌های فارسی دسته‌ها برای نمایش
const categoryNames = {
    daily_conversation: "مکالمه روزمره",
    technology: "تکنولوژی",
    art: "هنر و فرهنگ",
    travel: "سفر و گردشگری",
    health: "سلامت و بدن"
};

// آیکون‌های دسته‌ها
const categoryIcons = {
    daily_conversation: "fa-comments",
    technology: "fa-microchip",
    art: "fa-palette",
    travel: "fa-plane",
    health: "fa-heartbeat"
};

// رنگ‌های دسته‌ها
const categoryColors = {
    daily_conversation: "#4CAF50",
    technology: "#2196F3",
    art: "#9C27B0",
    travel: "#FF9800",
    health: "#F44336"
};