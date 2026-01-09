const transactions = [
    { amount: 100, type: 'credit' },
    { amount: 20, type: 'cash' },
    { amount: 150, type: 'credit' },
    { amount: 50, type: 'cash' },
    { amount: 75, type: 'credit' },
];

const totalCredit = transactions.filter((item) => item.type === 'cash');
let totalAmount = totalCredit.reduce(
    (accumulator, currentAmount) => accumulator + currentAmount.amount,
    0
);

console.log(totalAmount);
