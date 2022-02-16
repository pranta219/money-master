document.getElementById('button').addEventListener('click', function () {
    const incomeField = document.getElementById('income-field');
    const incomeTk = incomeField.value;

    const foodField = document.getElementById('food-field');
    const foodTk = foodField.value;

    const rentField = document.getElementById('rent-field');
    const rentTk = rentField.value;

    const clothesField = document.getElementById('clothes-field');
    const clothesTk = clothesField.value;
    const treeItem = foodTk + rentTk + clothesTk;
    console.log(treeItem)
})