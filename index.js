const QuizData = [
  {
    question: "What is full form of HTML?",
    a: "Hyper Makeup Language",
    b: "HyperText Markup Language",
    c: "Hypertext Makeup Language",
    d: "Helicopter Tracter Mobile Language",
    answer: "b",
  },
  {
    question: "What is full form of CSS?",
    a: "Cascading Style Sheet",
    b: "Car Style Sheet",
    c: "Car Scooter Seat",
    d: "Cascading Style Seat",
    answer: "a",
  },
  {
    question: "If Website be a human body, What do JavaScript be:",
    a: "Heart",
    b: "Butt",
    c: "Legs",
    d: "Brain",
    answer: "d",
  },
  {
    question: "Front-end Web Development majorly consists of:",
    a: "HTML & CSS",
    b: "CSS & JS",
    c: "HTML, CSS & JS",
    d: "None of these",
    answer: "c",
  },
];

var answersEls = document.querySelectorAll(".answer");
var quiz = document.getElementById("quiz");

const ques = document.getElementById("question");
const a_text = document.getElementById("a-text");
const b_text = document.getElementById("b-text");
const c_text = document.getElementById("c-text");
const d_text = document.getElementById("d-text");
const subBtn = document.getElementById("submit");

var currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deSelectAnswers();
  var currentQuizData = QuizData[currentQuiz];

  ques.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answersEls.forEach((answerEl) => {
    if (answerEl.checked) {
      answer = answerEl.id;
    }
  });
  return answer;
}

function deSelectAnswers() {
  answersEls.forEach((answerEl) => {
    answerEl.checked = false;
  });
}

subBtn.addEventListener("click", function () {
  const answer = getSelected();

  if (answer) {
    if (answer === QuizData[currentQuiz].answer) {
      score++;
    }
    currentQuiz++;

    if (currentQuiz < QuizData.length) {
      loadQuiz();
    } else {
      quiz.innerHTML =
        "<h2>You have answered correctly " +
        score +
        "/" +
        QuizData.length +
        ' questions.</h2> <button onclick="location.reload()">Reload</button>';
    }
  }
});
