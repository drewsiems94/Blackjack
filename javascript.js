
const potDisplay = document.getElementById('potDisplay');
const pot = document.getElementById('pot');
const hit = document.getElementById('hit');
const stay = document.getElementById('stay');
const play = document.getElementById('play');
const form = document.querySelector('form');
const pEarnings = document.getElementById('pEarnings');
const cEarnings = document.getElementById('cEarnings');

let playerCards = [];
let computerCards = [];
let deck = [];
let potTotal = 0;
let playerTotal = 0;
let computerTotal = 0;
let computerSum = 0;
let playerWinnings = 0;
let computerWinnings = 0;

hit.disabled = true;
stay.disabled = true;
play.disabled = true;

function buildDeck() {
    let values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
    let suits = ["\u2660", "\u2665", "\u2666", "\u2663"];
    let deck = [];
    for (i = 0; i < values.length; i++) {
        for (j = 0; j < suits.length; j++) {
            if (values[i] == "A") {
                let card = {value: values[i], suit: suits[j], weight: 1};
                deck.push(card);
            } else if (values[i] == "J" || values[i] == "Q" || values[i] == "K") {
                let card = {value: values[i], suit: suits[j], weight: 10};
                deck.push(card)
            } else {
                let card = {value: values[i], suit: suits[j], weight: parseInt(values[i])};
                deck.push(card);
            }
        }
    }
    return deck;
}

//When the user enters a bet and presses enter, display the pot and deal the cards
pot.addEventListener('keypress', function (e) {
    if (e.code === "Enter") {
        e.preventDefault();
        e.stopPropagation();
        potTotal = Number(e.target.value) * 2;
        form.style.display = "none";
        pot.disabled = true;
        potDisplay.setAttribute('style', 'font-family: Georgia, "Times New Roman", Times, serif; font-size: 30px;');
        potDisplay.innerHTML = `The pot is $${potTotal}`;
        deck = buildDeck();
        shuffle(deck);
        dealCards();
    }
})

//When the user hits the "hit" button, deal a new card
let x = 2;
hit.addEventListener('click', function hitPlayer () {
    playerCards[x] = deck[deck.length - 1];
    const pCard1 = document.getElementById('pCard1');
    deck.pop();
    const newDiv = document.createElement("div");
    newDiv.className = "displayCards";
    newDiv.setAttribute('id', `pCard${x + 1}`);
    newDiv.setAttribute('style', 'background: white; height: 150px; width: 100px;');
    bottomCards.appendChild(newDiv);
    newDiv.innerHTML = `${playerCards[x].value}` + " " + `${playerCards[x].suit}`;
    ++x;
});

//When the user decides to stay, run the computer's strategy
//Will hit until 17
let k = 2;
stay.addEventListener('click', function computerPlay () {
    hit.disabled = true;
    stay.disabled = true;
    computerSum = computerCards[0].weight + computerCards[1].weight;
    while (computerSum < 17) {
        if (computerCards[0].weight == 1 && computerCards[1].weight == 1) {
            computerCards[k] = deck[deck.length - 1];
            deck.pop();
            computerSum = computerSum + computerCards[k].weight;
            const newDiv = document.createElement("div");
            newDiv.className = "displayCards";
            newDiv.setAttribute('id', `cCard${k + 1}`);
            newDiv.setAttribute('style', 'background: white; height: 150px; width: 100px;');
            topCards.appendChild(newDiv);
            newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
            ++k;
        } else if (computerCards[0].weight == 1) {
            if (computerCards[1].weight + 1 < 17 && computerCards[1].weight + 11 < 17) {
                computerCards[k] = deck[deck.length - 1];
                deck.pop();
                computerSum = computerSum + computerCards[k].weight;
                const newDiv = document.createElement("div");
                newDiv.className = "displayCards";
                newDiv.setAttribute('id', `cCard${k + 1}`);
                newDiv.setAttribute('style', 'background: white; height: 150px; width: 100px;');
                topCards.appendChild(newDiv);
                newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
                ++k;
            } else {
                break;
            }
        } else if (computerCards[1].weight == 1) {
            if (computerCards[0].weight + 1 < 17 && computerCards[0].weight + 11 < 17) {
                computerCards[k] = deck[deck.length - 1];
                deck.pop();
                computerSum = computerSum + computerCards[k].weight;
                const newDiv = document.createElement("div");
                newDiv.className = "displayCards";
                newDiv.setAttribute('id', `cCard${k + 1}`);
                newDiv.setAttribute('style', 'background: white; height: 150px; width: 100px;');
                topCards.appendChild(newDiv);
                newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
                ++k;
            } else {
                break;
            }
        } else {
            computerCards[k] = deck[deck.length - 1];
            deck.pop();
            computerSum = computerSum + computerCards[k].weight;
            const newDiv = document.createElement("div");
            newDiv.className = "displayCards";
            newDiv.setAttribute('id', `cCard${k + 1}`);
            newDiv.setAttribute('style', 'background: white; height: 150px; width: 100px;');
            topCards.appendChild(newDiv);
            newDiv.innerHTML = `${computerCards[k].value}` + " " + `${computerCards[k].suit}`;
            ++k;
        }
    }
    console.log(playerCards);
    console.log(computerCards);
    checkWinner(playerCards, computerCards);
    play.disabled = false;
})

play.addEventListener('click', function newRound () {
    const topCards = document.querySelector('#topCards');
    const bottomCards = document.querySelector('#bottomCards');
    removeAllChildNodes(topCards);
    removeAllChildNodes(bottomCards);
    playerCards = [];
    computerCards = [];
    playerTotal = 0;
    computerTotal = 0;
    potTotal = 0;
    x = 2;
    k = 2;
    potDisplay.setAttribute('style', 'font-family: Georgia, "Times New Roman", Times, serif; font-size: 30px;');
    potDisplay.innerHTML = `The pot is $${potTotal}`;
    form.style.display = "";
    pot.disabled = false;
    play.disabled = true;
});

function dealCards() {
    playerCards[0] = deck[deck.length - 1];
    const newDiv = document.createElement("div");
    newDiv.className = "displayCards";
    newDiv.setAttribute('id', `pCard1`);
    newDiv.setAttribute('style', 'background: white; height: 150px; width: 100px;');
    bottomCards.appendChild(newDiv);
    newDiv.innerHTML = `${playerCards[0].value}` + " " + `${playerCards[0].suit}`;
    deck.pop();
    
    computerCards[0] = deck[deck.length - 1];
    const newDiv1 = document.createElement("div");
    newDiv1.className = "displayCards";
    newDiv1.setAttribute('id', `cCard1`);
    newDiv1.setAttribute('style', 'background: white; height: 150px; width: 100px;');
    topCards.appendChild(newDiv1);
    newDiv1.innerHTML = `${computerCards[0].value}` + " " + `${computerCards[0].suit}`;
    deck.pop();

    playerCards[1] = deck[deck.length - 1]; 
    const newDiv2 = document.createElement("div");
    newDiv2.className = "displayCards";
    newDiv2.setAttribute('id', `pCard1`);
    newDiv2.setAttribute('style', 'background: white; height: 150px; width: 100px;');
    bottomCards.appendChild(newDiv2);
    newDiv2.innerHTML = `${playerCards[1].value}` + " " + `${playerCards[1].suit}`;
    deck.pop(); 

    computerCards[1] = deck[deck.length - 1];
    const newDiv3 = document.createElement("div");
    newDiv3.className = "displayCards";
    newDiv3.setAttribute('id', `cCard2`);
    newDiv3.setAttribute('style', 'background: white; height: 150px; width: 100px;');
    topCards.appendChild(newDiv3);
    newDiv3.innerHTML = `${computerCards[1].value}` + " " + `${computerCards[1].suit}`;
    deck.pop();

    hit.disabled = false;
    stay.disabled = false;
}

function checkWinner(player, computer) {
    const ace = (card) => card.weight == 1;
    if (!playerCards.some(ace)) {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].weight;
        }
    } else {
        for (n = 0; n < playerCards.length; n++) {
            playerTotal = playerTotal + playerCards[n].weight;
        }
        let highTotal = (playerTotal - 1) + 11;
        if (highTotal <= 21) {
            playerTotal = highTotal
        } 
    }
    if (!computerCards.some(ace)) {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].weight;
        }
    } else {
        for (n = 0; n < computerCards.length; n++) {
            computerTotal = computerTotal + computerCards[n].weight;
        }
        let highTotal = (computerTotal - 1) + 11;
        if (highTotal <= 21) {
            computerTotal = highTotal
        } 
    }
    if (computerTotal == playerTotal) {
        playerWinnings = playerWinnings + (potTotal / 2);
        computerWinnings = computerWinnings + (potTotal / 2);
        pEarnings.textContent = `Your earnings: $${playerWinnings}`;
        cEarnings.textContent = `Computer earnings: $${computerWinnings}`;
        potDisplay.innerHTML = `It is a tie.`;
    } else if (computerTotal > 21 && playerTotal > 21) {
        playerWinnings = playerWinnings + (potTotal / 2);
        computerWinnings = computerWinnings + (potTotal / 2);
        pEarnings.textContent = `Your earnings: $${playerWinnings}`;
        cEarnings.textContent = `Computer earnings: $${computerWinnings}`;
        potDisplay.innerHTML = `It is a tie.`;
    } else if (playerTotal <= 21 && computerTotal > 21) {
        playerWinnings = potTotal + playerWinnings;
        pEarnings.textContent = `Your earnings: $${playerWinnings}`;
        potDisplay.innerHTML = `You win!`;
    } else if (playerTotal > 21 && computerTotal <= 21) {
        computerWinnings = computerWinnings + potTotal;
        cEarnings.textContent = `Computer earnings: $${computerWinnings}`;
        potDisplay.innerHTML = `You lose.`;
    } else if (playerTotal <= 21 && computerTotal <= 21 && playerTotal > computerTotal) {
        playerWinnings = potTotal + playerWinnings;
        pEarnings.textContent = `Your earnings: $${playerWinnings}`;
        potDisplay.innerHTML = `You win!`;
    } else {
        computerWinnings = computerWinnings + potTotal;
        cEarnings.textContent = `Computer earnings: $${computerWinnings}`;
        potDisplay.innerHTML = `You lose.`;
    }
}

function shuffle(arr) {
    for (i = 0; i < 500; i++) {
        let position1 = Math.floor(Math.random() * 52);
        let position2 = Math.floor(Math.random() * 52);
        let placeHolder = arr[position1];

        arr[position1] = arr[position2];
        arr[position2] = placeHolder;
    }
    return arr;
}

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}