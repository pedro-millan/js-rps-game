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

//3. playRound function
function playRound(playerSelection, computerSelection) {

    //3.0 Defensive input guard (safe against console misuse)
    const validWeapons = ["rock", "paper", "scissors"];
    if (!validWeapons.includes(playerSelection) || !validWeapons.includes(computerSelection)) {
        return {
            winner: "draw",
            message: "⚠️ Invalid input. Only Rock/Paper/Scissors are valid selections. Round void."
        };
    }

    //3.1 Check for draw first

    if (playerSelection === computerSelection) {
        return {
            winner: "draw",
            message: `Draw! Both picked ${playerSelection}. Try again!`
        }
    }

    //3.2 Check if player wins
    if (playerSelection === "rock" && computerSelection === "scissors") {

        return {
            winner: "player",
            message: `Player wins! ${playerSelection} beats ${computerSelection}`
        }
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {

        return {
            winner: "player",
            message: `Player wins! ${playerSelection} beats ${computerSelection}`
        }

    }
    else if (playerSelection === "scissors" && computerSelection === "paper") {

        return {
            winner: "player",
            message: `Player wins! ${playerSelection} beats ${computerSelection}`
        }
    }

    else {
        return {
            winner: "computer",
            message: `Computer wins! ${computerSelection} beats ${playerSelection}`
        }
    }
}

function game() {

    let playerScore = 0;
    let computerScore = 0;

    //4.1  continue with rounds till no one reaches 3 points
    while (playerScore < 3 && computerScore < 3) {
        const playerChoice = getPlayerChoice()
        if (playerChoice === null) {
            alert('Good Bye! See you soon')
            console.log("%c Game cancelled by user. Goodbye!", "color: gray;")
            return

        }

        const computerChoice = computerPlay()

        //4.2 Play one round

        const roundResult = playRound(playerChoice, computerChoice)

        // styled round choices log (neutral dark label)
        console.log(`%cROUND CHOICES:%c  You: ${playerChoice}  |  AI: ${computerChoice}`,
            "color: #263238; background: #eceff1; font-weight: bold; padding: 2px 8px; border-radius: 4px;",
            "color: #37474f; font-weight: normal;");

        alert(roundResult.message)

        // styled round result message log (color-coded by winner)
        if (roundResult.winner === 'player') {
            console.log(`%c✅ ${roundResult.message}`,
                "color: #2e7d32; background: #e8f5e9; font-weight: bold; padding: 3px 10px; border-radius: 4px; border-left: 4px solid #2e7d32;");
        } else if (roundResult.winner === 'computer') {
            console.log(`%c❌ ${roundResult.message}`,
                "color: #c62828; background: #ffebee; font-weight: bold; padding: 3px 10px; border-radius: 4px; border-left: 4px solid #c62828;");
        } else {
            console.log(`%c🤝 ${roundResult.message}`,
                "color: #e65100; background: #fff3e0; font-weight: bold; padding: 3px 10px; border-radius: 4px; border-left: 4px solid #ef6c00;");
        }

        if (roundResult.winner === 'player') {
            playerScore++
        }
        else if (roundResult.winner === 'computer') {
            computerScore++
        }

        console.log(`%cSCOREBOARD: You: ${playerScore}  |  Computer: ${computerScore}`,
            "color: #1976d2; font-weight: bold; font-size: 12px; padding: 2px 10px; background: #e3f2fd; border-radius: 4px;");

        alert(`SCOREBOARD: You: ${playerScore} Computer: ${computerScore}`)

        if (playerScore === 2 && computerScore === 2) {
            alert(`🔥 2-2 MATCH POINT! 🔥

Next round = WHOLE GAME.
Whoever wins this next round wins the WAR!

Good luck! This is your last chance to save humanity!`);
            console.log("%c🔥 MATCH POINT 🔥 2-2! NEXT ROUND WINS IT ALL!",
                "color: #e65100; background: #fff3e0; font-weight: bold; font-size: 16px; padding: 4px 12px; border-radius: 4px; border: 2px solid #e65100;");
        }
    }


    //4.3 Declare Winner
    if (playerScore === 3) {

        alert('🎉 VICTORY! You defeated the Evil AI! Humanity is saved!')
        console.log("%c VICTORY! You defeated the Evil AI! Humanity is saved!", "color: #1976d2; font-weight: bold; font-size: 14px; padding: 2px 10px; background: #e3f2fd; border-radius: 4px;")

    }
    else if (computerScore === 3) {
        alert('💀 DEFEAT! The Evil AI has won... Prepare for digital domination.')
        console.log("%c DEFEAT! The Evil AI has won... Prepare for digital domination.", "color: #ff4d4f; font-weight: bold; font-size: 14px; padding: 2px 10px; background: #fff3f3; border-radius: 4px;")
    }

}



//5. showWelcome function
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
Press F12 now if you want, then click OK`);

    alert(`🎮 ROCK PAPER SCISSORS — SAVE HUMANITY

Evil AI took over the internet lol
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

- Console open yet? (F12 → Console tab, optional)
- Got the rules? First to 3 wins
- CANCEL to dip or leave the game any time
- Ready to crush the AI?

You got this. Click OK to start! 🏔️`);
}

showWelcome();
game();