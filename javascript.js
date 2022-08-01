let playerCards = [];
let computerCards = [];

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
    //console.log(playerCards[0].value);
    //console.log(playerCards[1]);

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
dealCards();