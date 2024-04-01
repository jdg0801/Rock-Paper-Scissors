// 1: rock, 2: paper, 3: scissor
let player = 0;
let computer = 0;
let currentRound = 1;
const win = document.getElementById("sound_win");
win.volume = 0.5;

function choiceHandler(playerChoice) {
    if (playerChoice === 'rock') {
        return "rock";
    } else if (playerChoice === 'scissor') {
        return "scissor";
    } else if (playerChoice === 'paper') {
        return "paper";
    }
}

function computerChoice() {
    const computerResult = Math.floor(Math.random() * 3) + 1;
    if (computerResult === 1) {
        document.getElementById("comp_choice").src = "images/icons/noun-fist-477918.png";
        return "rock";
    } else if (computerResult === 2) {
        document.getElementById("comp_choice").src = "images/icons/noun-scissors-477919.png";
        return "paper";
    } else if (computerResult === 3) {
        document.getElementById("comp_choice").src = "images/icons/noun-hand-477922.png";
        return "scissor";
    }
}

function roundWinner(playerC, computerC) {
    if (playerC === "rock" && computerC === "paper" ||
        playerC === "paper" && computerC === "scissor" ||
        playerC === "scissor" && computerC === "rock") {
        return "Computer Wins!";
    } else if (playerC === "paper" && computerC === "rock" ||
        playerC === "scissor" && computerC === "paper" ||
        playerC === "rock" && computerC === "scissor") {
        return "Player Wins!";
    } else if (playerC === computerC) {
        return "Tie!";
    }
}

function updateScores() {
    document.getElementById("p_score").innerText = player;
    document.getElementById("c_score").innerText = computer;
}

function playGame(playerC) {
     const computerC = computerChoice();
        const winner = roundWinner(playerC, computerC);
        if (winner === "Player Wins!") {
            player++;
        } else if (winner === "Computer Wins!") { // Added '!' for consistency
            computer++;
        }else if(winner==="Tie!"){
            player=player-1;
            computer=computer-1;
        }
        updateScores();
        currentRound++;
        if (currentRound>5) {
            endGame();
        }
}

document.getElementById('rock-btn').addEventListener('click', function () {
    const playerC = choiceHandler('rock');
    playGame(playerC);
});

document.getElementById('paper-btn').addEventListener('click', function () {
    const playerC = choiceHandler('paper');
    playGame(playerC);
});

document.getElementById('scissor-btn').addEventListener('click', function () {
    const playerC = choiceHandler('scissor');
    playGame(playerC);
});

function endGame() {
    if(player>computer){
        win.play();
        document.getElementById("g_result").innerText = "Misson Passed!"
    }else if(computer>player){
        document.getElementById("g_result").innerText = "Misson Failed!"
    }else{
        document.getElementById("g_result").innerText = "I just wanted to piss you off before I kill you";
    }
}

updateScores();






