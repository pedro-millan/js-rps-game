// Function contracts agreed by the team:
//
// computerPlay()
// Returns: "rock" | "paper" | "scissors"
//
// normalizeInput(input)
// Receives: user input as a string
// Returns: "rock" | "paper" | "scissors" | "invalid"
//
// getPlayerChoice()
// Uses: prompt()
// Returns: "rock" | "paper" | "scissors" | "cancel"
//
// playRound(playerSelection, computerSelection)
// Receives:
// - playerSelection: "rock" | "paper" | "scissors"
// - computerSelection: "rock" | "paper" | "scissors"
// Returns: "win" | "lose" | "draw"
//
// game()
// Controls the full game flow:
// - shows instructions
// - keeps score
// - calls getPlayerChoice()
// - calls computerPlay()
// - calls playRound()
// - loops until player or computer reaches 3 points
// - handles cancel safely
// - announces the final winner


const options = ["rock", "paper", "scissors"]; //array with the three valid game options


function computerPlay() {

    //creating a random index between 0 and 2, then returning an "options" array value
    const randNum = Math.floor(Math.random() * 3);
    const computerOption = options[randNum];
    
    return computerOption;
}

function normalizeInput(input) {

    //clenaning unnecessary spaces and normalization to lower case
    const inputTrim = input.trim();
    const inputNormalized = inputTrim.toLowerCase();

    //validating if user's entry is correct
    if (options.includes(inputNormalized)){
        return inputNormalized;
    }else{
        return "invalid";
    }
}


function getPlayerChoice() {

    //loop until the player enters a valid choice or cancels the prompt
    while(true) {
        const playerInput = prompt("Choose rock, paper or scissors: ");
        
        if (playerInput === null) {
            return "cancel";
        }

        const playerChoice = normalizeInput(playerInput);

        if (playerChoice !== "invalid"){
            return playerChoice;   
        }

        //alert shown when the user's input is not valid
        alert ("Only 'rock', 'paper' or 'scissors' are allowed. Please try again.");
    }
}