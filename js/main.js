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


const PAYOUTS = [
    {betType: ['0','00','1','2','3','4','5','6','7','8','9','10',
                '11','12','13','14','15','16','17','18','19','20',
                '21','22','23','24','25','26','27','28','29','30',
                '31','32','33','34','35','36'],
    payout: 35},
    {betType: [ 'first18','second18', 'even', 'odd', 'red', 'black'],
    payout: 1},
    {betType: ['first12','second12','third12', 'col1', 'col2', 'col3'],
    payout: 2}
];
 
const WINNERS = [
    {num: '0', payout: ['0']},
    {num: '00', payout: ['00']},
    {num: '1', payout: ['1', 'red', 'odd', 'first12', 'col1', 'first18']},
    {num: '2', payout: ['2', 'black', 'even', 'first12', 'col2', 'first18']},
    {num: '3', payout: ['3', 'red', 'odd', 'first12', 'col3', 'first18']},
    {num: '4', payout: ['4', 'black', 'even', 'first12', 'col1', 'first18']},
    {num: '5', payout: ['5', 'red', 'odd', 'first12', 'col2', 'first18']},
    {num: '6', payout: ['6', 'black', 'even', 'first12', 'col3', 'first18']},
    {num: '7', payout: ['7', 'red', 'odd', 'first12', 'col1', 'first18']},
    {num: '8', payout: ['8', 'black', 'even', 'first12', 'col2', 'first18']},
    {num: '9', payout: ['9', 'red', 'odd', 'first12', 'col3', 'first18']},
    {num: '10', payout: ['10', 'black', 'even', 'first12', 'col1', 'first18']},
    {num: '11', payout: ['11', 'black', 'odd', 'first12', 'col2', 'first18']},
    {num: '12', payout: ['12', 'red', 'even', 'first12', 'col3', 'first18']},
    {num: '13', payout: ['13', 'black', 'odd', 'second12', 'col1', 'first18']},
    {num: '14', payout: ['14', 'red', 'even', 'second12', 'col2', 'first18']},
    {num: '15', payout: ['15', 'black', 'odd', 'second12', 'col3', 'first18']},
    {num: '16', payout: ['16', 'red', 'even', 'second12', 'col1', 'first18']},
    {num: '17', payout: ['17', 'black', 'odd', 'second12', 'col2', 'first18']},
    {num: '18', payout: ['18', 'red', 'even', 'second12', 'col3', 'first18']},
    {num: '19', payout: ['19', 'black', 'odd', 'second12', 'col1', 'second18']},
    {num: '20', payout: ['20', 'black', 'even', 'second12', 'col2', 'second18']},
    {num: '21', payout: ['21', 'red', 'odd', 'second12', 'col3', 'second18']},
    {num: '22', payout: ['22', 'black', 'even', 'second12', 'col1', 'second18']},
    {num: '23', payout: ['23', 'red', 'odd', 'second12', 'col2', 'second18']},
    {num: '24', payout: ['24', 'black', 'even', 'second12', 'col3', 'second18']},
    {num: '25', payout: ['25', 'red', 'odd', 'third12', 'col1', 'second18']},
    {num: '26', payout: ['26', 'black', 'even', 'third12', 'col2', 'second18']},
    {num: '27', payout: ['27', 'red', 'odd', 'third12', 'col3', 'second18']},
    {num: '28', payout: ['28', 'black', 'even', 'third12', 'col3', 'second18']},
    {num: '29', payout: ['29', 'black', 'odd', 'third12', 'col1', 'second18']},
    {num: '30', payout: ['30', 'red', 'even', 'third12', 'col2', 'second18']},
    {num: '31', payout: ['31', 'black', 'odd', 'third12', 'col3', 'second18']},
    {num: '32', payout: ['32', 'red', 'even', 'third12', 'col1', 'second18']},
    {num: '33', payout: ['33', 'black', 'odd', 'third12', 'col2', 'second18']},
    {num: '34', payout: ['34', 'red', 'even', 'third12', 'col3', 'second18']},
    {num: '35', payout: ['35', 'black', 'odd', 'third12', 'col1', 'second18']},
    {num: '36', payout: ['36', 'red', 'even', 'third12', 'col2', 'second18']},
]





/*----- app's state (variables) -----*/
let pBets; // Players bets - as an object with changing key:value pairs 
let pCredit; // Players available credit for which to gamble or play the game
let pWager; // $ amount player wagering on current bet

let winnings; // $ amount player wins or looses at conclusion of spin
let winningNum; // Random number generated to represent result of wheel spin
let winningPayouts; // Array of all categoies to payout based on winning number spun.
let betMultiplyer;
let betWager;


const tableAreaEl = document.querySelector('.table');
const spinBtnEl = document.querySelector('#spin');


/*----- event listeners -----*/
tableAreaEl.addEventListener('click', placeBet);
spinBtnEl.addEventListener('click', spinWheel)


init();

/*----- functions -----*/

function init() {
    pBets = [];
    pCredit = 100;
    winningNum = 20;
    winnings = 0;
}




function availCredit() {
    pCredit = pCredit - (pWager)
}


function placeBet(e) {
    console.log("------placeBet------")

    let betId = e.target.id;
    
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



function findWinner() {
    for (let i = 0; i < WINNERS.length; i++) {

        WINNERS[i]['num'] === winningNum.toString()
        ? winningPayouts = WINNERS[i]['payout']
        : '';
    }
}




function spinWheel() {

    // winningNum = Math.floor(Math.random() * NUMBERS.length); // TEMP DISABLED
    console.log(winningNum, '<-- Winning Number!')
    // loop through bets against winning number
    findWinner(winningNum);
    let multiplyer;

    for (let i = 0; i < pBets.length; i++) {
        checkBet = pBets[i]['id'];
        console.log('CHECKING BET#: ', i, 'num = ', checkBet)
        
        if (winningPayouts.includes(checkBet)){
            betWager = pBets[i]['wager'];
            console.log('-----BET in winningPayouts-------WAGER: ', betWager)

            for (let j = 0; j < PAYOUTS.length; j++) {
                PAYOUTS[j]['betType'].includes(checkBet) 
                    // ? betMultiplyer = PAYOUTS[j]['payout']
                    ? console.log(`Wager: ${betWager} * ${PAYOUTS[j]['payout']} multiplyer`)
                        && console.log(`Result: ${betWager*PAYOUTS[j]['payout']}`)
                    
                        
                        && (winnings += (PAYOUTS[j]['payout'] * betWager))
                        && console.log('---------WINNINGS------------')
                        && console.log(`----------${winnings}----------`)
                    : '';
            }
        } else {
            winnings += 0;
            
        }
    }
    console.log(winnings, '<--WINNINGS!')

}

function render() {

}