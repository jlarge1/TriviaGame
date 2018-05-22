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
var timeEnd = 30;
var question = 0;


function intialize() {
    $("#start").attr("style", "display: inline-block;");
    $("#quiz").attr("style", "display: none;");
    $("#quizStart").on("click", function () {
        beginGame();
    });
};

function beginGame() {
    $("#start").attr("style", "display:none;");
    $("#quiz").attr("style", "");
    $("#left").append($("<div>").attr("id", "timer"));
    $("#timer").text("00:00 / 00:30");



};

function count() {
    time++;
    var converted = timeConverterfunction(time);
    $("#timer").html(converted + " / 00:30");

}

function timeConverterfunction(t) {
    var minutes = Math.floor(t / 60);
    var sections = t - (minutes * 60);

    if (seconds < 10 ) {
        seconds = "0" + seconds;
    } if (minutes === 0) {
        minutes = "00";
    } else if (minutes <10) {
        minutes = "0" + minutes;
    } 
    return minutes + ":" + seconds;
}

intialize();