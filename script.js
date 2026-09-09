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