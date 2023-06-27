const questions = [
    {
      question: "What is the chemical symbol for hydrogen?",
      choices: ["H", "He", "O", "N"],
      correctAnswer: "H"
    },
    {
      question: "Which element has the atomic number 6?",
      choices: ["C", "N", "O", "H"],
      correctAnswer: "C"
    },
    {
      question: "What is the formula for water?",
      choices: ["H₂O", "CO₂", "CH₄", "NH₃"],
      correctAnswer: "H₂O"
    },
    {
      question: "What does RFM stand for?",
      choices: ["Real For Me","Relative Formula Mass"],
      correctAnswer: "Relative Formula Mass"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choicesElement = document.getElementById("choices");
  
    questionElement.textContent = questions[currentQuestion].question;
    choicesElement.innerHTML = "";
  
    for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
      const choice = questions[currentQuestion].choices[i];
      const choiceElement = document.createElement("label");
      const radioInput = document.createElement("input");
      radioInput.type = "radio";
      radioInput.name = "choice";
      radioInput.value = choice;
  
      choiceElement.appendChild(radioInput);
      choiceElement.append(choice);
  
      choicesElement.appendChild(choiceElement);
    }
  }
  
  function checkAnswer() {
    const selectedOption = document.querySelector("input[name='choice']:checked");
  
    if (selectedOption) {
      const userAnswer = selectedOption.value;
      if (userAnswer === questions[currentQuestion].correctAnswer) {
        score++;
      }
      currentQuestion++;
      selectedOption.checked = false;
  
      if (currentQuestion < questions.length) {
        displayQuestion();
      } else {
        displayResult();
      }
    }
  }
  
  function displayResult() {
    const quizContainer = document.getElementById("quiz-container");
    quizContainer.innerHTML = "";
  
    const resultElement = document.createElement("div");
    resultElement.id = "result";
    resultElement.textContent = `You scored ${score} out of ${questions.length}!`;
  
    quizContainer.appendChild(resultElement);
  }
  
  // Event listener for the submit button
  document.getElementById("submit-btn").addEventListener("click", checkAnswer);
  
  // Display the first question
  displayQuestion();
  