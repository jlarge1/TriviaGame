var questionNum = 8;
var questions = [
    "question 1",
    "question 2",
    "question 3",
    "question 4",
    "question 5",
    "question 6",
    "question 7",
    "question 8",
];
var options = [
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
    ["answer a", "answer b", "answer c", "answer d"],
];
var answers = [
    1,
    0,
    3,
    4,
    2,
    3,
    0,
    1,
];

var userAnswers = [];

var time = 0;
var timeEnd = (5 * 60);
var question = 0;


function intialize() {
    $("#start").attr("class", "show");
    $("#quiz").attr("style", "display: none");
    $("#quizStart").on("click", startGame());
};

function stop() { 
    clearInterval(intervalId);
};

function count() {
    time++;
    var converted = timeConverterfunction(time);
    $("#timer").html(converted + " / 05:00");
};
function startGame() {
    $("#start").attr("style", "display:none;");
    $("#left").append($("<div>").attr("id", "timer"));
    $("#timer").text("00:00 / 05:00");

    intervalId = setInterval(count, 1000);
    for (i = 0; i < questionNum; i++) {
        var q = $("<div>").text(questions[i]);
        $("#quiz").append(q);
        for (j = 0; j < 4; j++) {
            var a = $("<div>").html('<input type="radio" class="option" id="' + i + j + '">' + options[i][j] + '</button>');
            $("#quiz").append(a);
        }
    }
};

function game() {


    if (time == timeEnd) {
        endGame();
    }

};

function endgame() {
    $("#quiz").html("Time is up!");
}


function timeConverterfunction(t) {

    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    }

    if (minutes === 0) {
        minutes = "00";
    }
    else if (minutes < 10) {
        minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
}


intialize();