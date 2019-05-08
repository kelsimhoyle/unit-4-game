$(document).ready(function () {
    var targetNum;
    var runningTotal = 0;
    var wins = 0;
    var losses = 0
    var gameOver = false;

    // objects for the crystals and their attributes
    var crystalsList = [
        {
            crystal: "one",
            value: 0,
            src: "assets/images/blueGemstone.jpg",
        },
        {
            crystal: "two",
            value: 0,
            src: "assets/images/greenGemstone.jpg",
        },
        {
            crystal: "three",
            value: 0,
            src: "assets/images/purpleGemstone.jpeg"
        },
        {
            crystal: "four",
            value: 0,
            src: "assets/images/rubyGemstone.jpg"
        },
    ]

    function createNumbers() {
        for (var i = 0; i < crystalsList.length; i++) {
            var randomCrystalNum = Math.floor(Math.random() * 12) + 1;
            crystalsList[i].value = randomCrystalNum;
        }
        targetNum = Math.floor(Math.random() * 100) + 20;
    }

    function createCrystals() {
        for (var i = 0; i < crystalsList.length; i++ ) {
            // create a div for the crystals to go to with a specific  value
            var crystalDiv = $("<div>").addClass("crystal").attr("id", crystalsList[i].crystal)
            crystalDiv.attr("data-value", crystalsList[i].value);
            $("#crystals-display").append(crystalDiv);
            // put the picture in the div 
            var crystalPic = $("<img>");
            crystalPic.attr("src", crystalsList[i].src);
            $(crystalDiv).append(crystalPic);
        }
    }

    function startGame() {
        $("#crystals-display").empty();
        $("#winning-div, #losing-div").hide();
        createNumbers();
        createCrystals();
        runningTotal = 0;
        gameOver = false;
        $("#target-number").text(targetNum);
        $("#running-total").text(runningTotal);
        $("#wins-text").text(wins);
        $("#losses-text").text(losses);

        $(".crystal").on("click", function () {
            console.log("clicked");
            if (gameOver) return;
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
    
    }

    startGame();

    // when the crystal is clicked, get the data-value attr and add it to the runningTotal
    
    $(".play-again").on("click", function () {
        startGame();
    });

});