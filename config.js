// فایل تنظیمات و پیکربندی برنامه
const AppConfig = {
    // نام‌های فارسی دسته‌ها (برای استفاده در مواردی که از categoryNames استفاده نمی‌شود)
    categoryNames: {
        'daily_conversation': 'مکالمه روزمره',
        'technology': 'تکنولوژی',
        'art': 'هنر و فرهنگ',
        'travel': 'سفر و گردشگری',
        'health': 'سلامت و بدن'
    },
    
    // تنظیمات Web Speech API
    speechConfig: {
        american: {
            lang: 'en-US',
            rate: 0.9
        },
        example: {
            lang: 'en-US',
            rate: 0.8
        }
    },
    
    // پیام‌های نتیجه آزمون
    resultMessages: {
        excellent: "عالی! شما تسلط بسیار خوبی بر این لغات دارید. می‌توانید دسته بعدی را شروع کنید.",
        good: "خوب است! اما می‌توانید بهتر هم باشید. برخی لغات نیاز به تمرین بیشتر دارند.",
        average: "قابل قبول. نیاز به مطالعه و تمرین بیشتر دارید.",
        poor: "نیاز به مطالعه و تمرین بیشتر دارید. بهتر است ابتدا لغات این دسته را کامل یاد بگیرید."
    },
    
    // آستانه‌های نمره
    scoreThresholds: {
        excellent: 90,
        good: 70,
        average: 50
    },
    
    // رنگ‌های دسته‌ها
    categoryColors: {
        daily_conversation: '#4CAF50',
        technology: '#2196F3',
        art: '#9C27B0',
        travel: '#FF9800',
        health: '#F44336'
    }
};

// ذخیره‌سازی داده‌های کاربر
const UserData = {
    // بارگذاری داده‌های ذخیره شده
    load() {
        return {
            learnedWords: JSON.parse(localStorage.getItem('learnedWords')) || {},
            testScores: JSON.parse(localStorage.getItem('testScores')) || {},
            testCount: JSON.parse(localStorage.getItem('testCount')) || {},
            clickCounters: JSON.parse(localStorage.getItem('clickCounters')) || {}
        };
    },
    
    // ذخیره داده‌ها
    save(data) {
        localStorage.setItem('learnedWords', JSON.stringify(data.learnedWords || {}));
        localStorage.setItem('testScores', JSON.stringify(data.testScores || {}));
        localStorage.setItem('testCount', JSON.stringify(data.testCount || {}));
        localStorage.setItem('clickCounters', JSON.stringify(data.clickCounters || {}));
    },
    
    // بازنشانی داده‌ها
    reset() {
        localStorage.removeItem('learnedWords');
        localStorage.removeItem('testScores');
        localStorage.removeItem('testCount');
        localStorage.removeItem('clickCounters');
    }
};