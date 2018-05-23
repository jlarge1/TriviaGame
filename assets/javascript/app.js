var questionNum = 8;
var questions = [
    "sheathing",
    "mortar",
    "fenestration",
    "jamb",
    "cupola",
    "pitch",
    "rustication",
    "dormer",
];

var options = [
    [
        "the angle at which a roof slopes",
        "the exterior cladding of a building",
        "a roofed projection from a sloping roof",
        "the portion of an exterior wall that projects above the edge of the roof"
    ],
    [
        "used as a bonding agent between masonry units",
        "a structure over an area that is based on the form of an arch",
        "an ornament on top of a gable roof",
        "stonework emphasized by roughly cut block faces"
    ],
    [
        "the part of a sloping wall that overhangs a wall",
        "tiles for covering roofs and walls",
        "a small domed structure on top of a roof or larger dome",
        "openings in the walls of a building"
    ],
    [
        "the exterior cladding of a building",
        "vertical member on each side of a window or door opening",
        "used as a bonding agent between masonry units",
        "the portion of an exterior wall that projects above the edge of the roof"
    ],
    [
        "a structure over an area that is based on the form of an arch",
        "a small tower usually projecting from the corner of a building",
        "a small domed structure on top of a roof or larger dome",
        "used as a bonding agent between masonry units"
    ],
    [
        "a small tower usually projecting from the corner of a building",
        "the part of a sloping wall that overhangs a wall",
        "openings in the walls of a building",
        "the angle at which a roof slopes"
    ],
    [
        "stonework emphasized by roughly cut block faces",
        "the portion of an exterior wall that projects above the edge of the roof",
        "used as a bonding agent between masonry units",
        "tiles for covering roofs and wall"
    ],
    [
        "an ornament on top of a gable roof",
        "used as a bonding agent between masonry units",
        "vertical member on each side of a window or door opening",
        "the exterior cladding of a building"
    ],
];

var answers = [
    1,
    0,
    3,
    1,
    2,
    3,
    0,
    1,
];

var userAnswers = [];

var time = 0;
var timeEnd = 5 * 60 * 1000;
var question = 0;
var option = 4;
var wrong = [];
var correct = 0;


function intialize() {
    $("#start").attr("style", "display: inline-block;");
    $("#end").attr("style", "display: none;")
    $("#quiz").attr("style", "display: none;");
    $("#showInstruct").on("click", function () {
        instructions();
    });
};

function instructions() {
    $("#start").attr("style", "display: none;");
    $("#instruct").attr("style", "display: inline-block;");
    $("#left").append($("<div>").attr("id", "timer"));
    $("#timer").text("00:00 / 05:00");
    $("#startQuiz").on("click", function () {
        $("#instruct").attr("style", "display:none;");
        $("#quiz").removeAttr("style");
        beginQuiz();
    })

};

function beginQuiz() {
    intervalId = setInterval(count, 1000);
    
    setTimeout(timedOut, timeEnd);
    for (i = 0; i < questionNum; i++) {
        var q = $("<div>").attr("class", "question").text(questions[i]);
        $("#quiz").append(q);
        var o = $("<div>").attr("class", "options");
        for (j = 0; j < option; j++) {
            var id = "question" + i + "option" + j;
            var div = $("<div>");
            var input = $("<input>").attr("class", i).attr("type", "radio").attr("id", id).attr("value", j);
            var label = $("<label>").attr("for", id).html(options[i][j])
            div.append(input).append(label);
            o.append(div);

        }

        $("#quiz").append(o);
    }
    var button = $("<button>").attr("id", "submit").html("Submit Quiz");
    $("#quiz").append(button);
    $("#submit").on("click", function () {
        submitQuiz();
    });
}


function submitQuiz() {
    clearInterval(intervalId);
    for (i = 0; i < questionNum; i++) {
        var selected = $("input[class=" + i + "]:checked").val();
        userAnswers.push(selected);
    }

    $("#quiz").attr("style", "display:none;")
    checkAnswers();

}

function checkAnswers() {

    for (i = 0; i < questionNum; i++) {
        if (userAnswers[i] == answers[i]) {
            correct++;
            wrong.push(0);
        } else {
            wrong.push(1);
        }
    }

    end(correct);
}
function timedOut() {
    clearInterval(intervalId);
    submitQuiz();
    var timeUp = $("<div>").html("Time's up!");
    $("#end").prepend(timeUp);
}
function end(c) {
    var divEnd = $("<div>").html("You got " + c + "/" + questionNum + " correct. Your score is " + percentage(c) + "%");
    $("#end").removeAttr("style").append(divEnd);
}
function percentage(correct) {
    var num = correct / questionNum
    return Math.round(num * 100)
}

function count() {
    time++;
    var converted = timeConverterfunction(time);
    $("#timer").html(converted + " / 05:00");

};

function timeConverterfunction(t) {
    var minutes = Math.floor(t / 60);
    var seconds = t - (minutes * 60);

    if (seconds < 10) {
        seconds = "0" + seconds;
    } if (minutes === 0) {
        minutes = "00";
    } else if (minutes < 10) {
        minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
};

$(document).ready(function () {
    intialize();
});
