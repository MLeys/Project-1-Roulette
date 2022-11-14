/*----- constants -----*/

const CHIP = [1, 5, 10]; // Chip amount (1, 5, or 10) per bet;
const NUMBERS = [1,2,3,4,5,6,7,8,9,10,
                11,12,13,14,15,16,17,18,19,20,
                21,22,23,24,25,26,27,28,29,30,
                31,32,33,34,35,36]

const SIDEBETS = ['1-12','13-24','25-26',
                '18-','19+', 'even', 'odd', 'red', 'black',
                'col1', 'col2', 'col3'];












/*----- app's state (variables) -----*/
let pBets; // Players bets - as an object with changing key:value pairs 
let pCredit; // Players available credit for which to gamble or play the game
let pWager; // $ amount player wagering on current bet

let winnings; // $ amount player wins or looses at conclusion of spin
let winningNum; // Random number generated to represent result of wheel spin




/*----- cached element references -----*/
const chipEl = document.querySelectorAll('.chip');
const spinEl = document.querySelector('#spin');

const even = document.querySelector('#bet-even');
const odd = document.querySelector('#bet-odd');
const black = document.querySelector('#bet-black');
const red = document.querySelector('#bet-red');
const firstHalf = document.querySelector('#bet-1-18');
const secondHalf = document.querySelector('#bet-19-36');

const num1 = document.querySelector('#bet-1');

/*----- event listeners -----*/
const betSelect = addEventListener('click', placeBet);
const chipSelect = addEventListener('click', selectChip);



/*----- functions -----*/
function availCredit() {
    pCredit = pCredit - (pWager)
}


function placeBet(e) {
    const activeEl = e.target;
   
}


function init() {
    


}


function render() {

}