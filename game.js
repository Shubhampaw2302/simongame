var gamePattern = []
var userClickedPattern = []
var level = 1

var buttonColours = ["red", "green", "yellow", "blue"]


function nextSequence() {
    var randomNum = Math.random();
    randomNum = randomNum*4;
    randomNum = Math.floor(randomNum);
    var randomChosenColour = buttonColours[randomNum]
    gamePattern.push(randomChosenColour)
    
    var activeButton = document.querySelector("#"+gamePattern[gamePattern.length - 1]);

    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
    var audio1 = new Audio('sounds/'+gamePattern[gamePattern.length - 1]+'.mp3')
    audio1.play();
    
    document.removeEventListener("keydown", nextSequence)
    $("h1").text("Level "+level).fadeOut().fadeIn()
    level = level + 1;
    userClickedPattern = []
}


document.addEventListener("keydown", nextSequence)


$(".colours").click(function () {
    var colour = this.id;
    userClickedPattern.push(colour)

    var activeBut = document.querySelector("#"+colour);
  
    activeBut.classList.add("pressed");
  
    setTimeout(function() {
      activeBut.classList.remove("pressed");
    }, 100);

    var audio = new Audio('sounds/'+colour+'.mp3')
    audio.play()
    checkAnswer()
})



function checkAnswer() {
    
    if (gamePattern[userClickedPattern.length - 1] === userClickedPattern[userClickedPattern.length - 1]) {
        if (gamePattern.length == userClickedPattern.length) {
            setTimeout(function () {
                nextSequence();
                }, 1000);
        }
    } else {
        $("h1").text("Game Over !! Press Any Key")
        var gameOver = new Audio('sounds/wrong.mp3')
        gameOver.play()
        $("body").css("background-color", "red")
        setTimeout(function () {
            $("body").css("background-color", "#011F3F")
        }, 100)
        document.addEventListener("keydown", nextSequence)
        level = 1
        gamePattern = []
    }
    
    
}
