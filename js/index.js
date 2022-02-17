// function calling
function inputValue(id) {
    const input = document.getElementById(id)
    return input
}

// calulate button
inputValue('button').addEventListener('click', function () {
    const incomeText = inputValue('income-field');
    const incomeAmount = incomeText.value;

    const foodText = inputValue('food-field');
    const foodAmount = foodText.value;

    const rentText = inputValue('rent-field');
    const rentAmount = rentText.value;

    const clothesText = inputValue('clothes-field');
    const clothesAmount = clothesText.value;

    const expenses = parseFloat(foodAmount) + parseFloat(rentAmount) + parseFloat(clothesAmount)

    const newExpenses = inputValue('expenses')


    const totalBalance = incomeAmount - expenses;
    if (expenses <= incomeAmount) {
        newExpenses.innerText = expenses;
        inputValue('total-amount').innerText = totalBalance;
    } else {
        inputValue('expenses-error').innerText = '❌Expenses Can\'t Be Begger then Income'
    }


})

// save button handeler
inputValue('save-btn').addEventListener('click', function () {
    const income = inputValue('income-field').value;
    const balance = inputValue('total-amount').innerText;
    const persenteceInput = inputValue('save-field').value;
    const persentValue = (persenteceInput / 100);
    const savingAmount = income * persentValue;
    const remainingBalance = balance - savingAmount;

    if (balance >= savingAmount) {
        inputValue('saving-amount').innerText = savingAmount
        inputValue('remaining-balance').innerText = remainingBalance
    } else {

        inputValue('saving-error').innerText = '❌Please Insart a Valid Persent'
    }

})
