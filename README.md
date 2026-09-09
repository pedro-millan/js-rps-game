# Rock Paper Scissors — JavaScript Assignment

This project is a browser-based Rock, Paper, Scissors game created with JavaScript as part of the Mayerfeld Practicum Program.

The game is built with vanilla JavaScript and runs through browser dialogs and the console. The HTML file only provides the basic document structure and links to the external JavaScript file.

## The Game Implements

- A blank HTML document connected to an external JavaScript file.
- Use of `prompt()` to collect the player's choice.
- Use of the browser console and/or alerts to display game messages.
- Random generation of the computer's choice with `computerPlay()`.
- Comparison of both choices with `playRound(playerSelection, computerSelection)`.
- Full game flow controlled by `game()`.
- Gameplay that continues until either the player or the computer wins 3 rounds.
- Handling of uppercase, lowercase and unnecessary spaces in user input.
- Handling of invalid input without counting it as a round.
- Safe ending if the player presses Cancel.
- Draws that do not award points to either side.

## Main Functions

- `computerPlay()` — randomly returns rock, paper or scissors.
- `normalizeInput(input)` — cleans and validates the player's input.
- `getPlayerChoice()` — manages the `prompt()` interaction and returns a valid choice or cancel.
- `playRound(playerSelection, computerSelection)` — plays one round and returns the result.
- `game()` — controls the full game loop, score and final result.

## Team Workflow

The project is developed collaboratively using GitHub branches.

Both team members review, test and merge the final solution together.

## How to Run

1. Open `index.html` in a browser.
2. Open the browser console.
3. Follow the game instructions shown before the game starts.
4. Enter rock, paper or scissors when prompted.
5. The first side to reach 3 points wins the game.
