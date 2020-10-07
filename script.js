const startQuiz = document.getElementById("start");
const highScores = document.getElementById("highScore");


//Timer code
function countDown(seconds) {
    let counter = seconds;

    const interval = setInterval(() => {
        console.log(counter);
        counter--;

        if (counter < 0) {
            clearInterval(interval);
            console.log("ping-ping");
        }
    }, 1000);
}
countDown(30);

// Question Bank code (Rough)
const questionAnswer = [{
        question: "this is question 1",
        possAnswers: [
            "a",
            "b",
            "c",
            "d"
        ],
        correctAnswer: 1
    },
    {
        question: "this is question 2",
        possAnswers: [
            "a",
            "b",
            "c",
            "d"
        ],
        correctAnswer: 1
    },
    {
        question: "this is question 3",
        possAnswers: [
            "a",
            "b",
            "c",
            "d"
        ],
        correctAnswer: 1
    },
    {
        question: "this is question 4",
        possAnswers: [
            "a",
            "b",
            "c",
            "d"
        ],
        correctAnswer: 1
    },
    {
        question: "this is question 5",
        possAnswers: [
            "a",
            "b",
            "c",
            "d"
        ],
        correctAnswer: 1
    }
];
//Score keeper indicator

//Question Page

//High Score Page