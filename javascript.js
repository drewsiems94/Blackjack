let playerCards = [];
let computerCards = [];
let pot = 0;
let playerTotal = 0;
let computerTotal = 0;

function placeBet() {
    pot = prompt("How much would you like to bet? $");
    pot = Number(pot) * 2; 
}

function dealCards() {

    for (i = 0; i < 4; i++) {
        if (i == 0) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            playerCards[0] = {value: number, suite: suite};
        } else if (i == 1) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            computerCards[0] = {value: number, suite: suite};
        } else if (i == 2) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            playerCards[1] = {value: number, suite: suite};
        } else {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            computerCards[1] = {value: number, suite: suite};
        }
    }

    let hit = prompt("Do you want to hit? Y/N: ");
    let j = 2;
    while (hit == "Y") {
        let number = Math.floor((Math.random() * 10) + 1);
        let suite = Math.floor((Math.random() * 4) + 1);
        playerCards[j] = {value: number, suite: suite};
        ++j;
        hit = prompt("Do you want to hit again? Y/N: ");
    }

    let computerSum = computerCards[0].value + computerCards[1].value;
    let k = 2;
    while (computerSum < 17) {
        if (computerCards[0].value == 1 && computerCards[1].value == 1) {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            computerCards[k] = {value: number, suite: suite};
            computerSum = computerSum + computerCards[k].value;
            ++k;
        } else if (computerCards[0].value == 1) {
            if (computerCards[1].value + 1 < 17 && computerCards[1].value + 11 < 17) {
                let number = Math.floor((Math.random() * 10) + 1);
                let suite = Math.floor((Math.random() * 4) + 1);
                computerCards[k] = {value: number, suite: suite};
                computerSum = computerSum + computerCards[k].value;
                ++k;
            } else {
                break;
            }
        } else if (computerCards[1].value == 1) {
            if (computerCards[0].value + 1 < 17 && computerCards[0].value + 11 < 17) {
                let number = Math.floor((Math.random() * 10) + 1);
                let suite = Math.floor((Math.random() * 4) + 1);
                computerCards[k] = {value: number, suite: suite};
                computerSum = computerSum + computerCards[k].value;
                ++k;
            } else {
                break;
            }
        } else {
            let number = Math.floor((Math.random() * 10) + 1);
            let suite = Math.floor((Math.random() * 4) + 1);
            computerCards[k] = {value: number, suite: suite};
            computerSum = computerSum + computerCards[k].value;
            ++k;
        }
    }

}

function checkWinner(player, computer) {
    const ace = (card) => card.value == 1;
    if (!playerCards.some(ace)) {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].value;
        }
    } else {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].value;
        }
        let highTotal = (playerTotal - 1) + 11;
        if (hightTotal <= 21) {
            playerTotal = highTotal
        } 
    }
    if (!computerCards.some(ace)) {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].value;
        }
    } else {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].value;
        }
        let highTotal = (computerTotal - 1) + 11;
        if (highTotal <= 21) {
            computerTotal = highTotal
        } 
    }
    
    if (computerTotal = playerTotal) {
        return "It is a tie.";
    } else if (computerTotal > 21 && playerTotal > 21) {
        return "It is a tie.";
    } else if (playerTotal <= 21 && computerTotal > 21) {
        return "You win!";
    } else if (playerTotal > 21 && computerTotal <= 21) {
        return "You lose.";
    } else if (playerTotal <= 21 && computerTotal <= 21 && playerTotal > computerTotal) {
        return "You win!";
    } else {
        return "You lose.";
    }
}

dealCards();
checkWinner(playerCards, computerCards);