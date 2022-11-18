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
let pWager = 1; // $ amount player wagering on current bet

let pWinnings; // $ amount player wins or loses at conclusion of spin
let winningNum; // Random number generated to represent result of wheel spin
let winningPayouts; // Array of all categoies to payout based on winning number spun.
let betWager; // Amount player wagers on current bet ??? maybe redundant ^^check later^^
let pTotalBet; // How much $ the player has accumulated based on pWager and pBets
let pWinningBets = [];

const tableAreaEl = document.querySelector('.table');
const spinBtnEl = document.querySelector('#spin');
const totalEl = document.querySelector('.total');
const chipBtn = document.querySelector('.players-bets');
const totalBetEl = document.querySelector('#bet-total');
const allChipButtons = document.querySelectorAll('.chip');
const allNumButtons = document.querySelectorAll('.num');
const allFiftyFiftyButtons = document.querySelectorAll('.fiftyFifty');
const allThirdsButtons = document.querySelectorAll('.thirds');
const resetBtn = document.querySelector('#reset');
const wheelSpinMessage = document.querySelector('.spinResult');
const winningsAmountMessage = document.querySelector('.winngsResult')

const spinModal = document.getElementById("mySpinModal");
const spinBtn = document.getElementById("spin");
const closeBtnSpin = document.getElementsByClassName("spinExit")[0];

const winningsModal = document.getElementById("myWinningsModal");
const closeBtnWinnings = document.getElementsByClassName("winningsExit");





/*----- event listeners -----*/
tableAreaEl.addEventListener('click', placeBet);
spinBtnEl.addEventListener('click', spinWheel)
chipBtn.addEventListener('click', selectChip)
resetBtn.addEventListener('click', resetBets);




init();
console.log(`^^^^^ WAGER START: $${pWager} ^^^^^`)
/*----- functions -----*/
wheelSpinMessage.innerHTML = (`Num: ${winningNum} WIN:${pWinnings}`);




function init() {
    clearTable();
    rmActiveClassAllBtns();

    
    pCredit = 100;
    pTotalBet = 0;
    winningNum = +'';  // TEMP VALUE FOR TESTING


    
    render();
}

function resetBets(){
    console.log(`------CLEARING BETS--------`);
    console.log(pBets);
    console.log(pTotalBet);
    console.log(pCredit);
    console.log(`^^^^^^^^ pBets ARRAY ^^^^^^^`);
    pCredit += +pTotalBet;
    console.log(`NEW CERDIT:   ${pCredit}`);
    clearTable();
}

function selectChip(e) {
    rmAllClassActive();
    

    e.target.classList.add('active');
    let chipId = e.target.id

    // REMOVE ALL active CLASS
    if (e.target.id.includes('chip')) {
        console.log(`-- CHIP SELECTED: ${e.target.id.replace('chip', '')}`);
        pWager = e.target.id.replace('chip', '');
    } 

    console.log(`***** CHIP SELECTED: $${pWager}-----*****`);
    render();
}

function placeBet(e) {
    console.log("------placeBet------")
    console.log(`-----$${pWager} per click-----`)
    console.log(`---$${pTotalBet} Total ALL bets-----`)
    e.target.classList.add('active');

    let betId = e.target.id;
    
    let betObject ={id: betId, wager: pWager};
    console.log(betObject);    


    NUMBERS.includes(betId) || SIDEBETS.includes(betId)
    ? (pBets.push(betObject)) 
        && (pCredit -= betObject['wager'])
        && addBetToTotal(pWager)      
    : null;
    
    console.log(pBets, "<--pBets Array");
    console.log(pCredit, "<-------pCredit Available");

    
    render();
}




function rmAllClassActive() {
    allChipButtons.forEach((element) => {
        element.classList.remove('active');
        
    })
    render();
}

function rmActiveClassAllBtns () {
    // allChipButtons.forEach((element)=> {
    //     element.classList.remove('active');
    // })
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
}

function addBetToTotal(e) {
    // console.log(pTotalBet, "<--previous total");

    pTotalBet = (pTotalBet*1) + (e*1);
    // console.log(pTotalBet, "<--- NEW total")
    render()

}

function clearTable() {
    pBets = [];
    pWinnings = 0;
    pTotalBet = 0;
    rmActiveClassAllBtns();
    render();
}

function findWinningBets() {
    for (let i = 0; i < WINNERS.length; i++) {

        WINNERS[i]['num'] === winningNum.toString()
        ? winningPayouts = WINNERS[i]['payout']
        : '';
    }
    render();
}

function pBetWon() {

}

function spinWheel() {

    winningNum = Math.floor(Math.random() * NUMBERS.length); // TEMP DISABLED
    render();
    console.log(winningNum, '<-- Winning Number!')

    findWinningBets(winningNum);
    for (let i = 0; i < pBets.length; i++) {
        checkBet = pBets[i]['id'];
        console.log('CHECKING BET#: ', i, 'num = ', checkBet)
        
        if (winningPayouts.includes(checkBet)){
            betWager = pBets[i]['wager'];
            console.log(`Bet in PAYOUT: ${checkBet}  with $${betWager} wager`);

            for (let j = 0; j < PAYOUTS.length; j++) {
                if (PAYOUTS[j]['betType'].includes(checkBet) ) { 
                    // pWinningBets.push({bet: checkBet, betWager})

                    pWinnings = +pWinnings + ((PAYOUTS[j]['payout']) * (+betWager));
 
                    pCredit = +pCredit +pWinnings + +betWager;
                }

            }
            
        } else {
            console.log(`\\\\\\\\\\ not paid //////////`)
            
        }

            }
    
    console.log(`++++++ Player Credit:   $${pCredit}   +++++++`)
    console.log(`\\\\\\\\\\ END LOOPS //////////`)
    clearTable();
    rmActiveClassAllBtns();
    render();

}

spinBtn.onclick = function() {
    spinModal.style.display = "block";   
}

closeBtnSpin.onclick = function () {
    spinModal.style.display = 'none';
    

}
closeBtnWinnings.onclick = function () { 
    winningsModal.style.display = 'none';

}
tableAreaEl.onclick = function(e) {
    e.target == spinBtnEl ? spinModal.style.display ="none" :null;
}




function render() {
    totalEl.innerHTML = (`$ ${pCredit}`);
    totalBetEl.innerHTML = (`$ ${pTotalBet}`);
    
    wheelSpinMessage.innerHTML = winningNum;
    
}

// const spinModal = document.getElementById("mySpinModal");
// const spinBtn = document.getElementById("spin");
// const closeBtnSpin = document.getElementsByClassName("close")[0];

// for (let j = 0; j < PAYOUTS.length; j++) {
//     if (PAYWinnings[j]['betType'].includes(checkBet) ) { 
//         console.log(`BET PAYS: $${betWager} * ${PAYOUTS[j]['payout']} = ${betWager*PAYOUTS[j]['payout']}`);
//         pWinnings = +pWinnings + ((PAYOUTS[j]['payout']) * (+betWager));
//         console.log('---------WINNINGS------------');
//         console.log(`----------${pWinnings}----------`);
//         console.log(`-------------------------------`);   
//         pCredit = +pCredit +pWinnings + +betWager;
//     }


// function placeBet(e) {
//     e.target.classList.add('active');
//     let betId = e.target.id;
//     let betObject;
//     let betWager = pWager;
       
// //checking to make sure where clicked is a bet button
//     if (NUMBERS.includes(betId) || SIDEBETS.includes(betId) ) {
//         betObject ={id: betId, wager: betWager};
//         console.log(betObject); 

//         for (let k = 0; k < pBets.length ; k++) {
//             let checkBetObject = pBets[k];
//             console.log(`pBets[${k}] value <---of ${pBets.length} ------`);
            
            
            
//             if (checkBetObject['id'] === betObject['id']) {
//                 console.log(checkBetObject['id'] === betObject['id'], '---????');
//                 console.log(`ID: ${checkBetObject['id']}  BEFORE wager: ${checkBetObject['id']}`);
//                 checkBetObject['wager'] = +checkBetObject['wager'] + +betWager;
//                 console.log(`AFTER wager: ${checkBetObject['wager']}`);
//                 console.log(`NEW pBets: ${pBets}) !!!!!!!!`); 
//                 break;

//             } else {
                
//                 (k === pBets.length -1 ? pBets.push(betObject)&& console.log(` ^^^^^^ ADDING OBJ TO LIST ^^^^^`) : console.log('nothing') );
                
//             }
//         }

//         (pBets.length === 0 ? pBets.push(betObject): null);

        
//         pCredit -= betObject['wager'];
//         addBetToTotal(pWager);
//     }

            
//     console.log(pBets, "<--pBets Array");
//     console.log(pCredit, "<-------pCredit Available");
//     render();
// } 

               
        

        // if (pBets.length !== 0) {
        //     for (let i = 0; i <pBets.length; i++) {
        //         let checkBet = pBets[i];

        //         for (let id in checkBet) {
        //             if (checkBet[id] === betObject['id']) {
        //                 console.log(` TRUE-->  ${checkBet[id]} === ${betObject['id']}`);
        //                 break;

                    
        //             } else { 
        //                 console.log(` FALSE-->  ${checkBet[id]} === ${betObject['id']}`)};
        //                 pBets.push(betObject)
        //                 break;

        //         };

                // console.log(`CHECKING: ${i} index is ${checkBet}`);
                // console.log(`betOject is: --- ${betObject['id']}`);
                // console.log(`${pBets[i]['id'].includes(betId)} < ---- TRUE or FALSE`)
                
                // if (pBets[i]['id'].includes(betObject['id']) ) {
                //     console.log(`WSDFDSAKJASDKJDSA:JFA:LFJDSL:FAS:KSD":KS`);



                // //     console.log(`wager before: bet:${pBets[i]['id']} wager: ${pBets[i]['wager']}`);
                // //     pBets[i]['wager'] += betObject['wager'];
                // //     console.log(`wager after: bet:${pBets[i]['id']} wager: ${pBets[i]['wager']}`);
                // // } else {
                //     break;
                // } else {
                //     pBets.push(betObject);
                // };
            // }


        

//         pCredit -= betObject['wager'];
//         addBetToTotal(pWager);
//     }

            
//     console.log(pBets, "<--pBets Array");
//     console.log(pCredit, "<-------pCredit Available");
//     render();
// } 
