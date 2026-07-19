// فایل داستان‌های کوتاه آموزشی
const storiesData = [
    {
        id: 1,
        title: "یک روز در پارک",
        level: "آسان",
        category: "daily_conversation",
        text: "Today is a beautiful day. The sun is shining and the weather is warm. I go to the park with my friend. We sit on a bench and talk about our week. We see children playing and birds singing. We feel happy and relaxed. After two hours, we say goodbye and go home. It is a perfect day.",
        translation: "امروز روز زیبایی است. آفتاب می‌تابد و هوا گرم است. من با دوستم به پارک می‌روم. روی یک نیمکت می‌نشینیم و درباره هفته‌مان صحبت می‌کنیم. کودکان را می‌بینیم که بازی می‌کنند و پرنده‌ها را که آواز می‌خوانند. احساس خوشحالی و آرامش می‌کنیم. بعد از دو ساعت، خداحافظی می‌کنیم و به خانه می‌رویم. روز عالی‌ای است.",
        keyWords: ["sun", "weather", "friend", "park", "happy", "goodbye"],
        questions: [
            {
                question: "Where do I go with my friend?",
                options: ["To the park", "To the cinema", "To the school"],
                correct: 0
            },
            {
                question: "What is the weather like?",
                options: ["Cold and rainy", "Warm and sunny", "Snowy and windy"],
                correct: 1
            },
            {
                question: "How do we feel?",
                options: ["Sad and tired", "Happy and relaxed", "Angry and hungry"],
                correct: 1
            }
        ]
    },
    {
        id: 2,
        title: "سفری به شیراز",
        level: "متوسط",
        category: "travel",
        text: "Last week, I traveled to Shiraz with my family. We visited the beautiful gardens and historical places. The weather was perfect and the people were very friendly. We ate delicious local food and bought some souvenirs. We stayed at a nice hotel near the city center. The journey was unforgettable and we took many photographs. I hope to visit Shiraz again someday.",
        translation: "هفته گذشته، من با خانواده‌ام به شیراز سفر کردم. ما از باغ‌های زیبا و مکان‌های تاریخی بازدید کردیم. هوا عالی بود و مردم بسیار خوش‌برخورد بودند. ما غذای محلی خوشمزه خوردیم و چند سوغاتی خریدیم. ما در یک هتل خوب نزدیک مرکز شهر اقامت کردیم. سفر فراموش‌نشدنی بود و عکس‌های زیادی گرفتیم. امیدوارم روزی دوباره از شیراز بازدید کنم.",
        keyWords: ["travel", "family", "garden", "historical", "food", "hotel"],
        questions: [
            {
                question: "Where did I travel to?",
                options: ["Tehran", "Shiraz", "Isfahan"],
                correct: 1
            },
            {
                question: "Who did I travel with?",
                options: ["My friends", "My colleagues", "My family"],
                correct: 2
            },
            {
                question: "What did we buy?",
                options: ["Books", "Souvenirs", "Clothes"],
                correct: 1
            }
        ]
    },
    {
        id: 3,
        title: "تکنولوژی در زندگی روزمره",
        level: "متوسط",
        category: "technology",
        text: "Technology has changed our lives dramatically. We use smartphones to communicate with friends and family. The internet gives us access to information anytime, anywhere. We can work from home using computers and video calls. Social media connects us with people around the world. However, we should be careful about our privacy and security online. Technology is a powerful tool that can make our lives better if we use it wisely.",
        translation: "تکنولوژی زندگی ما را به طور چشمگیری تغییر داده است. ما از تلفن‌های هوشمند برای ارتباط با دوستان و خانواده استفاده می‌کنیم. اینترنت به ما دسترسی به اطلاعات در هر زمان و هر مکان می‌دهد. ما می‌توانیم از خانه با استفاده از کامپیوتر و تماس‌های تصویری کار کنیم. رسانه‌های اجتماعی ما را با مردم سراسر جهان ارتباط می‌دهند. با این حال، ما باید درباره حریم خصوصی و امنیت خود در فضای مجازی مراقب باشیم. تکنولوژی ابزاری قدرتمند است که اگر به درستی از آن استفاده کنیم، می‌تواند زندگی ما را بهتر کند.",
        keyWords: ["technology", "smartphone", "internet", "computer", "security", "social media"],
        questions: [
            {
                question: "What do we use smartphones for?",
                options: ["Cooking", "Communication", "Gardening"],
                correct: 1
            },
            {
                question: "Where can we work from?",
                options: ["Home", "Restaurant", "Shop"],
                correct: 0
            },
            {
                question: "What should we be careful about online?",
                options: ["Our hobbies", "Our privacy", "Our food"],
                correct: 1
            }
        ]
    },
    {
        id: 4,
        title: "بازدید از موزه هنر",
        level: "سخت",
        category: "art",
        text: "Yesterday, I visited the modern art museum with my friend who is an artist. We saw many beautiful paintings and sculptures. The exhibition featured works by famous Iranian and international artists. My friend explained the meaning behind each artwork. I was fascinated by the creativity and emotion in the pieces. Some paintings made me feel happy, while others made me think deeply. Art is a universal language that expresses feelings and ideas without words. I learned a lot and felt inspired by the experience.",
        translation: "دیروز، من با دوستم که یک هنرمند است از موزه هنر مدرن بازدید کردم. ما نقاشی‌ها و مجسمه‌های زیبای زیادی دیدیم. این نمایشگاه آثار هنرمندان مشهور ایرانی و بین‌المللی را به نمایش گذاشته بود. دوستم معنی پشت هر اثر هنری را توضیح داد. من از خلاقیت و احساس در آثار شگفت‌زده شدم. برخی نقاشی‌ها من را خوشحال کردند، در حالی که برخی دیگر من را به تفکر عمیق واداشتند. هنر یک زبان جهانی است که احساسات و ایده‌ها را بدون کلمات بیان می‌کند. من چیزهای زیادی یاد گرفتم و از این تجربه الهام گرفتم.",
        keyWords: ["museum", "artist", "painting", "sculpture", "exhibition", "creativity"],
        questions: [
            {
                question: "Who is my friend?",
                options: ["A teacher", "An artist", "A doctor"],
                correct: 1
            },
            {
                question: "What did the exhibition feature?",
                options: ["Sculptures and paintings", "Books and music", "Movies and theater"],
                correct: 0
            },
            {
                question: "How did I feel about the experience?",
                options: ["Bored", "Inspired", "Angry"],
                correct: 1
            }
        ]
    }
];