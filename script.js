const options = ["rock", "paper", "scissors"]; // Array with the three valid game options

function computerPlay() {
    // Create a random index, then return one option from the array
    const randNum = Math.floor(Math.random() * options.length);
    const computerOption = options[randNum];

    return computerOption;
}

function normalizeInput(input) {
    // Clean unnecessary spaces and normalize the input to lowercase
    const inputTrim = input.trim();
    const inputNormalized = inputTrim.toLowerCase();

    // Validate if the user's input is one of the allowed options
    if (options.includes(inputNormalized)) {
        return inputNormalized;
    }

    return "invalid";
}

function getPlayerChoice() {
    // Loop until the player enters a valid choice or cancels the prompt
    while (true) {
        const playerInput = prompt("Choose rock, paper or scissors:");

        if (playerInput === null) {
            return "cancel";
        }

        const playerChoice = normalizeInput(playerInput);

        if (playerChoice !== "invalid") {
            return playerChoice;
        }

        // Alert shown when the user's input is not valid
        alert("Only 'rock', 'paper' or 'scissors' are allowed. Please try again.");
    }
}

// Resolves a single round and returns { winner, message }. winner is "player", "computer" or "draw"
function playRound(playerSelection, computerSelection) {
    // Defensive input guard
    if (!options.includes(playerSelection) || !options.includes(computerSelection)) {
        return {
            winner: "draw",
            message: "⚠️ Invalid input. Only Rock/Paper/Scissors are valid selections. Round void."
        };
    }

    if (playerSelection === computerSelection) {
        return {
            winner: "draw",
            message: `Draw! Both picked ${playerSelection}. Try again!`
        };
    }

    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return {
            winner: "player",
            message: `Player wins! ${playerSelection} beats ${computerSelection}`
        };
    }

    return {
        winner: "computer",
        message: `Computer wins! ${computerSelection} beats ${playerSelection}`
    };
}

// Runs the match loop (best of 5, first to 3 wins) and logs/alerts results each round
function game() {
    let playerScore = 0;
    let computerScore = 0;

    // Keep playing rounds until someone reaches 3 wins
    while (playerScore < 3 && computerScore < 3) {
        const playerChoice = getPlayerChoice();

        if (playerChoice === "cancel") {
            alert("Goodbye! See you soon.");
            console.log("%cGame cancelled by user. Goodbye!", "color: gray;");
            return;
        }

        const computerChoice = computerPlay();
        const roundResult = playRound(playerChoice, computerChoice);

        console.log(
            `%cROUND CHOICES:%c  You: ${playerChoice}  |  AI: ${computerChoice}`,
            "color: #263238; background: #eceff1; font-weight: bold; padding: 2px 8px; border-radius: 4px;",
            "color: #37474f; font-weight: normal;"
        );

        alert(roundResult.message);

        if (roundResult.winner === "player") {
            console.log(
                `%c✅ ${roundResult.message}`,
                "color: #2e7d32; background: #e8f5e9; font-weight: bold; padding: 3px 10px; border-radius: 4px; border-left: 4px solid #2e7d32;"
            );
            playerScore++;
        } else if (roundResult.winner === "computer") {
            console.log(
                `%c❌ ${roundResult.message}`,
                "color: #c62828; background: #ffebee; font-weight: bold; padding: 3px 10px; border-radius: 4px; border-left: 4px solid #c62828;"
            );
            computerScore++;
        } else {
            console.log(
                `%c🤝 ${roundResult.message}`,
                "color: #e65100; background: #fff3e0; font-weight: bold; padding: 3px 10px; border-radius: 4px; border-left: 4px solid #ef6c00;"
            );
        }

        console.log(
            `%cSCOREBOARD: You: ${playerScore}  |  Computer: ${computerScore}`,
            "color: #1976d2; font-weight: bold; font-size: 12px; padding: 2px 10px; background: #e3f2fd; border-radius: 4px;"
        );

        alert(`SCOREBOARD: You: ${playerScore} | Computer: ${computerScore}`);

        if (playerScore === 2 && computerScore === 2) {
            alert(`🔥 2-2 MATCH POINT! 🔥

Next round = WHOLE GAME.
Whoever wins this next round wins the WAR!

Good luck! This is your last chance to save humanity!`);

            console.log(
                "%c🔥 MATCH POINT 🔥 2-2! NEXT ROUND WINS IT ALL!",
                "color: #e65100; background: #fff3e0; font-weight: bold; font-size: 16px; padding: 4px 12px; border-radius: 4px; border: 2px solid #e65100;"
            );
        }
    }

    if (playerScore === 3) {
        alert("🎉 VICTORY! You defeated the Evil AI! Humanity is saved!");
        console.log(
            "%cVICTORY! You defeated the Evil AI! Humanity is saved!",
            "color: #1976d2; font-weight: bold; font-size: 14px; padding: 2px 10px; background: #e3f2fd; border-radius: 4px;"
        );
    } else if (computerScore === 3) {
        alert("💀 DEFEAT! The Evil AI has won... Prepare for digital domination.");
        console.log(
            "%cDEFEAT! The Evil AI has won... Prepare for digital domination.",
            "color: #ff4d4f; font-weight: bold; font-size: 14px; padding: 2px 10px; background: #fff3f3; border-radius: 4px;"
        );
    }
}

function showWelcome() {
    alert(`Quick heads up! 👋

Open the browser console for this game.

WHY:
- All results + scores + big final banners go there
- If you miss a popup, the info is still in console

HOW TO OPEN IT:
- Chrome / Edge / Firefox: Press F12, click "Console" tab
- Safari: Alt + Cmd + C

WHERE YOU'LL SEE STUFF:
- TWO places: these popup alerts AND the console
- Console is the permanent log
- Alerts alone work fine to play

Press F12 now if you want, then click OK.`);

    alert(`🎮 ROCK PAPER SCISSORS — SAVE HUMANITY

Evil AI took over the internet.
Beat it at RPS to stop it.

HOW TO WIN:
- First to 3 WINS takes the war
- Draws don't count, replay that round
- Rock > Scissors, Scissors > Paper, Paper > Rock

HOW TO PLAY:
- Type: rock / paper / scissors when prompted
- CAPS or extra spaces are totally fine
- Click CANCEL any time to quit safely

Good luck. Click OK for one last check!`);

    alert(`🚀 LAST QUICK CHECK

- Console open yet? F12 → Console tab, optional
- Got the rules? First to 3 wins
- CANCEL to leave the game any time
- Ready to crush the AI?

You got this. Click OK to start!`);
}

showWelcome();
game();
