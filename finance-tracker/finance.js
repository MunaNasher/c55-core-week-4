

const chalk = require('chalk');


let transactions = [
  {
    id: 1,
    type: 'income',
    category: 'salary',
    amount: 3000,
    description: 'Monthly salary',
    date: '2025-01-15',
  },
  {
    id: 2,
    type: 'expense',
    category: 'housing',
    amount: 1200,
    description: 'Rent',
    date: '2025-01-16',
  },
  {
    id: 3,
    type: 'expense',
    category: 'food',
    amount: 300,
    description: 'Groceries',
    date: '2025-01-17',
  },
  {
    id: 4,
    type: 'income',
    category: 'side-income',
    amount: 500,
    description: 'Freelance project',
    date: '2025-01-20',
  },
  {
    id: 5,
    type: 'expense',
    category: 'bills',
    amount: 150,
    description: 'Utilities',
    date: '2025-01-22',
  },
];


// Add a new transaction 
function addTransaction(transaction) {
  transactions = [...transactions, transaction];
  console.log(chalk.green(`Transaction added: ${transaction.description} (€${transaction.amount})`));
}

// Calculate total income
function getTotalIncome() {
  let total = 0;
  for (const tx of transactions) {
    if (tx.type === 'income') total += tx.amount;
  }
  return total;
}

// Calculate total expenses
function getTotalExpenses() {
  let total = 0;
  for (const tx of transactions) {
    if (tx.type === 'expense') total += tx.amount;
  }
  return total;
}

// Get current balance
function getBalance() {
  const balance = getTotalIncome() - getTotalExpenses();
  return balance;
}

// Get transactions by category (demonstrates loop + push + includes)
function getTransactionsByCategory(category) {
  const filtered = [];
  for (const tx of transactions) {
    if (tx.category.toLowerCase().includes(category.toLowerCase())) {
      filtered.push(tx);
    }
  }
  return filtered;
}

// Get the largest expense (demonstrates destructuring)
function getLargestExpense() {
  let largest = null;
  for (const tx of transactions) {
    if (tx.type === 'expense') {
      if (!largest || tx.amount > largest.amount) {
        largest = tx;
      }
    }
  }
  return largest;
}

// Print all transactions
function printAllTransactions() {
  console.log(chalk.bold('\nAll Transactions:'));
  for (const tx of transactions) {
    const { id, type, category, amount, description } = tx;
    const typeLabel = type === 'income' ? chalk.green('[INCOME]') : chalk.red('[EXPENSE]');
    console.log(`${id}. ${typeLabel} ${description} - €${amount} (${chalk.yellow(category)})`);
  }
}

// Print summary report
function printSummary() {
  const totalIncome = getTotalIncome();
  const totalExpenses = getTotalExpenses();
  const balance = getBalance();
  const largestExpense = getLargestExpense();
  console.log(chalk.bold('\n📊 FINANCIAL SUMMARY 📊'));
  console.log(`Total Income: ${chalk.green.bold('€' + totalIncome)}`);
  console.log(`Total Expenses: ${chalk.red.bold('€' + totalExpenses)}`);
  console.log(
    `Current Balance: ${
      balance >= 0 ? chalk.cyan.bold('€' + balance) : chalk.red.bold('€' + balance)
    }`
  );
  if (largestExpense) {
    console.log(
      `Largest Expense: ${largestExpense.description} (${chalk.red.bold('€' + largestExpense.amount)})`
    );
  }
  console.log(`Total Transactions: ${transactions.length}`);
}



printAllTransactions();

printSummary();

addTransaction({
  id: 6,
  type: 'expense',
  category: 'entertainment',
  amount: 200,
  description: 'Movie and snacks',
  date: '2025-01-25',
});


printAllTransactions();
printSummary();
