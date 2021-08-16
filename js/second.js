// deposit your ammount 
const button = document.getElementById('deposit-btn');

button.addEventListener('click',function(){
    const input = document.getElementById('deposit-input');
    
    const inputValueText = input.value;

    // convert input text to number 
    const inputValueNumber = parseFloat(inputValueText);
    
    const deposit = document.getElementById('deposit-display');

    const depositDisplayText = deposit.innerText;

    // convert text to number 
    const depositDisplayNumber = parseFloat(depositDisplayText);

    // summation of amount sum = sum + 0 
    deposit.innerText = depositDisplayNumber + inputValueNumber;

    // --------------------------------- 

    // display balance amount 
    const balance = document.getElementById('balance-display');

    const balanceText = balance.innerText;
    // convert text to number 
    const balanceNumber = parseFloat(balanceText);

    // summation of deposit and balance 
    balance.innerText = balanceNumber + inputValueNumber;
    
    input.value = '';
});


// withdraw your ammount 
const button2 = document.getElementById('withdraw-btn');

button2.addEventListener('click',function(){
    const withdraw = document.getElementById('withdraw-input');
    
    const withdrawText = withdraw.value;

    // convert input text to number 
    const withdrawNumber = parseFloat(withdrawText);
    
    const withdrawDisplay = document.getElementById('withdraw-display');

    const withdrawDisplayText = withdrawDisplay.innerText;

    // convert text to number 
    const withdrawDisplayNumber = parseFloat(withdrawDisplayText);

    // summation of amount sum = sum + 0 
    withdrawDisplay.innerText = withdrawDisplayNumber + withdrawNumber;

    // --------------------------------- 

    // display balance amount 
    const balance = document.getElementById('balance-display');

    const balanceText = balance.innerText;
    // convert text to number 
    const balanceNumber = parseFloat(balanceText);

    // summation of deposit and balance 
    balance.innerText = balanceNumber - withdrawNumber;
    
    withdraw.value = '';
});