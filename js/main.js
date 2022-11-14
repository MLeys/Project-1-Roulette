/*----- constants -----*/

const chip = [1, 5, 10]; // Chip amount (1, 5, or 10) per bet;













/*----- app's state (variables) -----*/
let pBets; // Players bets - as an object with changing key:value pairs 
let pCredit; // Players available credit for which to gamble or play the game
let pResult; // $ amount player wins or looses at conclusion of spin

let winningNum; // Random number generated to represent result of wheel spin




/*----- cached element references -----*/
const chipEl = document.querySelectorAll('.chip');
const spinEl = document.querySelector('#spin');
const num1 = document.querySelector('#1');



/*----- event listeners -----*/
const betSelect = addEventListener('click', placeBet);
const chipSelect = addEventListener('click', selectChip);



/*----- functions -----*/
function placeBet(e) {
    const betSectionClicked = e.target;
}


function init() {

}


function render() {

}