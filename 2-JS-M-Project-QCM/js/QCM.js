const urlParams = new URLSearchParams(window.location.search);

const amount = urlParams.get('nmbrqsts');
const category = urlParams.get('qstcat');
const difficulty = urlParams.get('qstdiff');

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
        load();
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

function load() {
    const quizElement = document.getElementById("qcm");

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

        quizElement.innerHTML += `
            <div class="question">
                <h2>${q.question}</h2>
                ${optionsHtml}
            </div>
        `;
    }
}

function submit() {
    let score = 0;
    questions.forEach((q, index) => {
        const selectedOption = document.querySelector(`input[name="question${index}"]:checked`);
        if (selectedOption && selectedOption.value == q.answer) {
            score++;
        }
    });

    const resultElement = document.getElementById("result");
    resultElement.innerHTML = `Votre score est de ${score}/${questions.length}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

