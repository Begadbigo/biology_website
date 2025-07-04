const quizData = [
  {
    question: "Where does digestion begin?",
    options: ["Stomach", "Mouth", "Small intestine", "Esophagus"],
    answer: "Mouth"
  },
  {
    question: "Which organ produces bile?",
    options: ["Stomach", "Liver", "Pancreas", "Gallbladder"],
    answer: "Liver"
  },
  {
    question: "What is the function of the small intestine?",
    options: ["Breaks down proteins", "Stores food", "Absorbs nutrients", "Produces enzymes"],
    answer: "Absorbs nutrients"
  },
  {
    question: "Which part of the digestive system stores bile?",
    options: ["Pancreas", "Gallbladder", "Liver", "Small intestine"],
    answer: "Gallbladder"
  },
  {
    question: "What is the primary function of the large intestine?",
    options: ["Digest protein", "Absorb water", "Absorb vitamins", "Produce insulin"],
    answer: "Absorb water"
  },
  {
    question: "Which enzyme in saliva begins breaking down starches?",
    options: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
    answer: "Amylase"
  },
  {
    question: "What prevents food from entering the windpipe?",
    options: ["Esophagus", "Tongue", "Epiglottis", "Uvula"],
    answer: "Epiglottis"
  },
  {
    question: "Which organ is responsible for producing insulin?",
    options: ["Liver", "Pancreas", "Gallbladder", "Small intestine"],
    answer: "Pancreas"
  },
  {
    question: "Where is chyme formed?",
    options: ["Mouth", "Stomach", "Small intestine", "Esophagus"],
    answer: "Stomach"
  },
  {
    question: "What muscular movement pushes food through the esophagus?",
    options: ["Digestion", "Segmentation", "Peristalsis", "Absorption"],
    answer: "Peristalsis"
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
