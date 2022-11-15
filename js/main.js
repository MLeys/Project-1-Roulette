/*----- constants -----*/

const CHIP = [1, 5, 10]; // Chip amount (1, 5, or 10) per bet;
const NUMBERS = ['0','00',
                '1','2','3','4','5','6','7','8','9','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30',
                '31','32','33','34','35','36'];

const SIDEBETS = ['first12','second12','third12',
                'first18','second18', 'even', 'odd', 'red', 'black',
                'col1', 'col2', 'col3'];

const PAYOUTS =[
    {type: 'num', payout: 35},
    {type: 'fiftyFifty', payout: 1},
    {type: 'thirds', payout: 2}];

const win1 = ['1', 'red', 'odd', 'col1', 'first12', 'first18',]
const win2 = [];

// OR do i create object-> key:values for the NUMBERS list?
const BETS = [
    {betType: ['0','00','1','2','3','4','5','6','7','8','9','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30',
                '31','32','33','34','35','36'],
    payout: 35},
    {betType: [ 'first18','second18', 'even', 'odd', 'red', 'black'],
    payout: 1},
    {betType: ['first12','second12','third12', 'col1', 'col2', 'col3'],
    payout: 2}
]
 












/*----- app's state (variables) -----*/
let pBets; // Players bets - as an object with changing key:value pairs 
let pCredit; // Players available credit for which to gamble or play the game
let pWager; // $ amount player wagering on current bet

let winnings; // $ amount player wins or looses at conclusion of spin
let winningNum; // Random number generated to represent result of wheel spin




/*----- cached element references -----*/
// const spinEl = document.querySelector('#spin');
// const evenNums = document.querySelectorAll('.even');
// const oddNums = document.querySelector('#odd');
// const blackHalf = document.querySelector('#black');
// const redHalf = document.querySelector('#red');
// const firstHalf = document.querySelector('#bet-1-18');
// const secondHalf = document.querySelector('#bet-19-36');
const tableAreaEl = document.querySelector('.table')


/*----- event listeners -----*/
tableAreaEl.addEventListener('click', placeBet);
// evenNums.addEventListener('click', placeBet);
// oddEl.addEventListener('click', placeBet);
// blackEl.addEventListener('click', placeBet);
// redEl.addEventListener('click', placeBet);
// firstHalfEl.addEventListener('click', placeBet);
// secondHalfEl.addEventListener('click', placeBet);


// const chipSelect = addEventListener('click', selectChip);


init();
console.log(spinWheel());
/*----- functions -----*/
function availCredit() {
    pCredit = pCredit - (pWager)
}


function placeBet(e) {
    console.log("------placeBet------")

    let betId = e.bet.id;
    
    let betObject ={id: betId, wager: CHIP[0]};
    console.log(betObject);    


    NUMBERS.includes(betId)
        || SIDEBETS.includes(betId)
    ? (pBets.push(betObject)) 
        && (pCredit -= betObject['wager']) 
        : null;
    
    console.log(pBets, "<--pBets Array")
    console.log(pCredit, "<--pCredit Available")
}

function init() {
    pBets = [];
    pCredit = 100;
}

function spinWheel() {
    let randNum = Math.floor(Math.random() * NUMBERS.length);
    return randNum;
}

function render() {

}