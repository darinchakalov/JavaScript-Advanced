function solve() {
    let correct1Btn = document.querySelector(
        "#quizzie > section:nth-child(2) > ul > li.quiz-answer.low-value > div > p"
    );
    let wrong1Btn = document.querySelector(
        "#quizzie > section:nth-child(2) > ul > li.quiz-answer.high-value > div > p"
    );
    let correct2Btn = document.querySelector(
        "#quizzie > section:nth-child(3) > ul > li.quiz-answer.high-value > div > p"
    );
    let wrong2Btn = document.querySelector("#quizzie > section:nth-child(3) > ul > li.quiz-answer.low-value > div > p");
    let correct3Btn = document.querySelector(
        "#quizzie > section:nth-child(4) > ul > li.quiz-answer.low-value > div > p"
    );
    let wrong3Btn = document.querySelector(
        "#quizzie > section:nth-child(4) > ul > li.quiz-answer.high-value > div > p"
    );

    let sections = document.querySelectorAll("section");
    let currentDiv = 0;
    let correctAnswers = 0;
    correct1Btn.addEventListener("click", () => {
        sections[0].style.display = "none";
        sections[1].style.display = "block";
        correctAnswers++;
    });
    wrong1Btn.addEventListener("click", () => {
        sections[0].style.display = "none";
        sections[1].style.display = "block";
    });
    correct2Btn.addEventListener("click", () => {
        sections[1].style.display = "none";
        sections[2].style.display = "block";
        correctAnswers++;
    });
    wrong2Btn.addEventListener("click", () => {
        sections[1].style.display = "none";
        sections[2].style.display = "block";
    });
    correct3Btn.addEventListener("click", () => {
        sections[2].style.display = "none";
        correctAnswers++;
        showResults();
    });
    wrong3Btn.addEventListener("click", () => {
        sections[2].style.display = "none";
        showResults();
    });

    function showResults() {
        document.querySelector("#results").style.display = "block";
        if (correctAnswers === 3) {
            document.querySelector("#results > li > h1").textContent = `You are recognized as top JavaScript fan!`;
        } else {
            document.querySelector("#results > li > h1").textContent = `You have ${correctAnswers} right answers`;
        }
    }
}
