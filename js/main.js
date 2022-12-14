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
let pCreditLast;
let pWager = 1; // $ amount player wagering on current bet

let pWinnings; // $ amount player wins or loses at conclusion of spin
let winningNum; // Random number generated to represent result of wheel spin
let winningPayouts; // Array of all categoies to payout based on winning number spun.

let pTotalBet; // How much $ the player has accumulated based on pWager and pBets
let pWinningBets;  // Array of objects key:value pairs of all the winning bets on current spin

let currentBet;
let currentId;
let currentWager;
let currentPayoutRate;

const tableAreaEl = document.querySelector('.main');
const spinBtnEl = document.querySelector('#spin');
const totalEl = document.querySelector('.total');
const chipBtn = document.querySelector('.displays');     // CHANGE TO BE MORE SPECIFIC LATER
const totalBetEl = document.querySelector('#bet-total');
const allChipButtons = document.querySelectorAll('.chip'); 
const allNumButtons = document.querySelectorAll('.num');
const allFiftyFiftyButtons = document.querySelectorAll('.fiftyFifty');
const allThirdsButtons = document.querySelectorAll('.thirds');
const resetBtn = document.querySelector('#reset');
const wheelSpinMessage = document.querySelector('.spinResult');
const winMessage = document.querySelector('.win')

const spinModal = document.getElementById("mySpinModal");
const spinBtn = document.getElementById("spin");
const closeBtnSpin = document.getElementsByClassName("spinExit")[0];
const wheelSpinningImgEl = document.getElementById("wheelSpinning");

// const winningsModal = document.getElementById("myWinningsModal");
// const closeBtnWinnings = document.getElementsByClassName("winningsExit");



/*----- event listeners -----*/
tableAreaEl.addEventListener('click', placeBet);
spinBtnEl.addEventListener('click', spinWheel)
chipBtn.addEventListener('click', selectChip)
resetBtn.addEventListener('click', resetBets);

spinBtn.addEventListener('click', function() {
    spinModal.style.display = "block"; 
});

closeBtnSpin.addEventListener('click', function () {
    spinModal.style.display = 'none';
    clearTable();
    render();

});


init();
/*----- functions -----*/


function init() {
    clearTable();
    
    pWinningBets = [];

    pCredit = 100;
    pCreditLast = pCredit;
    pTotalBet = 0;
    winningNum = +'';  // TEMP VALUE FOR TESTING
    render();
};

function resetBets(){
    pCredit += +pTotalBet;
    pCreditLast = pCredit;
    clearTable();
};

function selectChip(e) {
    rmClassActiveChips();
    e.target.classList.add('active');
    let chipId = e.target.id

    if (e.target.id.includes('chip')) {
        pWager = e.target.id.replace('chip', '');
    } 
    render();
};

function placeBet(e) { 
    let eId =e.target.id;
    let eWager = pWager;
    let eRate = findPayout(eId);
    let eObject = {
        id: eId, 
        wager: +eWager, 
        rate: findPayout(eId), 
        total: ((+eWager)*(+eRate))
    };

    if (isValidBet(eId)) {
        addCredit(eWager);
        e.target.classList.add('active');
    } else {
        return 
    };

    if (pBets.length === 0 ) { // IF FIRST bet THIS ALL VERY UNCLEAN
        pBets.push(eObject);

    } else  {                 // Iterate through remaing
        for (let i = 0; i <= pBets.length; i++) {
            if ((i === pBets.length) ) {
                pBets.push(eObject);
                break;
            } else if (pBets[i]['id'] === eId ) {
                pBets[i]['wager'] = +eWager + +pBets[i]['wager'];
                pBets[i]['total'] = +eRate * +pBets[i]['wager'];
                break;
            } 
        } 
    }
    render();
    
};

function rmClassActiveChips() {  // MAY HAVE ISSUE? buttons reset when not supposed to
    allChipButtons.forEach((element) => {
        element.classList.remove('active');
        
    })
    render();
};

function rmActiveClassAllBtns () {
    allFiftyFiftyButtons.forEach((element)=> {
        element.classList.remove('active');
    })
    allThirdsButtons.forEach((element)=> {
        element.classList.remove('active');
    })
    allNumButtons.forEach((element)=> {
        element.classList.remove('active');
    })
    render()
};

function addCredit(wager) {
    pCredit -= wager;
    //return pCredit;
}
function addWinnings(amount) {
    pWinnings += amount;
    //return pWinnings;
}

function clearTable() {
    pBets = [];
    pTotalBet = 0;
    rmActiveClassAllBtns();
    render();
};

function findWinningBetTypes() {
    for (let i = 0; i < WINNERS.length; i++) {

        WINNERS[i]['num'] === winningNum.toString()
        ? winningPayouts = WINNERS[i]['payout']
        : '';
    }
    render();
};

function isValidBet(id) {
    return (NUMBERS.includes(id) || SIDEBETS.includes(id))
}


function findPayout(id) {
    for (let i = 0; i < PAYOUTS.length; i++) {  // find the payout category 35 to 1, 2 to 1, ect. 
        if (PAYOUTS[i]['betType'].includes(id) ) { 
            //    console.log(`CHECKING# ${i} betType: ${PAYOUTS[i]['betType'].includes(id)} id: ${id} -rate: ${PAYOUTS[i]['payout']} <--`);
            return PAYOUTS[i]['payout'];   // the payout rate
        }
    }
};

function findWinningBets() {
    for (let i = 0; i < pBets.length; i++) { //loop through all players bets
        betObject = pBets[i];
        betId = betObject['id'];
        
        if (winningPayouts.includes(betId)){ // check if current bet in loop is a winner by matching win array
            pWinningBets.push(betObject);
        }
    }
    
    render();
    // console.log(`Winning Bets ---> ${pWinningBets}`);
};

function genWinNum() {
    return winningNum = NUMBERS[Math.floor(Math.random() * NUMBERS.length)];   
};

function calcWinnings() {   
    
    let lossGain = 0;
    let totalWinnings = 0;
    let totalCredit = 0;
    for (let i = 0; i < pWinningBets.length; i++) {
        let eBet = pWinningBets[i];
        totalWinnings += +eBet.total;
        totalCredit += +eBet.wager;

        render();
        console.log(`Players wager of $${eBet.wager} on ${eBet.id} WINS $${eBet.total}`)
        // console.log(`totalWinnings: ${totalWinnings}`);
        // console.log(`totalCredit: ${totalCredit}`);    
    }
    pCredit += +totalWinnings + +totalCredit;
    lossGain = pCredit - pCreditLast;
    // console.log(`pCredit BEFORE: ${pCreditLast}`); 
    // console.log(`pCredit AFTER: ${pCredit}`);  
    console.log(`TOTAL Gain/Loss: ${lossGain}`); 
    clearTable(); 
    
}

function spinWheel() {
    pWinnings = 0;
    findWinningBetTypes( genWinNum() );

    findWinningBets();

    calcWinnings();


    render();
};

function render() {
    totalEl.innerHTML = (`$ ${pCredit}`);
    totalBetEl.innerHTML = (`$ ${pTotalBet}`);
    
    wheelSpinMessage.innerHTML = winningNum;
    winMessage.innerHTML = (`WIN: $${pWinnings}`)
};
