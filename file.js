// converting text to number

function inputField(convertToNumber) {
    const input = document.getElementById(convertToNumber);

    const inputText = input.value;
    const inputNumber = parseFloat(inputText);

    return inputNumber
}

// total expenses

function expenseTotal(expensesFood, expensesRent, expensesClothes) {

    const totalExpenses = document.getElementById('total-expenses');



    const totalExpensesAmount = expensesFood + expensesRent + expensesClothes;



    totalExpenses.innerText = totalExpensesAmount;
    return totalExpensesAmount;

}


document.getElementById('calculate').addEventListener('click', function () {

    const textToNumberFood = inputField('food');
    const textToNumberRent = inputField('rent');
    const textToNumberClothes = inputField('clothes');


    const totalResultExpenses = expenseTotal(textToNumberFood, textToNumberRent, textToNumberClothes);

    const totalIncomeInput = document.getElementById('input-income');
    const totalIncomeInputText = totalIncomeInput.value;
    const totalIncomeInputAmount = parseFloat(totalIncomeInputText);

    if (totalResultExpenses < totalIncomeInputAmount) {

        document.getElementById('expense-less').style.display = 'none';

        const balance = totalIncomeInputAmount - totalResultExpenses;

        const displayBalance = document.getElementById('balance-display');
        displayBalance.innerText = balance
    }

    else {

        document.getElementById('expense-less').style.display = 'block';

        const displayBalance = document.getElementById('balance-display');
        displayBalance.innerText = '0'

        const totalExpensess = document.getElementById('total-expenses');
        totalExpensess.innerText = '0'

    }







})



document.getElementById('save-button').addEventListener('click', function () {
    // console.log('clicked');

    const saveFromTotalInput = document.getElementById('save').value;
    const saveFromTotalInputAmount = parseFloat(saveFromTotalInput);

    const totalIncome = document.getElementById('input-income');
    const incomeInText = totalIncome.value;
    const incomeAmount = parseFloat(incomeInText);

    const displayBalanceCollected = document.getElementById('balance-display');
    const displayBalanceCollectedText = displayBalanceCollected.innerText;
    const displayBalanceCollectedNumber = parseFloat(displayBalanceCollectedText);


    if (displayBalanceCollectedNumber > 0) {
        document.getElementById('not-enough').style.display = 'none'
        const totalSavings = incomeAmount * (saveFromTotalInputAmount / 100);
        if (totalSavings <= displayBalanceCollectedNumber) {
            const displaySavings = document.getElementById('saving-display');
            displaySavings.innerText = totalSavings;

            const totalRemainingBalance = displayBalanceCollectedNumber - totalSavings;
            const totalRemainingBalanceDisplay = document.getElementById('remaining-display');

            totalRemainingBalanceDisplay.innerText = totalRemainingBalance

        }
        else {
            document.getElementById('not-enough').style.display = 'block'

            const totalRemainingBalanceDisplay = document.getElementById('remaining-display');
            totalRemainingBalanceDisplay.innerText = '0';
            const displaySavings = document.getElementById('saving-display');
            displaySavings.innerText = '0';
        }


    }

    else {
        document.getElementById('not-enough').style.display = 'block'

        const totalRemainingBalanceDisplay = document.getElementById('remaining-display');
        totalRemainingBalanceDisplay.innerText = '0';
        const displaySavings = document.getElementById('saving-display');
        displaySavings.innerText = '0';

    }

})