const quizData = [
    {
        question: "O colágeno auxilia na manutenção da saúde articular?",
        a: "MITO",
        b: "VERDADE",
        correct: "b",
    },
    {
        question: "Colágeno é tudo igual",
        a: "MITO",
        b: "VERDADE",
        correct: "a",
    },
    {
        question: "Colágeno engorda",
        a: "MITO",
        b: "VERDADE",
        correct: "a",
    },
    {
        question: "Colágeno fortalece as unhas e os cabelos.",
        a: "MITO",
        b: "VERDADE",
        correct: "b",
    },
    {
        question: "Comer gelatina já é o suficiente para absorver uma grande quantidade de colágeno.",
        a: "MITO",
        b: "VERDADE",
        correct: "a",
    },
    {
        question: "O nosso corpo produz colágeno.",
        a: "MITO",
        b: "VERDADE",
        correct: "b",
    },


];

const quiz= document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if(answerEl.checked) {
            answer = answerEl.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if(answer) {
       if(answer === quizData[currentQuiz].correct) {
           score++
       }

       currentQuiz++

       if(currentQuiz < quizData.length) {
           loadQuiz()
       } else {
           quiz.innerHTML = `
           <h2>Você acertou <strong>${score}</strong> de 6! </h2>
           
           

           <button id="reload-button" onclick="location.reload()">Reload</button>
           `
       }
    }
})