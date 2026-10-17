const button = document.getElementById("submit");
const questionBox = document.getElementById("question");
const answerArea = document.getElementById("answers");

button.addEventListener("click", function () {
    const question = questionBox.value;
    answerArea.textContent = "You asked: " + question;
});