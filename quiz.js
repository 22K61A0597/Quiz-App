const questions = [
    {
      question: "What does HTML stand for?",
      options: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Machine Language"
      ],
      correct: 1
    },
    {
      question: "Which CSS property is used to change text color?",
      options: ["font-color", "text-color", "color", "background-color"],
      correct: 3
    },
    {
      question: "What does JS stand for?",
      options: [
        "JavaSource",
        "JavaScript",
        "JustScript",
        "JavaStyling"
      ],
      correct: 2
    }
  ];
  
  let currentQuestionIndex = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const optionButtons = Array.from(document.getElementsByClassName("option-btn"));
  const nextButton = document.getElementById("next-btn");
  const scoreElement = document.getElementById("score");
  const scoreValue = document.getElementById("score-value");
  
  function loadQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    optionButtons.forEach((button, index) => {
      button.textContent = currentQuestion.options[index];
      button.onclick = () => checkAnswer(index + 1);
    });
  }
  
  function checkAnswer(selected) {
    const correctAnswer = questions[currentQuestionIndex].correct;
    if (selected === correctAnswer) {
      score++;
      alert("Correct Answer!");
    } else {
      alert("Wrong Answer!");
    }
    nextButton.classList.remove("hidden");
  }
  
  nextButton.onclick = () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      loadQuestion();
      nextButton.classList.add("hidden");
    } else {
      showScore();
    }
  };
  
  function showScore() {
    questionElement.classList.add("hidden");
    document.getElementById("options").classList.add("hidden");
    nextButton.classList.add("hidden");
    scoreElement.classList.remove("hidden");
    scoreValue.textContent = `${score}/${questions.length}`;
  }
  
  document.addEventListener("DOMContentLoaded", loadQuestion);
  