let userScore = 0;
let compScore = 0; //Initializes two variables to track the scores of the user and computer


const choices  = document.querySelectorAll(".choice"); //Selects all HTML elements with the class .choice
const msg  = document.querySelector("#msg"); //Selects the element with id="msg"
const userScorePara  = document.querySelector("#user-score");
const compScorePara  = document.querySelector("#comp-score");



const genCompChoice = () => { //generating the computers choice
    const options = ["rock", "paper", "scissors"]; //all the possible options in form of an array
    const randIdx = Math.floor(Math.random() * 3); //Math.floor rounds of the number to the nearest one while math.random generates random numbers and  When we multiply it by 3, the result is a random number between 0 and 2.99
    return options[randIdx]; //returns a random choice
}

    const drawGame = () => {
        msg.innerText = "Game was Draw. Try again";
        msg.style.backgroundColor = "yellow"
        msg.style.color = "black"
    }

    const showWinner = (userWin, userChoice, compChoice) => {
        if(userWin){
            userScore++;
            userScorePara.innerText = userScore;
            msg.innerText = `You won 🎉 ${userChoice} beats ${compChoice}`;
            msg.style.backgroundColor = "lightgreen"
        } else {
             compScore++;
            compScorePara.innerText = compScore;
            msg.innerText =  `You lost 😞 ${compChoice} beats your ${userChoice}`;
            msg.style.backgroundColor = "red"
        }
    };

const playGame = (userChoice) => { //Takes the user’s choice and generates a computer choice.
    const compChoice = genCompChoice();

    if (userChoice === compChoice){
        drawGame();
    } else {
        let userWin = true;
        if (userChoice === "rock"){
            userWin = compChoice === "paper" ? false : true;
        } else if (userChoice === "paper"){
            userWin = compChoice === "scissors" ? false : true;
        } else {
            userWin = compChoice === "rock"? false : true;
        }
        showWinner(userWin, userChoice, compChoice);
    }
}

choices.forEach((choice) => {
    choice.addEventListener("click", ()=> {
        const userChoice = choice.getAttribute("id");
        playGame(userChoice);
    });
});