
document.body.style.background = "linear-gradient(to left, aqua, purple)";

document.querySelector('.btn1').innerText = '+ 1 for Player 1';
document.querySelector('.btn2').innerText = '+ 1 for Player 2';
document.querySelector('.btn3').innerText = 'RESET';
// /**************************************************************************/

document.getElementById('score').addEventListener('input', function(){
    const value = this.value;
    if (value < 3 || value > 10){
        alert('Score must be beetween 3 and 10');
        this.value = '';
    }
});
// /**************************************************************************/

const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const firstButton = document.querySelector('.first');
const secondButton = document.querySelector('.second');
const scoreInput = document.getElementById('score');



scoreInput.style.width = '150px';
scoreInput.style.height = '20px';
scoreInput.style.background = "linear-gradient(to right, aqua, purple)";

firstButton.style.width = '50px';
firstButton.style.height = '50px';
firstButton.style.background = "linear-gradient(to right, aqua, purple)";
secondButton.style.width = '50px';
secondButton.style.height = '50px';
secondButton.style.background = "linear-gradient(to right, aqua, purple)";

btn1.style.width = '150px';
btn2.style.width = '150px';
btn3.style.width = '150px';
btn1.style.height = '50px';
btn2.style.height = '50px';
btn3.style.height = '50px';
btn1.style.background = "linear-gradient(to right, aqua, purple)";
btn2.style.background = "linear-gradient(to right, aqua, purple)";
btn3.style.background = "linear-gradient(to right, aqua, purple)";
btn1.style.fontWeight = "bold";
btn2.style.fontWeight = "bold";
btn3.style.fontWeight = "bold";


btn1.innerText = '+ 1 for Player 1';
btn2.innerText = '+ 1 for Player 2';
btn3.innerText = 'RESET';

function increaseScore(button) {
    let currentValue = parseInt(button.innerText) || 0;
    button.innerText = currentValue + 1;
    checkWinner();
}

function checkWinner() {
    const winScore = parseInt(scoreInput.value, 10);
    const score1 = parseInt(firstButton.innerText, 10);
    const score2 = parseInt(secondButton.innerText, 10);

    if (score1 === winScore || score2 === winScore) {
        setTimeout(function() { 
            alert(`Player ${score1 === winScore ? '1' : '2'} wins!`);
            disableButtons(true);
        }, 100); 
    }
}

btn1.addEventListener('click', function(){
    let currentValue = parseInt(firstButton.innerText) || 0;
    firstButton.innerText = currentValue + 1;
    checkWinner();
});

btn2.addEventListener('click', function(){
    let currentValue = parseInt(secondButton.innerText) || 0;
    secondButton.innerText = currentValue + 1;
    checkWinner();
});

btn3.addEventListener('click', function(){
    firstButton.innerText = '0';
    secondButton.innerText = '0';
    scoreInput.value = '';
    btn1.disabled = false;
    btn2.disabled = false;
    btn3.disabled = false;
});
/**************************************************************************/

const scoreLabel = document.querySelector('label[for="score"]');
scoreLabel.style.fontWeight = 'bold';









