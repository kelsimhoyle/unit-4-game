$(document).ready(function () {
    var targetNum;
    var runningTotal = 0;
    var wins = 0;
    var losses = 0;
    var crystalOneNum;
    var crystalTwoNum;
    var crystalThreeNum;
    var crystalFourNum;
    var gameOver = false;

    function randomCrystalNum() {
        return Math.floor(Math.random() * 12) + 1;
    }

    function createNumbers() {
        crystalOneNum = randomCrystalNum();
        crystalTwoNum = randomCrystalNum();
        crystalThreeNum = randomCrystalNum();
        crystalFourNum = randomCrystalNum();
        targetNum = Math.floor(Math.random() * 100) + 20;
    }

    function startGame() {
        $("#winning-div, #losing-div").hide();
        createNumbers();
        $("#crystal1").attr("data-value", crystalOneNum);
        $("#crystal2").attr("data-value", crystalTwoNum);
        $("#crystal3").attr("data-value", crystalThreeNum);
        $("#crystal4").attr("data-value", crystalFourNum);
        runningTotal = 0;
        gameOver = false;
        $("#target-number").text(targetNum);
        $("#running-total").text(runningTotal);
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);
    }

    startGame();

    // when the crystal is clicked, get the data-value attr and add it to the runningTotal
    $(".crystal").on("click", function () {
        if(gameOver) return;
        
        if (runningTotal < targetNum) {
            var crystalNum = parseInt($(this).attr("data-value"));
            runningTotal += crystalNum;
            console.log(runningTotal);
            $("#running-total").text(runningTotal);
        } 
        
        if (runningTotal > targetNum) {
            losses++;
            $("#losing-div").show();
            gameOver = true;
        } else if (runningTotal === targetNum) {
            wins++;
            $("#winning-div").show();
            gameOver = true;
        }
    });

    $(".play-again").on("click", function() {
        startGame();
    });

});