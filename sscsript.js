// Quiz Logic
let questions = [
  { q: "What is 2 + 2?", options: ["3", "4", "5"], answer: "4" },
  { q: "HTML stands for?", options: ["Hyper Text Markup Language", "HighText Machine Language"], answer: "Hyper Text Markup Language" }
];
let current = 0, score = 0;

function showQuestion() {
  if (current < questions.length) {
    document.getElementById("question").innerText = questions[current].q;
    let opts = "";
    questions[current].options.forEach(o => {
      opts += `<button onclick="checkAnswer('${o}')">${o}</button><br>`;
    });
    document.getElementById("options").innerHTML = opts;
  } else {
    document.getElementById("question").innerText = "Quiz Finished!";
    document.getElementById("options").innerHTML = "";
    document.getElementById("score").innerText = "Final Score: " + score;
  }
}

function checkAnswer(ans) {
  if (ans === questions[current].answer) score++;
  current++;
  showQuestion();
}

function nextQuestion() {
  showQuestion();
}

window.onload = function() {
  if (document.getElementById("question")) {
    showQuestion();
  }
};

// Resume Builder
function generateResume() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const skills = document.getElementById("skills").value;

  document.getElementById("resumeOutput").innerHTML = `
    <h2>${name}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Skills:</strong> ${skills}</p>
  `;
}

function downloadPDF() {
  const element = document.getElementById("resumeOutput");
  html2pdf().from(element).save("resume.pdf");
}

// Coding Practice
function runCode() {
  const code = document.getElementById("codeEditor").value;
  try {
    const result = eval(code);
    document.getElementById("output").innerText = result !== undefined ? result : "Code executed!";
  } catch (e) {
    document.getElementById("output").innerText = "Error: " + e;
  }
}

