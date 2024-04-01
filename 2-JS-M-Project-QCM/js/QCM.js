const urlParams = new URLSearchParams(window.location.search);

const amount = urlParams.get('nmbrqsts');
const category = urlParams.get('qstcat');
const difficulty = urlParams.get('qstdiff');
const mins = urlParams.get('timer');

let questions = [];

fetch(`https://opentdb.com/api.php?amount=${amount}&category=${category}&difficulty=${difficulty}&type=multiple`)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network error');
        }
        return response.json();
    })
    .then(data => {
        data.results.forEach((q, index) => {
            questions.push(convertQuestionFormat(q));
        });

        for (let i = 0; i < questions.length; i++) {
            const q = questions[i];
            let optionsHtml = '';
            for (let j = 0; j < q.options.length; j++) {
                const option = q.options[j];
                optionsHtml += `
                    <input type="radio" name="question${i}" value="${option}" id="question${i}-${j}">
                    <label for="question${i}-${j}">${option}</label><br>
                `;
            }
            document.getElementById("qcm").innerHTML += `
                <div class="question">
                    <h2>${q.question}</h2>
                    ${optionsHtml}
                </div>
            `;
        }

    })
    .catch(error => {
        console.error('Error fetching data:', error);
});

function convertQuestionFormat(questionObj) {
    const question = {
        question: decodeHtml(questionObj.question),
        options: [...questionObj.incorrect_answers.map(decodeHtml), decodeHtml(questionObj.correct_answer)],
        answer: decodeHtml(questionObj.correct_answer)
    };

    return question;
}
function decodeHtml(val) {
    let ret = document.createElement('textarea')
    ret.innerHTML = val;
    return ret.value;
}

function submit() {
    let score = 0;
    questions.forEach((q, idx) => {
        const correctness = document.querySelector(`input[name="question${idx}"]:checked`);
        if (correctness && correctness.value == q.answer) {
            score++;
            if (correctness.nextElementSibling){correctness.nextElementSibling.style.color = 'green';} 
        }
        else if (correctness){
            if (correctness.nextElementSibling){correctness.nextElementSibling.style.color = 'red';} 
        }
    }); 

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Votre score est de ${score}/${questions.length}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
    
    clearInterval(timerInterval);
    const qcmElement = document.getElementById("qcm");
    qcmElement.style.cursor = "not-allowed"; 
    qcmElement.style.opacity = "0.5"; 

    const radioButtons = document.querySelectorAll('input[type="radio"]');
    radioButtons.forEach((radio) => {
        radio.remove();
    });
    
}

const totalTime = parseInt(mins) * 60 * 1000;
const startTime = Date.now();
const endTime = startTime + totalTime;
const timerInterval = setInterval(() => {
    const currentTime = Date.now();
    const remainingTime = endTime - currentTime;
    if (remainingTime <= 0) {
        clearInterval(timerInterval);
        alert('Time is up!');
        window.location.href = './index.html';
    }
    const minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);
    document.getElementById('timer').innerText = minutes.toString().padStart(2, '0') + ":" + seconds.toString().padStart(2, '0');
}, 1000);