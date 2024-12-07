let userScore = 0;
let computerScore = 0;
let Draw = 0;

const choices = document.querySelectorAll(".choice");

const genCmpChoice = () => {

    const options = ["rock", "paper", "scissors"];
    const randomIdx = Math.floor(Math.random() * 3);
    return options[randomIdx];
};



const showWinner = (userWin) => {
    const msgElement = document.getElementById("msg");

    if (userWin) {
        msgElement.innerText = "Congratulations! You win!";
        userScore++;
        document.getElementById("user-score").innerText = userScore;
        msgElement.style.color = "#00ff88";
        msgElement.classList.add("animate-pop");
    } else {
        msgElement.innerText = "Computer wins!";
        computerScore++;
        msgElement.style.color = "#ff1034";
        document.getElementById("comp-score").innerText = computerScore;
        msgElement.classList.add("animate-pop");
    }



    msgElement.addEventListener("animationend", () => {
        msgElement.classList.remove("animate-pop");
    }, { once: true });

};


const playGame = (userChoice) => {
    const cmpChoice = genCmpChoice();
    // console.log("cmp:", cmpChoice);
    // console.log("user:", userChoice);

    if (userChoice == cmpChoice) {
        document.getElementById("msg").innerText = "It was a Draw";
        Draw++;
        document.getElementById("draw").innerText = Draw;
        document.getElementById("msg").classList.add("animate-pop");
        document.getElementById("msg").style.color = "#ffcc00";
        document.getElementById("msg").addEventListener("animationend", () => {
            document.getElementById("msg").classList.remove("animate-pop");
        }, { once: true });
    }
    else {
        let userWin = true;
        if (userChoice == "rock") {
            // rock , paper
            userWin = cmpChoice == "paper" ? false : true;
        }
        else if (userChoice == "paper") {
            // paper , scissors
            userWin = cmpChoice == "scissors" ? false : true;

        }
        else {

            userWin = cmpChoice == "rock" ? false : true;

        }

        showWinner(userWin);
    }

};

choices.forEach((choice) => {

    choice.addEventListener("click", () => {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);

    });

})