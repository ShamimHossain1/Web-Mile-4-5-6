
function keyPress(event) {
    const playerPressed = event.key;
    const currentWord = document.getElementById("current-alphabet").innerText.toLowerCase();
    console.log(currentWord );

    if(playerPressed == currentWord){
        removeBackgroundColorById(playerPressed);

        const currentScore = parseInt(document.getElementById("current-score").innerText);
        const newScore = currentScore + 1;
        document.getElementById("current-score").innerText = newScore;
        continueGame();

    }
    else{
        
        let currentLife = parseInt(document.getElementById("current-life").innerText);
        if(currentLife == 0){
            
            hideElement("play-ground");
            showElement("final-score");
        }
        const newLife = currentLife - 1;
        document.getElementById("current-life").innerText = newLife;
     

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
    continueGame();
};

