var buttonColors=["red","blue","green","yellow"];
var gamePattern=[];
var userClickedPattern=[];
var keyboard=true
var level=0;

$(document).keypress(function(){
    if (keyboard){
        $("#level-title").text="Level 0";
        nextSequence()
        keyboard=false
    }
})

function nextSequence(){
    userClickedPattern=[];
    var num =Math.floor(Math.random()*4);
    var chosenColor=buttonColors[num];
    gamePattern.push(chosenColor);
    $("." + chosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
    playSound(chosenColor)
    level++
    $("h1").text("Level " + level)

}

$(".btn").click(function(Input){
    var userChosenColor=Input.currentTarget.id;
    userClickedPattern.push(userChosenColor);
    playSound(userChosenColor);
    animatePress(userChosenColor);
    checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentlevel){
    if (userClickedPattern[currentlevel]===gamePattern[currentlevel]){
        console.log("success");
        if (userClickedPattern.length===gamePattern.length){
            setTimeout(function () {
                nextSequence();
              }, 1000);
        }
    }
    else{
        playSound("wrong");
        $("body").addClass("game-over");
        setTimeout(function(){$("body").removeClass("game-over");},200);
        $("h1").html("Game Over <br> Press any key to restart");
        startOver();
    }
}


function startOver(){
    gamePattern=[];
    userClickedPattern=[];
    keyboard=true
    level=0;
}
function playSound(clickedColor){
    var audio=new Audio("sounds/"+clickedColor+".mp3");
    audio.play();
}
function animatePress(userChosenColor){
    $("."+userChosenColor).addClass("pressed");
    setTimeout(function(){$("."+userChosenColor).removeClass("pressed")},100);
}
