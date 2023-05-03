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
        console.log("You lose!");
        break;
        case 1:
        console.log("You win!");
        break;
        case 2:
        console.log("You draw!");
        break;
        case 3:
        console.log("You typed a wrong guess");
        break;
    }
}