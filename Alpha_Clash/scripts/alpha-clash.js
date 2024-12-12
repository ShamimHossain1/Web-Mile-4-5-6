
function keyPress(event) {
    const playerPressed = event.key;
    const currentWord = document.getElementById("current-alphabet").innerText.toLowerCase();
    console.log(currentWord);

    if(playerPressed == 'Escape'){
        gameOver();
    }

    if (playerPressed == currentWord) {
        removeBackgroundColorById(playerPressed);

        // const currentScore = parseInt(document.getElementById("current-score").innerText);
        // const newScore = currentScore + 1;
        // document.getElementById("current-score").innerText = newScore;

        const currentScore = getElementValueById("current-score");
        const newScore = currentScore + 1;
        setTextElementValueById("current-score", newScore);


        continueGame();
    }
    else {
        const currentLife = getElementValueById("current-life");
        if (currentLife == 0) {
            gameOver();
           
            return;

        }
        else {

            const remainingLife = currentLife - 1;
            setTextElementValueById("current-life", remainingLife);
        }

        // let currentLife = parseInt(document.getElementById("current-life").innerText);

        // const newLife = currentLife - 1;
        // document.getElementById("current-life").innerText = newLife;
    }

};

    document.addEventListener('keyup', keyPress);


function continueGame() {
    const randomWord = getARandomAlphabet();
    document.getElementById("current-alphabet").textContent = randomWord;
    addBackgroundColorById(randomWord);
};

function play() {
    hideElement("final-score");
    hideElement("home-screen");
    showElement("play-ground");
    setTextElementValueById("current-life", 5);
    setTextElementValueById("current-score", 0);
    continueGame();
};

function gameOver() {
    hideElement("play-ground");
    showElement("final-score");
    hideElement("home-screen");


    const currentScore = getElementValueById("current-score");
    setTextElementValueById("last-score", currentScore);

    const currentWord = document.getElementById("current-alphabet").innerText.toLowerCase();
    removeBackgroundColorById(currentWord);

};



