/****************************************************************************************************
/* Declare questions and answers
/****************************************************************************************************/

var q0 = {
    question: "How many miles to the Sun?",
    ans0: "93 million",
    ans1: "1 light years",
    ans2: "45,000",
    ans3: "2 light years",
    correct: "ans0",
    ansInp: "Q0Answers",
};

var q1 = {
    question: "What is Barbie's middle and last name?",
    ans0: "Flower Petal",
    ans1: "Millicent Roberts",
    ans2: "Leigh Jones",
    ans3: "Rachel Jones",
    correct: "ans1",
    ansInp: "Q1Answers",
};

var q2 = {
    question: "What is the longest river in the world?",
    ans0: "The Amazon",
    ans1: "The Nile",
    ans2: "The Mississippi",
    ans3: "The Rhine",
    correct: "ans0",
    ansInp: "Q2Answers",
};

var q3 = {
    question: "The Medellin Cartel spent how much on rubber bands each month to hold their cash?",
    ans0: "$500",
    ans1: "$2,500",
    ans2: "$15,000",
    ans3: "$50,000",
    correct: "ans1",
    ansInp: "Q3Answers",
};

var q4 = {
    question: "Which city is farthest west?",
    ans0: "Santa Barbara, California",
    ans1: "Los Angeles, California",
    ans2: "Las Vegas, Nevada",
    ans3: "Reno, Nevada",
    correct: "ans3",
    ansInp: "Q4Answers",
};

var q5 = {
    question: "What's the original name for Kool-Aid?",
    ans0: "Oh Yeah!",
    ans1: "Fruit Smack",
    ans2: "Go-Go Juice",
    ans3: "Kool-Kids",
    correct: "ans1",
    ansInp: "Q5Answers",
};

var q6 = {
    question: "The story Green Eggs and Ham uses only how many unique words.",
    ans0: "50",
    ans1: "100",
    ans2: "150",
    ans3: "200",
    correct: "ans0",
    ansInp: "Q6Answers",
};

var q7 = {
    question: "According to Toyota, what is the plural of Prius.",
    ans0: "Priuses",
    ans1: "Priums",
    ans2: "Prias",
    ans3: "Prii",
    correct: "ans3",
    ansInp: "Q7Answers",
};

var q8 = {
    question: "What is the real character name of \"Shaggy\" from the Scooby Doo cartoon.",
    ans0: "Rusty West",
    ans1: "Archibal Hamm",
    ans2: "Norville Rogers",
    ans3: "Adam Shaglin",
    correct: "ans2",
    ansInp: "Q8Answers",
};

var q9 = {
    question: "Which was the first planet discovered by telescope?",
    ans0: "Saturn",
    ans1: "Jupiter",
    ans2: "Uranus",
    ans3: "Mars",
    correct: "ans2",
    ansInp: "Q9Answers",
};

/****************************************************************************************************
/* Set global variables
/****************************************************************************************************/

var gameTimer = "";
var qIndex = "";
var timerCount = 90;
var totalCorrect = 0;
var totalWrong = 0;
var totalNoAns = 0;
var questionArray = [q0, q1, q2, q3, q4, q5, q6, q7, q8, q9];

/****************************************************************************************************
/* Define the functions used in the game
/****************************************************************************************************/

function computeOutcome() {
    for (i = 0; i < questionArray.length; i++) {
        qIndex = questionArray[i];
        btnGrp = qIndex.ansInp;
        corAns = qIndex.correct;
        var selValue = $('input[name = "' + btnGrp + '"]:checked').val();
        if (selValue === corAns) {
            totalCorrect++;
        }
        else if (selValue === undefined) {
            totalNoAns++;
        }
        else {
            totalWrong++;
        }
    }
}

function splashResults() {
    var slResultsScreen = `
    <div class="container mb-5 border-top border-dark">
        <div class="row">
            <section id="ShowResults" class="col-lg-12 pl-0">
                <h2 id="ResultTitle" class="col-lg-12 mt-3 mb-3 text-center">Your Results</h2>
            </section>
        </div>
        <div class="row">
            <section id="CorrectArea" class="col-lg-12 pl-0">
                <h3 id="TotalCorrect" class="col-lg-12 mt-3 mb-3 text-center">Correct Answers:  ${totalCorrect}</h3>
            </section>
        </div>
        <div class="row">
            <section id="WrongArea" class="col-lg-12 pl-0">
                <h3 id="TotalWrong" class="col-lg-12 mt-3 mb-3 text-center">Incorrect Answers:  ${totalWrong}</h3>
            </section>
        </div>
        <div class="row">
            <section id="UnAnsweredArea" class="col-lg-12 pl-0">
                <h3 id="TotalUnanswered" class="col-lg-12 mt-3 mb-3 text-center">No Response:  ${totalNoAns}</h3>
            </section>
        </div>
    `

    $('#GameBody').html(slResultsScreen);
}

function splashWelcome() {
    var slWelcomeScreen = `
    <div id="LaunchTitle" class="container mt-5 mb-5">
        <div class="row pt-3">
            <header id="TitleArea" class="col-lg-12 mb-5 pb-5 text-center">
                <h1 id="GameTitle" class="mb-5 pb-5">Trivia Challenge</h1>
            </header>
        </div>
        <div class="row mt-5 pb-5">
            <p class=col-lg-5></p>
                <button id="StartButton" type="button" class="col-lg-2 btn btn-success my-5 align-center">Start</button>
            <p class=col-lg-5></p>
        </div>
    </div>
    `

    $('#TitleSpace').html(slWelcomeScreen);
}

function splashTitle() {
    var slTitleScreen = `
    <div id="PlayTitle" class="container mt-5">
        <div class="row">
            <header id="TitleArea" class="col-lg-12 mt-3 mb-3 text-center">
                <h1 id="GameTitle">Trivia Challenge</h1>
            </header>
        </div>
    `

    $('#TitleSpace').html(slTitleScreen);
}

function splashTimer() {
    var slTimerScreen =`
        <div class="container">
            <div class="row">
                <span id="GameTimer" class="col-lg-12 pb-3 text-center border-bottom border-succes">
                    Time Remaining: 01:30
                </span>
            </div>
        </div>
    `
    $('#TimerSpace').append(slTimerScreen);
}

function splashQandA() {
    for (i = 0; i < questionArray.length; i++) {
        qIndex = questionArray[i];
        questionValue = qIndex.question;
        ans0Value = qIndex.ans0;
        ans1Value = qIndex.ans1;
        ans2Value = qIndex.ans2;
        ans3Value = qIndex.ans3;

    var slQandAScreen = `
    <div class="container border-top border-dark">
        <div class="row pl-4">
            <section id="Question${i}" class="QuestText col-lg-12 pl-0">
                ${questionValue}
            </section>
        </div>
        <div class="row pl-4 pb-5 pt-2">
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="inputQ${i}R0" name="Q${i}Answers" class="custom-control-input" value="ans0">
                <label id="Q${i}Radio0" class="answerOption custom-control-label" for="inputQ${i}R0">${ans0Value}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="inputQ${i}R1" name="Q${i}Answers" class="custom-control-input" value="ans1">
                <label id="Q${i}Radio1" class="answerOption custom-control-label" for="inputQ${i}R1">${ans1Value}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="inputQ${i}R2" name="Q${i}Answers" class="custom-control-input" value="ans2">
                <label id="Q${i}Radio2" class="answerOption custom-control-label" for="inputQ${i}R2">${ans2Value}</label>
            </div>
            <div class="custom-control custom-radio custom-control-inline">
                <input type="radio" id="inputQ${i}R3" name="Q${i}Answers" class="custom-control-input" value="ans3">
                <label id="Q${i}Radio3" class="answerOption custom-control-label" for="inputQ${i}R3">${ans3Value}</label>
            </div>
        </div>
    </div>
    `

    $('#QandASpace').append(slQandAScreen);
    }
}

function splashSubButton() {
    var slSubmitScreen = `
    <div class="container mb-5 border-top border-dark">
        <div class="row">
            <p class="col-lg-5"></p>
                <button id="SubmitButton" class="col-lg-2 btn btn-success btn-lg mt-5 mb-5 center=block" type="button">Submit</button>
            <p class="col-lg-5"></p>
        </div>
    </div>
    `
    $('#ButtonSpace').append(slSubmitScreen);
}

function startCountDown() {
    gameTimer = setInterval(function() {
        timerCount--;
        // console.log("timerCount = " + timerCount);
        var minutes = Math.floor(timerCount / 60);
        var seconds = timerCount - minutes * 60;
        seconds = ("0" + seconds).slice(-2);
        minutes = ("0" + minutes).slice(-2);
        // console.log("timerCount = " + timerCount + "    minutes = " + minutes + "     seconds = " + seconds);
        $('#GameTimer').html("Time Remaining:  " + minutes + ":" + seconds);
        if (timerCount === -1) {
            clearInterval(gameTimer);
            computeOutcome();
            splashResults();
        }
    },1000);
}

/****************************************************************************************************
/* Game play
/****************************************************************************************************/

$(document).ready(function () {

    splashWelcome();

    $("#StartButton").on("click", function () {
        splashTitle();
        splashTimer();
        splashQandA();
        splashSubButton();
        startCountDown();

        $("#SubmitButton").on("click", function () {
            clearInterval(gameTimer);
            computeOutcome();
            splashResults();
        });

    });

});
