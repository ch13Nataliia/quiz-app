const quizData = [
  {
    quistion: 'When did the world war I start?',
    a: '1914',
    b: '1942',
    c: '1901',
    d: '1990',
    correct: 'a',
  },

  {
    quistion: 'When was American President John Kennedy assassinated??',
    a: '1945',
    b: '1965',
    c: '1963',
    d: 'he still alive',
    correct: 'c',
  },

  {
    quistion: 'When did the Berlin Wall fall?',
    a: '1970',
    b: '1989',
    c: '1978',
    d: '1985',
    correct: 'b',
  },
  {
    quistion: 'When did Nelson Mandela leave prison?',
    a: '1975',
    b: '1970',
    c: '1990',
    d: "2001",
    correct: 'c',
  },
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer')
const quistionEl = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0
let score = 0
loadQuiz()
function loadQuiz() {
  deselectAnswers()

  const currentQuizData = quizData[currentQuiz]
  quistionEl.innerText = currentQuizData.quistion
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
  answerEls.forEach( answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })
   return answer
}

submitBtn.addEventListener('click', () => {
  const answer = getSelected()
  if(answer) {
    if (answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz ++

    if (currentQuiz < quizData.length) {
      loadQuiz()
    } else {
      quiz.innerHTML = `
      <h2>You answered ${score}/${quizData.length} questions correcty </h2>
      <button onclick = "location.reload()">Reload</button>
      `
    }
  }
})
