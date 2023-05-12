function getComputerChoice() {
    const choiceArray = ["Rock", "Paper", "Scissors"];
    let randIndex = Math.floor(Math.random() * choiceArray.length) + 0;
    return choiceArray[randIndex];
}

function playRound(playerGuess, computerGuess) {
    

    let modifiedPlayerGuess = playerGuess.charAt(0).toUpperCase() + playerGuess.slice(1).toLowerCase();

    let a;

    if (modifiedPlayerGuess == "Rock") {
        switch(computerGuess) {
            case "Rock": 
                a = 2;
                break;
            case "Paper":
                a = 0;
                break;
            case "Scissors":
                a = 1;
                break;
        }
    }
    else if (modifiedPlayerGuess == "Paper") {
        switch(computerGuess) {
            case "Rock": 
                a = 1;
                break;
            case "Paper":
                a = 2;
                break;
            case "Scissors":
                a = 0;
                break;
        }
    }
    else if (modifiedPlayerGuess == "Scissors") {
        switch(computerGuess) {
            case "Rock": 
                a = 0;
                break;
            case "Paper":
                a = 1;
                break;
            case "Scissors":
                a = 2;
                break;
        }
    }
    else a = 3;

    switch(a) {
        case 0: 
        return "You lose!";
        break;
        case 1:
        return "You win!";
        break;
        case 2:
        return "You draw!";
        break;
        case 3:
        return "You typed a wrong guess!";
        break;
    }
}

function showResult(playerGuess, computerGuess) {
    let pRes = document.querySelector('.playerGuess');
    let cRes = document.querySelector('.computerGuess');
    pRes.textContent = `Your guess: ${playerGuess}`;
    cRes.textContent = `Computer's guess: ${computerGuess}`;
    document.querySelector('.result').textContent = playRound(playerGuess, computerGuess);
}

const btn = document.querySelectorAll("button");
btn.forEach((e) => {
    e.addEventListener('click', function() {
        let guess = e.getAttribute('id');
        showResult(guess, getComputerChoice());
    })
})
