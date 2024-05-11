let income = 0;
let expenses = [];

function setIncome(event) {
    event.preventDefault();
    const incomeInput = document.getElementById('income');
    income = parseFloat(incomeInput.value);
    incomeInput.value = '';
    displaySavings();
}

function addExpense(event) {
    event.preventDefault();
    const amountInput = document.getElementById('amount');
    const amount = parseFloat(amountInput.value);
    amountInput.value = '';

    if (!isNaN(amount)) {
        expenses.push(amount);
        displayExpensesList();
        displaySavings();
    } else {
        alert('Please enter a valid expense amount.');
    }
}

function calculateTotalExpenses() {
    let total = 0;
    for (let expense of expenses) {
        total += expense;
    }
    return total;
}

function calculateSavings() {
    return income - calculateTotalExpenses();
}

function displaySavings() {
    const expensesElement = document.getElementById('expenses');
    const savingsElement = document.getElementById('savings-amount');

    expensesElement.textContent = `Total Expenses: ${calculateTotalExpenses()}`;
    savingsElement.textContent = `Savings: ${calculateSavings()}`;
}

function displayExpensesList() {
    const expensesListElement = document.getElementById('expenses-list');
    expensesListElement.innerHTML = '';

    expenses.forEach((expense, index) => {
        const expenseItem = document.createElement('div');
        expenseItem.classList.add('expense-item');
        expenseItem.innerHTML = `
            <span class="amount">${expense}</span>
            <button class="delete-btn" onclick="deleteExpense(${index})">Delete</button>
        `;
        expensesListElement.appendChild(expenseItem);
    });
}

function deleteExpense(index) {
    expenses.splice(index, 1);
    displayExpensesList();
    displaySavings();
}

displaySavings();
displayExpensesList();

const incomeForm = document.getElementById('income-form');
incomeForm.addEventListener('submit', setIncome);

const expenseForm = document.getElementById('expense-form');
expenseForm.addEventListener('submit', addExpense);

