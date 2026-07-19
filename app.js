// فایل منطق اصلی برنامه - نسخه جامع

// متغیرهای عمومی برنامه
let currentCategory = 'daily_conversation';
let learnedWords, testScores, testCount, clickCounters;
let currentTest = null;
let selectedQuestionCount = 10;
let searchQuery = '';
let currentFilter = 'all';
let wordClickCounters = {};

// بارگذاری داده‌های کاربر
function loadUserData() {
    const data = UserData.load();
    learnedWords = data.learnedWords;
    testScores = data.testScores;
    testCount = data.testCount;
    clickCounters = data.clickCounters || {};
}

// ذخیره داده‌های کاربر
function saveUserData() {
    UserData.save({
        learnedWords,
        testScores,
        testCount,
        clickCounters
    });
}

// بارگذاری صفحه
document.addEventListener('DOMContentLoaded', function() {
    // بارگذاری داده‌های کاربر
    loadUserData();
    
    // مقداردهی اولیه برنامه
    initApp();
    loadCategory(currentCategory);
    loadCategoryButtons();
    loadStories();
    
    // رویدادهای دکمه‌های دسته‌بندی
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            currentCategory = this.dataset.category;
            loadCategory(currentCategory);
            updateStories(currentCategory);
        });
    });
    
    // رویدادهای دکمه‌های اصلی
    document.getElementById('startTestBtn').addEventListener('click', showTestSetup);
    document.getElementById('resetProgressBtn').addEventListener('click', resetProgress);
    document.getElementById('showStoriesBtn').addEventListener('click', toggleStories);
    document.getElementById('closeStoriesBtn').addEventListener('click', closeStories);
    
    // رویدادهای صفحه آزمون
    document.getElementById('closeTestBtn').addEventListener('click', closeTest);
    document.getElementById('cancelTestBtn').addEventListener('click', closeTest);
    document.getElementById('startTestConfirmBtn').addEventListener('click', startTest);
    document.getElementById('nextQuestionBtn').addEventListener('click', nextQuestion);
    document.getElementById('submitTestBtn').addEventListener('click', submitTest);
    document.getElementById('retryTestBtn').addEventListener('click', retryTest);
    document.getElementById('closeResultBtn').addEventListener('click', closeTest);
    
    // رویدادهای انتخاب تعداد سوالات
    document.querySelectorAll('.count-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            document.querySelectorAll('.count-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            selectedQuestionCount = parseInt(this.dataset.count);
        });
    });
    
    // رویدادهای جستجو
    document.getElementById('searchInput').addEventListener('input', function() {
        searchQuery = this.value.trim().toLowerCase();
        filterWords();
    });
    
    document.getElementById('filterDifficulty').addEventListener('change', function() {
        currentFilter = this.value;
        filterWords();
    });
    
    // رویدادهای داستان
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('story-question-option')) {
            const storyId = e.target.dataset.storyId;
            const questionIndex = parseInt(e.target.dataset.questionIndex);
            const selectedAnswer = parseInt(e.target.dataset.optionIndex);
            checkStoryAnswer(storyId, questionIndex, selectedAnswer);
        }
    });
});

// بارگذاری دکمه‌های دسته‌بندی
function loadCategoryButtons() {
    const container = document.querySelector('.level-buttons');
    container.innerHTML = '';
    
    const categories = {
        daily_conversation: { icon: 'fa-comments', name: 'مکالمه روزمره' },
        technology: { icon: 'fa-microchip', name: 'تکنولوژی' },
        art: { icon: 'fa-palette', name: 'هنر و فرهنگ' },
        travel: { icon: 'fa-plane', name: 'سفر و گردشگری' },
        health: { icon: 'fa-heartbeat', name: 'سلامت و بدن' }
    };
    
    for (const [key, value] of Object.entries(categories)) {
        const btn = document.createElement('button');
        btn.className = `category-btn ${key}`;
        btn.dataset.category = key;
        if (key === currentCategory) btn.classList.add('active');
        btn.innerHTML = `<i class="fas ${value.icon}"></i> ${value.name}`;
        container.appendChild(btn);
    }
}

// نمایش صفحه تنظیمات آزمون
function showTestSetup() {
    document.getElementById('testContainer').style.display = 'flex';
    document.getElementById('testTitle').textContent = `آزمون دسته ${categoryNames[currentCategory]}`;
    document.getElementById('testSetup').style.display = 'block';
    document.getElementById('testBody').style.display = 'none';
    document.getElementById('testResult').style.display = 'none';
}

// مقداردهی اولیه برنامه
function initApp() {
    // محاسبه کل لغات
    let totalWordCount = 0;
    for (const category in vocabularyData) {
        totalWordCount += vocabularyData[category].length;
    }
    document.getElementById('totalWords').textContent = totalWordCount;
    
    // محاسبه لغات یادگرفته شده
    let learnedCount = 0;
    for (const category in learnedWords) {
        if (learnedWords[category]) {
            learnedCount += Object.values(learnedWords[category]).filter(val => val).length;
        }
    }
    document.getElementById('learnedWords').textContent = learnedCount;
    
    // محاسبه میانگین نمرات آزمون
    let avgScore = 0;
    let scoreCount = 0;
    for (const category in testScores) {
        if (testScores[category] > 0) {
            avgScore += testScores[category];
            scoreCount++;
        }
    }
    avgScore = scoreCount > 0 ? Math.round(avgScore / scoreCount) : 0;
    document.getElementById('testScore').textContent = avgScore;
    
    // نمایش تعداد آزمون‌های داده شده
    let totalTestCount = 0;
    for (const category in testCount) {
        totalTestCount += testCount[category] || 0;
    }
    document.getElementById('testCount').textContent = totalTestCount;
    
    // به‌روزرسانی نمودار پیشرفت
    updateProgressChart();
}

// به‌روزرسانی نمودار پیشرفت
function updateProgressChart() {
    const chartContainer = document.getElementById('progressChart');
    if (!chartContainer) return;
    
    chartContainer.innerHTML = '';
    
    const categories = ['daily_conversation', 'technology', 'art', 'travel', 'health'];
    const categoryNames = {
        daily_conversation: 'مکالمه',
        technology: 'تکنولوژی',
        art: 'هنر',
        travel: 'سفر',
        health: 'سلامت'
    };
    
    let maxWords = 0;
    for (const cat of categories) {
        if (vocabularyData[cat]) {
            maxWords = Math.max(maxWords, vocabularyData[cat].length);
        }
    }
    
    for (const cat of categories) {
        if (!vocabularyData[cat]) continue;
        
        const total = vocabularyData[cat].length;
        let learned = 0;
        if (learnedWords[cat]) {
            learned = Object.values(learnedWords[cat]).filter(val => val).length;
        }
        const percent = total > 0 ? Math.round((learned / total) * 100) : 0;
        
        const barContainer = document.createElement('div');
        barContainer.className = 'chart-bar-container';
        
        const label = document.createElement('div');
        label.className = 'chart-label';
        label.textContent = `${categoryNames[cat]} (${percent}%)`;
        
        const barWrapper = document.createElement('div');
        barWrapper.className = 'chart-bar-wrapper';
        
        const bar = document.createElement('div');
        bar.className = 'chart-bar';
        bar.style.width = `${percent}%`;
        bar.style.backgroundColor = categoryColors[cat] || '#4CAF50';
        bar.textContent = `${learned}/${total}`;
        
        barWrapper.appendChild(bar);
        barContainer.appendChild(label);
        barContainer.appendChild(barWrapper);
        chartContainer.appendChild(barContainer);
    }
}

// بارگذاری لغات دسته انتخاب شده
function loadCategory(category) {
    const vocabList = document.getElementById('vocabularyList');
    const categoryTitle = document.getElementById('categoryTitle');
    
    // به‌روزرسانی عنوان
    categoryTitle.textContent = `لغات دسته ${categoryNames[category] || category} (${vocabularyData[category].length} لغت)`;
    
    // پاک کردن محتوای قبلی
    vocabList.innerHTML = '';
    
    // اگر دسته در learnedWords وجود ندارد، ایجادش کن
    if (!learnedWords[category]) {
        learnedWords[category] = {};
    }
    
    // اگر دسته در clickCounters وجود ندارد، ایجادش کن
    if (!clickCounters[category]) {
        clickCounters[category] = {};
    }
    
    // ایجاد کارت‌های لغات
    vocabularyData[category].forEach((word, index) => {
        // بررسی آیا این لغت یادگرفته شده است
        const isLearned = learnedWords[category][word.english] || false;
        
        // ایجاد کارت لغت
        const vocabCard = document.createElement('div');
        vocabCard.className = `vocab-card ${isLearned ? 'learned' : ''}`;
        vocabCard.id = `word-${category}-${index}`;
        vocabCard.dataset.english = word.english.toLowerCase();
        vocabCard.dataset.persian = word.persian;
        vocabCard.dataset.difficulty = word.difficulty;
        
        const difficultyText = {
            easy: 'آسان',
            medium: 'متوسط',
            hard: 'سخت'
        };
        
        vocabCard.innerHTML = `
            <div class="vocab-learned-badge">
                <i class="fas fa-check-circle"></i> یادگرفته‌شده
            </div>
            <div class="vocab-header">
                <div>
                    <div class="vocab-word" data-word="${word.english}">${word.english} ${word.type ? `<span class="word-type">${word.type}</span>` : ''}</div>
                    ${word.phonetic ? `<div class="vocab-phonetic">/${word.phonetic}/</div>` : ''}
                </div>
                ${word.difficulty ? `<span class="difficulty-badge difficulty-${word.difficulty}">
                    ${difficultyText[word.difficulty] || word.difficulty}
                </span>` : ''}
            </div>
            <div class="vocab-meaning">${word.persian}</div>
            
            <div class="vocab-example" data-example="${word.example.split(' - ')[0]}">
                <div style="margin-bottom: 10px;">${word.example}</div>
                <div style="font-size: 0.9rem; color: #666;">
                    <i class="fas fa-volume-up"></i> کلیک برای تلفظ مثال
                </div>
            </div>
        `;
        
        vocabList.appendChild(vocabCard);
    });
    
    // اضافه کردن رویداد کلیک روی لغت برای تلفظ
    document.querySelectorAll('.vocab-word').forEach(wordElement => {
        wordElement.addEventListener('click', function() {
            const word = this.dataset.word;
            const category = this.closest('.vocab-card').id.split('-')[1];
            
            handleWordClick(category, word);
            speakWord(word, 'american');
        });
    });
    
    // اضافه کردن رویداد کلیک روی مثال برای تلفظ
    document.querySelectorAll('.vocab-example').forEach(exampleElement => {
        exampleElement.addEventListener('click', function() {
            const exampleText = this.dataset.example;
            speakSentence(exampleText);
        });
    });
}

// فیلتر کردن لغات بر اساس جستجو و سطح دشواری
function filterWords() {
    const cards = document.querySelectorAll('.vocab-card');
    let visibleCount = 0;
    
    cards.forEach(card => {
        const english = card.dataset.english || '';
        const persian = card.dataset.persian || '';
        const difficulty = card.dataset.difficulty || '';
        
        let show = true;
        
        // فیلتر جستجو
        if (searchQuery) {
            const matchEnglish = english.includes(searchQuery);
            const matchPersian = persian.includes(searchQuery);
            if (!matchEnglish && !matchPersian) {
                show = false;
            }
        }
        
        // فیلتر سطح دشواری
        if (currentFilter !== 'all' && difficulty !== currentFilter) {
            show = false;
        }
        
        card.style.display = show ? 'block' : 'none';
        if (show) visibleCount++;
    });
    
    // نمایش پیام در صورت نبود نتیجه
    const vocabList = document.getElementById('vocabularyList');
    const existingMsg = document.querySelector('.no-results-msg');
    
    if (visibleCount === 0 && cards.length > 0) {
        if (!existingMsg) {
            const msg = document.createElement('div');
            msg.className = 'no-results-msg';
            msg.innerHTML = `
                <i class="fas fa-search" style="font-size: 2rem; color: #94a3b8;"></i>
                <p style="font-size: 1.2rem; color: #64748b; margin-top: 10px;">هیچ لغتی با این مشخصات پیدا نشد</p>
            `;
            vocabList.appendChild(msg);
        }
    } else if (existingMsg) {
        existingMsg.remove();
    }
}

// هندل کلیک روی لغت
function handleWordClick(category, word) {
    // افزایش شمارنده کلیک
    if (!clickCounters[category][word]) {
        clickCounters[category][word] = 0;
    }
    clickCounters[category][word]++;
    
    // اگر دو بار کلیک شده، علامت‌گذاری به عنوان یادگرفته‌شده
    if (clickCounters[category][word] >= 2 && !learnedWords[category][word]) {
        learnedWords[category][word] = true;
        
        // به‌روزرسانی رابط کاربری
        const vocabCard = document.getElementById(`word-${category}-${getWordIndex(category, word)}`);
        if (vocabCard) {
            vocabCard.classList.add('learned');
        }
        
        // نمایش پیام بازخورد
        showLearningFeedback(word);
        
        // به‌روزرسانی آمار
        initApp();
        
        // ذخیره داده‌ها
        saveUserData();
    }
}

// پیدا کردن ایندکس لغت در دسته
function getWordIndex(category, word) {
    return vocabularyData[category].findIndex(w => w.english === word);
}

// نمایش پیام بازخورد یادگیری
function showLearningFeedback(word) {
    const existingFeedback = document.querySelector('.learning-feedback');
    if (existingFeedback) {
        existingFeedback.remove();
    }
    
    const feedback = document.createElement('div');
    feedback.className = 'learning-feedback show';
    feedback.innerHTML = `
        <i class="fas fa-check-circle"></i>
        <span>لغت "${word}" به عنوان یادگرفته‌شده علامت‌گذاری شد!</span>
    `;
    
    document.body.appendChild(feedback);
    
    setTimeout(() => {
        feedback.classList.remove('show');
        setTimeout(() => {
            if (feedback.parentNode) {
                feedback.parentNode.removeChild(feedback);
            }
        }, 500);
    }, 3000);
}

// تلفظ لغات با استفاده از Web Speech API
function speakWord(word, accent) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(word);
        const config = AppConfig.speechConfig[accent];
        
        utterance.lang = config.lang;
        utterance.rate = config.rate;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند. لطفاً از مرورگرهای مدرن مانند Chrome یا Edge استفاده کنید.');
    }
}

// تلفظ جملات کامل
function speakSentence(sentence) {
    if ('speechSynthesis' in window) {
        speechSynthesis.cancel();
        
        const utterance = new SpeechSynthesisUtterance(sentence);
        const config = AppConfig.speechConfig.example;
        
        utterance.lang = config.lang;
        utterance.rate = config.rate;
        utterance.volume = 1.0;
        utterance.pitch = 1.0;
        
        speechSynthesis.speak(utterance);
    } else {
        alert('مرورگر شما از قابلیت تلفظ پشتیبانی نمی‌کند.');
    }
}

// شروع آزمون
function startTest() {
    const words = vocabularyData[currentCategory];
    
    const maxQuestions = Math.min(selectedQuestionCount, words.length);
    
    const shuffled = [...words].sort(() => 0.5 - Math.random());
    const selectedWords = shuffled.slice(0, maxQuestions);
    
    const testQuestions = [];
    
    selectedWords.forEach(word => {
        const wrongOptions = [];
        const otherWords = words.filter(w => w.english !== word.english);
        const shuffledOthers = [...otherWords].sort(() => 0.5 - Math.random());
        
        for (let i = 0; i < 3; i++) {
            if (shuffledOthers[i]) {
                wrongOptions.push(shuffledOthers[i].persian);
            }
        }
        
        const options = [
            { text: word.persian, correct: true },
            ...wrongOptions.map(text => ({ text, correct: false }))
        ];
        
        const shuffledOptions = options.sort(() => 0.5 - Math.random());
        
        testQuestions.push({
            english: word.english,
            persian: word.persian,
            example: word.example,
            options: shuffledOptions
        });
    });
    
    currentTest = {
        category: currentCategory,
        questions: testQuestions,
        currentQuestion: 0,
        userAnswers: new Array(testQuestions.length).fill(null),
        inProgress: true,
        startTime: Date.now(),
        questionCount: maxQuestions
    };
    
    document.getElementById('testSetup').style.display = 'none';
    document.getElementById('testBody').style.display = 'block';
    document.getElementById('testResult').style.display = 'none';
    
    showQuestion(0);
}

// نمایش سوال آزمون
function showQuestion(questionIndex) {
    const question = currentTest.questions[questionIndex];
    
    document.getElementById('testQuestion').textContent = 
        `معنی لغت "${question.english}" چیست؟`;
    
    const optionsContainer = document.getElementById('testOptions');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        if (currentTest.userAnswers[questionIndex] === index) {
            optionElement.classList.add('selected');
        }
        
        optionElement.innerHTML = `
            <div class="option-number">${index + 1}</div>
            <div>${option.text}</div>
        `;
        
        optionElement.dataset.index = index;
        
        optionElement.addEventListener('click', () => {
            document.querySelectorAll('.option').forEach(opt => {
                opt.classList.remove('selected');
            });
            
            optionElement.classList.add('selected');
            currentTest.userAnswers[questionIndex] = index;
            
            if (questionIndex === currentTest.questions.length - 1) {
                document.getElementById('submitTestBtn').style.display = 'inline-block';
                document.getElementById('nextQuestionBtn').style.display = 'none';
            }
        });
        
        optionsContainer.appendChild(optionElement);
    });
    
    document.getElementById('testProgress').textContent = 
        `سوال ${questionIndex + 1} از ${currentTest.questionCount}`;
    
    if (questionIndex === currentTest.questions.length - 1) {
        document.getElementById('submitTestBtn').style.display = 'inline-block';
        document.getElementById('nextQuestionBtn').style.display = 'none';
    } else {
        document.getElementById('submitTestBtn').style.display = 'none';
        document.getElementById('nextQuestionBtn').style.display = 'inline-block';
    }
}

// سوال بعدی
function nextQuestion() {
    if (currentTest.currentQuestion < currentTest.questions.length - 1) {
        currentTest.currentQuestion++;
        showQuestion(currentTest.currentQuestion);
    }
}

// ارسال آزمون
function submitTest() {
    let correctAnswers = 0;
    
    currentTest.questions.forEach((question, index) => {
        const userAnswerIndex = currentTest.userAnswers[index];
        if (userAnswerIndex !== null && question.options[userAnswerIndex].correct) {
            correctAnswers++;
        }
    });
    
    const totalQuestions = currentTest.questions.length;
    const score = Math.round((correctAnswers / totalQuestions) * 100);
    const wrongAnswers = totalQuestions - correctAnswers;
    const timeSpent = Math.round((Date.now() - currentTest.startTime) / 1000);
    
    testScores[currentTest.category] = score;
    
    if (!testCount[currentTest.category]) {
        testCount[currentTest.category] = 0;
    }
    testCount[currentTest.category]++;
    
    saveUserData();
    
    document.getElementById('testBody').style.display = 'none';
    document.getElementById('testResult').style.display = 'block';
    
    document.getElementById('finalScore').textContent = score;
    document.getElementById('correctAnswers').textContent = correctAnswers;
    document.getElementById('wrongAnswers').textContent = wrongAnswers;
    document.getElementById('timeSpent').textContent = timeSpent;
    
    let message = '';
    if (score >= AppConfig.scoreThresholds.excellent) {
        message = AppConfig.resultMessages.excellent;
    } else if (score >= AppConfig.scoreThresholds.good) {
        message = AppConfig.resultMessages.good;
    } else if (score >= AppConfig.scoreThresholds.average) {
        message = AppConfig.resultMessages.average;
    } else {
        message = AppConfig.resultMessages.poor;
    }
    
    document.getElementById('resultMessage').textContent = message;
    
    initApp();
    
    currentTest.inProgress = false;
}

// آزمون مجدد
function retryTest() {
    closeTest();
    setTimeout(() => {
        showTestSetup();
    }, 300);
}

// بستن صفحه آزمون
function closeTest() {
    document.getElementById('testContainer').style.display = 'none';
}

// بازنشانی پیشرفت
function resetProgress() {
    if (confirm('آیا مطمئن هستید که می‌خواهید تمام پیشرفت خود را بازنشانی کنید؟ این عمل غیرقابل بازگشت است.')) {
        UserData.reset();
        loadUserData();
        
        loadCategory(currentCategory);
        initApp();
        
        alert('پیشرفت شما بازنشانی شد.');
    }
}

// =============== بخش داستان‌ها ===============

// بارگذاری داستان‌ها
function loadStories() {
    const container = document.getElementById('storiesList');
    container.innerHTML = '';
    
    storiesData.forEach(story => {
        if (story.category === currentCategory || !story.category) {
            createStoryCard(story, container);
        }
    });
}

// به‌روزرسانی داستان‌ها بر اساس دسته
function updateStories(category) {
    const container = document.getElementById('storiesList');
    container.innerHTML = '';
    
    const filteredStories = storiesData.filter(story => story.category === category);
    
    if (filteredStories.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 40px; color: #94a3b8;">
                <i class="fas fa-book-open" style="font-size: 3rem; margin-bottom: 15px; display: block;"></i>
                <p>هنوز داستانی برای این دسته وجود ندارد.</p>
            </div>
        `;
        return;
    }
    
    filteredStories.forEach(story => {
        createStoryCard(story, container);
    });
}

// ایجاد کارت داستان
function createStoryCard(story, container) {
    const card = document.createElement('div');
    card.className = 'story-card';
    card.dataset.storyId = story.id;
    
    const levelColors = {
        'آسان': '#4CAF50',
        'متوسط': '#FF9800',
        'سخت': '#F44336'
    };
    
    card.innerHTML = `
        <div class="story-header">
            <h3>${story.title}</h3>
            <span class="story-level" style="background: ${levelColors[story.level] || '#4CAF50'}">
                ${story.level}
            </span>
        </div>
        <div class="story-body">
            <div class="story-text">
                <p><strong>متن انگلیسی:</strong></p>
                <p>${story.text}</p>
            </div>
            <div class="story-translation">
                <p><strong>ترجمه فارسی:</strong></p>
                <p>${story.translation}</p>
            </div>
            <div class="story-keywords">
                <strong>لغات کلیدی:</strong>
                ${story.keyWords.map(word => `<span class="keyword-tag">${word}</span>`).join('')}
            </div>
            <div class="story-questions">
                <p><strong>سوالات درک مطلب:</strong></p>
                ${story.questions.map((q, qIndex) => `
                    <div class="story-question" data-story-id="${story.id}" data-question-index="${qIndex}">
                        <p>${qIndex + 1}. ${q.question}</p>
                        <div class="story-options">
                            ${q.options.map((opt, optIndex) => `
                                <button class="story-question-option" 
                                    data-story-id="${story.id}" 
                                    data-question-index="${qIndex}" 
                                    data-option-index="${optIndex}"
                                    data-correct="${optIndex === q.correct}">
                                    ${opt}
                                </button>
                            `).join('')}
                        </div>
                        <div class="story-feedback" id="story-feedback-${story.id}-${qIndex}"></div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
    
    container.appendChild(card);
}

// بررسی پاسخ سوال داستان
function checkStoryAnswer(storyId, questionIndex, selectedAnswer) {
    const story = storiesData.find(s => s.id === storyId);
    if (!story) return;
    
    const question = story.questions[questionIndex];
    const isCorrect = selectedAnswer === question.correct;
    
    const feedbackDiv = document.getElementById(`story-feedback-${storyId}-${questionIndex}`);
    if (!feedbackDiv) return;
    
    // غیرفعال کردن دکمه‌های این سوال
    const options = feedbackDiv.parentElement.querySelectorAll('.story-question-option');
    options.forEach(btn => {
        btn.disabled = true;
        if (parseInt(btn.dataset.optionIndex) === question.correct) {
            btn.style.background = '#4CAF50';
            btn.style.color = 'white';
        } else if (parseInt(btn.dataset.optionIndex) === selectedAnswer && !isCorrect) {
            btn.style.background = '#F44336';
            btn.style.color = 'white';
        }
    });
    
    feedbackDiv.innerHTML = `
        <div style="padding: 10px; border-radius: 8px; margin-top: 10px; background: ${isCorrect ? '#d4edda' : '#f8d7da'}; color: ${isCorrect ? '#155724' : '#721c24'};">
            <i class="fas ${isCorrect ? 'fa-check-circle' : 'fa-times-circle'}"></i>
            ${isCorrect ? 'پاسخ صحیح! ✅' : 'پاسخ اشتباه! ❌ پاسخ صحیح: ' + question.options[question.correct]}
        </div>
    `;
}

// نمایش/مخفی کردن بخش داستان‌ها
function toggleStories() {
    const container = document.getElementById('storiesContainer');
    const btn = document.getElementById('showStoriesBtn');
    
    if (container.style.display === 'none' || !container.style.display) {
        container.style.display = 'block';
        btn.innerHTML = '<i class="fas fa-times"></i> بستن داستان‌ها';
        loadStories();
    } else {
        container.style.display = 'none';
        btn.innerHTML = '<i class="fas fa-book-open"></i> داستان‌های آموزشی';
    }
}

// بستن داستان‌ها
function closeStories() {
    document.getElementById('storiesContainer').style.display = 'none';
    document.getElementById('showStoriesBtn').innerHTML = '<i class="fas fa-book-open"></i> داستان‌های آموزشی';
}