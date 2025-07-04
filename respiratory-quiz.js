const quizData = [
  {
    question: "What is the main function of the respiratory system?",
    options: ["Transport blood", "Break down food", "Exchange gases", "Produce hormones"],
    answer: "Exchange gases"
  },
  {
    question: "What is the name of the small air sacs in the lungs where gas exchange happens?",
    options: ["Bronchi", "Alveoli", "Capillaries", "Trachea"],
    answer: "Alveoli"
  },
  {
    question: "What muscle contracts to allow inhalation?",
    options: ["Larynx", "Heart", "Diaphragm", "Intercostal"],
    answer: "Diaphragm"
  },
  {
    question: "Which gas is taken in during inhalation?",
    options: ["Carbon dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    answer: "Oxygen"
  },
  {
    question: "Which structure connects the throat to the lungs?",
    options: ["Pharynx", "Trachea", "Esophagus", "Larynx"],
    answer: "Trachea"
  },
  {
    question: "What happens to the diaphragm when you exhale?",
    options: ["It expands", "It contracts", "It relaxes", "It thickens"],
    answer: "It relaxes"
  },
  {
    question: "Which part prevents food from entering the lungs?",
    options: ["Bronchi", "Trachea", "Larynx", "Epiglottis"],
    answer: "Epiglottis"
  },
  {
    question: "What surrounds the alveoli to allow gas exchange?",
    options: ["Arteries", "Veins", "Capillaries", "Bronchioles"],
    answer: "Capillaries"
  },
  {
    question: "Which of these is NOT part of the respiratory system?",
    options: ["Nose", "Lungs", "Pancreas", "Trachea"],
    answer: "Pancreas"
  },
  {
    question: "What gas is removed from the body through the respiratory system?",
    options: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
    answer: "Carbon dioxide"
  }
];



let currentQuestion = 0;
let score = 0;

const container = document.getElementById("quiz-container");
const progressBar = document.getElementById("progress-bar");

function updateProgress() {
  const progress = ((currentQuestion) / quizData.length) * 100;
  progressBar.style.width = `${progress}%`;
}

function showQuestion() {
  updateProgress();
  const q = quizData[currentQuestion];

  container.innerHTML = `
    <div class="quiz-card">
      <h3>Question ${currentQuestion + 1}/${quizData.length}</h3>
      <p>${q.question}</p>
      <form id="quiz-form">
        ${q.options.map(option => `
          <label>
            <input type="radio" name="answer" value="${option}" />
            ${option}
          </label>
        `).join('')}
        <button type="submit">Check Answer</button>
      </form>
      <div id="feedback" class="feedback"></div>
    </div>
  `;

  document.getElementById("quiz-form").onsubmit = (e) => {
    e.preventDefault();
    const selected = document.querySelector('input[name="answer"]:checked');
    const feedback = document.getElementById("feedback");

    if (!selected) return alert("Please select an answer.");

    const isCorrect = selected.value === q.answer;
    if (isCorrect) {
      score++;
      feedback.textContent = "✅ Correct!";
      feedback.className = "feedback correct";
    } else {
      feedback.textContent = `❌ Incorrect. The correct answer is: ${q.answer}`;
      feedback.className = "feedback wrong";
    }

    // Disable options
    document.querySelectorAll('input[name="answer"]').forEach(el => el.disabled = true);

    // Change button to Next
    const btn = document.querySelector("button");
    btn.textContent = "Next Question";
    btn.onclick = () => {
      currentQuestion++;
      if (currentQuestion < quizData.length) {
        showQuestion();
      } else {
        showResult();
      }
    };
  };
}

function showResult() {
  updateProgress();
  progressBar.style.width = "100%";
  container.innerHTML = `
    <div class="quiz-card">
      <h3>🎉 Quiz Completed!</h3>
      <p>Your Score: <strong>${score}</strong> out of ${quizData.length}</p>
      <button onclick="location.href='index.html#quiz'">Back to Quiz Menu</button>
    </div>
  `;
}

showQuestion();
