
let currentQuestion = 0;
let userAnswers = [];
let studentName = '';
let score = 0;

function startQuiz() {
    studentName = document.getElementById('studentName').value.trim();
    if (!studentName) {
        alert('Iltimos, ismingizni kiriting!');
        return;
    }
    
    document.getElementById('nameSection').style.display = 'none';
    document.getElementById('quizSection').style.display = 'block';
    
    userAnswers = new Array(questions.length).fill(null);
    showQuestion(0);
}

function showQuestion(index) {
    const question = questions[index];
    const container = document.getElementById('questionContainer');
    
    let codeBlock = '';
    if (question.code) {
        codeBlock = `<div class="code-block">${question.code}</div>`;
    }
    
    container.innerHTML = `
        <div class="question-number">Savol ${index + 1}/10</div>
        <div class="question-text">${question.question}</div>
        ${codeBlock}
        <div class="options">
            ${question.options.map((option, i) => `
                <div class="option" onclick="selectAnswer(${i})" id="option${i}">
                    ${String.fromCharCode(65 + i)}. ${option}
                </div>
            `).join('')}
        </div>
    `;
    
    // Oldingi javobni ko'rsatish
    if (userAnswers[index] !== null) {
        document.getElementById(`option${userAnswers[index]}`).classList.add('selected');
    }
    
    // Progress bar yangilash
    const progress = ((index + 1) / questions.length) * 100;
    document.getElementById('progressFill').style.width = progress + '%';
    
    // Tugmalar holatini yangilash
    document.getElementById('prevBtn').disabled = index === 0;
    document.getElementById('nextBtn').textContent = index === questions.length - 1 ? 'Yakunlash 🏁' : 'Keyingi ▶';
}

function selectAnswer(answerIndex) {
    // Oldingi tanlovni olib tashlash
    document.querySelectorAll('.option').forEach(option => {
        option.classList.remove('selected');
    });
    
    // Yangi tanlovni belgilash
    document.getElementById(`option${answerIndex}`).classList.add('selected');
    userAnswers[currentQuestion] = answerIndex;
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        showQuestion(currentQuestion);
    } else {
        finishQuiz();
    }
}

function previousQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        showQuestion(currentQuestion);
    }
}

function finishQuiz() {
    // Natijalarni hisoblash
    score = 0;
    const wrongAnswers = [];
    
    for (let i = 0; i < questions.length; i++) {
        if (userAnswers[i] === questions[i].correct) {
            score++;
        } else {
            wrongAnswers.push({
                questionNum: i + 1,
                question: questions[i].question,
                userAnswer: userAnswers[i] !== null ? questions[i].options[userAnswers[i]] : 'Javob berilmagan',
                correctAnswer: questions[i].options[questions[i].correct],
                explanation: questions[i].explanation
            });
        }
    }
    
    // Natijalarni ko'rsatish
    showResults(wrongAnswers);
    
    // Telegram botga yuborish
    sendToTelegram(wrongAnswers);
}

function showResults(wrongAnswers) {
    document.getElementById('quizSection').style.display = 'none';
    document.getElementById('resultsSection').style.display = 'block';
    
    const percentage = Math.round((score / questions.length) * 100);
    document.getElementById('scoreDisplay').textContent = `${score}/10 (${percentage}%)`;
    
    let grade = '';
    if (percentage >= 90) grade = '🥇 A\'lo!';
    else if (percentage >= 80) grade = '🥈 Yaxshi!';
    else if (percentage >= 70) grade = '🥉 Qoniqarli!';
    else grade = '📚 Ko\'proq o\'rganing!';
    
    document.getElementById('scoreDetails').innerHTML = `
        <h3>${grade}</h3>
        <p><strong>To'g'ri javoblar:</strong> ${score} ta</p>
        <p><strong>Noto'g'ri javoblar:</strong> ${10 - score} ta</p>
        <p><strong>Foiz:</strong> ${percentage}%</p>
    `;
    
    if (wrongAnswers.length > 0) {
        document.getElementById('wrongAnswers').innerHTML = `
            <h3>❌ Noto'g'ri javoblar:</h3>
            ${wrongAnswers.map(wrong => `
                <div style="margin: 10px 0; padding: 10px; background: rgba(255,255,255,0.1); border-radius: 5px;">
                    <strong>Savol ${wrong.questionNum}:</strong> ${wrong.question}<br>
                    <strong>Sizning javobingiz:</strong> ${wrong.userAnswer}<br>
                    <strong>To'g'ri javob:</strong> ${wrong.correctAnswer}<br>
                    <strong>Tushuntirish:</strong> ${wrong.explanation}
                </div>
            `).join('')}
        `;
    } else {
        document.getElementById('wrongAnswers').innerHTML = '<h3>🎉 Barcha javoblar to\'g\'ri!</h3>';
    }
}

async function sendToTelegram(wrongAnswers) {
    const sendingStatus = document.getElementById('sendingStatus');
    sendingStatus.innerHTML = '<div class="loading"></div> Natija yuborilmoqda...';
    sendingStatus.className = 'sending-status';
    
    const botToken = '7262881456:AAEFFuaMBvra4TycRTvkiL_8VhuliSDRKuY';
    const chatId = '848796050';
    
    const percentage = Math.round((score / questions.length) * 100);
    let message = `📊 PYTHON SET'LAR TEST NATIJASI\n\n`;
    message += `👤 Ism: ${studentName}\n`;
    message += `📈 Natija: ${score}/10 (${percentage}%)\n`;
    message += `✅ To'g'ri: ${score} ta\n`;
    message += `❌ Noto'g'ri: ${10 - score} ta\n\n`;
    
    if (wrongAnswers.length > 0) {
        message += `🔍 NOTO'G'RI JAVOBLAR:\n`;
        wrongAnswers.forEach(wrong => {
            message += `\n${wrong.questionNum}. ${wrong.question}\n`;
            message += `   Javob: ${wrong.userAnswer}\n`;
            message += `   To'g'ri: ${wrong.correctAnswer}\n`;
        });
    } else {
        message += `🎉 BARCHA JAVOBLAR TO'G'RI!`;
    }
    
    try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: message,
                parse_mode: 'HTML'
            })
        });
        
        if (response.ok) {
            sendingStatus.innerHTML = '✅ Natija muvaffaqiyatli yuborildi!';
            sendingStatus.className = 'sending-status success';
        } else {
            throw new Error('Yuborishda xatolik');
        }
    } catch (error) {
        sendingStatus.innerHTML = '❌ Yuborishda xatolik yuz berdi';
        sendingStatus.className = 'sending-status error';
    }
}

function restartQuiz() {
    currentQuestion = 0;
    userAnswers = [];
    studentName = '';
    score = 0;
    
    document.getElementById('resultsSection').style.display = 'none';
    document.getElementById('nameSection').style.display = 'block';
    document.getElementById('studentName').value = '';
}

// Klaviatura bilan navigatsiya
document.addEventListener('keydown', function(event) {
    if (document.getElementById('quizSection').style.display === 'block') {
        if (event.key === 'ArrowLeft') previousQuestion();
        if (event.key === 'ArrowRight') nextQuestion();
        if (event.key >= '1' && event.key <= '4') {
            const index = parseInt(event.key) - 1;
            if (index < questions[currentQuestion].options.length) {
                selectAnswer(index);
            }
        }
    }
});