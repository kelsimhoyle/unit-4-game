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

    function playGame() {
        createNumbers();
        $("#crystal1").attr("data-value", crystalOneNum);
        $("#crystal2").attr("data-value", crystalTwoNum);
        $("#crystal3").attr("data-value", crystalThreeNum);
        $("#crystal4").attr("data-value", crystalFourNum);
        runningTotal = 0;
        gameOver = false;
        $("#target-number").text(targetNum);

    }

    playGame();

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
            alert("You Lose");
            gameOver = true;
        }         if (runningTotal === targetNum) {
            wins++;
            gameOver = true;
            alert("You Win!");
        }
    });

});