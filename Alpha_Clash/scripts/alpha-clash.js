
function continueGame(){
     const randomWord = getARandomAlphabet();
    const wordDisplay = document.getElementById("current-alphabet");
    wordDisplay.textContent = randomWord;
    addBackgroundColorById(randomWord);


};

function play(){
    hideElement("home-screen");
    showElement("play-ground");

    continueGame();

};

