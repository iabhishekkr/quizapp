let questions = [
    {
        numb: 1,
        question: "What does HTML stand for?",
        answer: "Hyper Text Markup Language",
        options: [
            "Hyper Text Preprocessor",
            "Hyper Text Markup Language",
            "Hyper Text Multiple Language",
            "Hyper Tool Multi Language"
        ]
    },
    {
        numb: 2,
        question: "What does CSS stand for?",
        answer: "Cascading Style Sheet",
        options: [
            "Common Style Sheet",
            "Colorful Style Sheet",
            "Computer Style Sheet",
            "Cascading Style Sheet"
        ]
    },
    {
        numb: 3,
        question: "What does PHP stand for?",
        answer: "Hypertext Preprocessor",
        options: [
            "Hypertext Preprocessor",
            "Hypertext Programming",
            "Hypertext Preprogramming",
            "Hometext Preprocessor"
        ]
    },
    {
        numb: 4,
        question: "What does SQL stand for?",
        answer: "Structured Query Language",
        options: [
            "Stylish Question Language",
            "Stylesheet Query Language",
            "Statement Question Language",
            "Structured Query Language"
        ]
    },
    {
        numb: 5,
        question: "What does XML stand for?",
        answer: "eXtensible Markup Language",
        options: [
            "eXtensible Markup Language",
            "eXecutable Multiple Language",
            "eXTra Multi-Program Language",
            "eXamine Multiple Language"
        ]
    },


    {
        numb: 6,
        question: "What does JS stands for",
        answer: "Java Script",
        options: [
            "Just Script",
            "Java Simple",
            "Java Script",
            "JVM Script"
        ]
    },
];

let startBtn = document.querySelector(".start");
let exitBtn = document.querySelector(".exit");
let continueBtn = document.querySelector(".continue");
let nextBtn = document.querySelector(".next");
let replayBtn = document.querySelector(".replay");
let quitBtn = document.querySelector(".quit");
let question = document.querySelector(".question");
let option = document.querySelectorAll(".option")
let result = document.querySelector(".result");
let message = document.querySelector(".message");
let ans;
let questionActive = true;
let gameActive = false;
let correctAns = 0;

let timeElement = document.querySelector("#file");
let time = document.querySelector(".time");
let startPage = document.querySelector(".start-page");
let rulesPage = document.querySelector(".rule-container");
let quizContainer = document.querySelector(".quiz-container");
let gameEnd = document.querySelector(".gameEnd-screen");
let progressBar = document.getElementById("file");
let currentQues = document.querySelector(".currentNo");
let playStatus = false;
let questionNumber = 1;
let timerId;

startBtn.addEventListener('click', () => {
    startPage.style.display = "none";
    rulesPage.style.display = "flex";
    gameActive = true;
})

exitBtn.addEventListener("click", () => {
    rulesPage.style.display = "none";
    startPage.style.display = "block";
})

continueBtn.addEventListener('click', () => {
    console.log("hello");
    rulesPage.style.display = "none";
    quizContainer.style.display = "flex";
    playStatus = true;
    play();
})

replayBtn.addEventListener('click', () => {
    gameEnd.style.display = "none";
    rulesPage.style.display = "flex";
})

quitBtn.addEventListener('click', () => {
    gameEnd.style.display = "none";
    startPage.style.display = "block"
})

nextBtn.addEventListener('click', () => {
    nextBtn.style.display = "none"
    console.log('hello from next');
    if (questionNumber < 6) {
        currentQues.innerText = questionNumber + 1;
        questionNumber = questionNumber + 1;
        display();
        timer();
    }
    else if (questionNumber == 6) {
        questionNumber = 1;
        currentQues.innerText = questionNumber;
        quizContainer.style.display = "none";
        console.log(correctAns);
        result.innerText = correctAns;
        if (correctAns >= 5) {
            message.innerText = "and congrats! 🎉"
        } else if (correctAns >= 2) {
            message.innerText = "Well Played"
        }
        else if (correctAns <= 1) {
            message.innerText = "Uh-Oh"
        }
        gameEnd.style.display = "flex";

    }
})



let play = () => {
    display();
    timer();
    nextBtn.style.display = "none";
}

Array.from(option).forEach((e, i) => {
    e.addEventListener('click', (e) => {
        if (questionActive == false)
            return;
        if (e.target.innerText == ans) {
            //correct ans
            e.target.style.backgroundColor = "green";
            correctAns++;
        }
        else {
            //wrong ans
            e.target.style.backgroundColor = "red";
        }
        nextBtn.style.display = "block";
    })
})

function display() {
    questionActive = true;
    let questArr = questions[questionNumber - 1];
    question.innerText = questArr.question;
    Array.from(option).forEach((e, i) => {
        e.innerHTML = questArr.options[i];
        e.style.backgroundColor = "rgb(225, 240, 247)"
        if (questArr.answer)
            ans = questArr.answer;
    })
}

function timer() {
    if (timerId) {
        clearInterval(timerId);
    }
    timeElement.value = 15;
    time.innerText = 15;

    timerId = setInterval(() => {
        progressBar.value = progressBar.value - 0.1;
        if (progressBar.value <= 0) {
            clearInterval(timerId);
            questionActive = false;
            nextBtn.style.display = "block";
        }
    }, 100);
};

let timeId = setInterval(() => {
    if (time.innerText > 0) {
        // console.log('HEllo');
        time.innerText = time.innerText - 1;
    }
    if (time.innerText <= 0) {
        clearInterval(timeId);
        questionActive = false;
    }
}, 1000);

