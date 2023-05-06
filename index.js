let score = JSON.parse(localStorage.getItem('score')) || {
    wins: 0,
    losses: 0,
    ties: 0
    };
    
    
    updateScoreElements();
    
    // if (score === null) {
    //   score = {
    //     wins: 0,
    //     losses: 0,
    //     ties: 0
    //   };
    // }
    
    function autoPlay() {
            let intervalId;
            let isAutoPlaying = false;
        if (!isAutoPlaying) {
            intervalId = setInterval(function() {
            const playerMove = compMove();
            playGame(playerMove);
            }, 1000);
            isAutoPlaying = true;
            console.log(intervalId);
        } else {
            clearInterval(intervalId);
            isAutoPlaying = false;
            console.log(intervalId);
        }
        }
    
    

    // function autoPlay() {
    //     setInterval(function() {
    //         const playerMove = compMove();
    //         playGame(playerMove);
    //     }, 1000);
    // }
    
    
    function updateScoreElements() {
        document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`;
    }
    
    function compMove() {
    const randomnumber = Math.random();
    let computerMove = "";
    
    if (randomnumber >= 0 && randomnumber < 1 / 3) {
        computerMove = "rock";
    } else if (randomnumber >= 1 / 3 && randomnumber < 2 / 3) {
        computerMove = "paper";
    } else if (randomnumber >= 2 / 3 && randomnumber < 1) {
        computerMove = "scissors";
    }
    
    return computerMove;
    }
    
    function playGame(playerMove) {
    const computerMove = compMove();
    
    let result = "";
    
    if (playerMove === "rock") {
        if (computerMove === "rock") {
        result = "It was a tie";
        }
    
        if (computerMove === "paper") {
        result = "You lose";
        }
    
        if (computerMove === "scissors") {
        result = "You win";
        }
    
        // alert(`you picked Rock. Computer picked ${computerMove}.`)
    } else if (playerMove === "paper") {
        if (computerMove === "rock") {
        result = "You win";
        }
    
        if (computerMove === "paper") {
        result = "It was a tie";
        }
    
        if (computerMove === "scissors") {
        result = "You lose";
        }
    } else if (playerMove === "scissors") {
        if (computerMove === "rock") {
        result = "You lose";
        }
    
        if (computerMove === "paper") {
        result = "You win";
        }
    
        if (computerMove === "scissors") {
        result = "It was a tie";
        }
    }
    
    if (result === "You win") {
        score.wins += 1;
    } else if (result === "You lose") {
        score.losses += 1;
    } else if (result === "It was a tie") {
        score.ties += 1;
    }
    
    localStorage.setItem("score", JSON.stringify(score));
    
    updateScoreElements();
    
    document.querySelector('.js-result').innerHTML = result;
    document.querySelector('.js-moves').innerHTML = `You 
    <img src="${playerMove}.png" class="result-icon">
    <img src="${computerMove}.png" class="result-icon">
    Computer`;
    
    // alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${result}
    // Wins: ${score.wins}, Losses: ${score.losses}, Ties: ${score.ties}`);
    
    result;
    }
    