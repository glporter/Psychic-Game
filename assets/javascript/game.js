//Javascript file containing all the logic and functions for the Psychic game

function resetGame() {
    alert("Branched to the resetGame function...")
    console.log("winCount = " + winCount.textContent);

    if (winCount.textContent()) {
        alert("Sorry! You didn't guess any letters at all. Refresh the browser to play the game again.");


        guess = 0;
        userText = '';
        userText.textContent = '';
        //winCount = 0;
        //winCount.textContent = 0;
        lossCount = 0;
        lossCount.textContent = 0;
        lossTotal = 0;
        guessCount = 0;
        guessCount.textContent = 0;
        guessesLeft = 26;
    }



    function rand() {
        return (Math.floor((Math.random() * 26) + 1));
    }