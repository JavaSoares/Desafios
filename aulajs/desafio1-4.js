const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
}

createTransaction({ type: 'credit', value: 50 })
createTransaction({ type: 'credit', value: 120 })
createTransaction({ type: 'debit', value: 80 })
createTransaction({ type: 'debit', value: 30 })

function createTransaction(transaction) {
    user.transactions.push(transaction)

    if (transaction.type == 'credit')
        user.balance += transaction.value // user.balance = user.balance + transaction.value
    else
        user.balance -= transaction.value // user.balance = user.balance + transaction.value
}

function getHigherTransactionByType(type) {
    let max = 0
    let typeTransaction

    for (transaction of user.transactions) {
        if (transaction.value > max && transaction.type == type) {
            max = transaction.value
            typeTransaction = transaction
        }
    }

    return typeTransaction
}

function getAverageTransactionValue() {
    let sum = 0

    for (transaction of user.transactions) {
        sum += transaction.value
    }

    return sum / user.transactions.length
}

function getTransactionsCount() {
    let count = { credit: 0, debit: 0 }

    for (transaction of user.transactions) {
        if (transaction.type == 'credit')
            count.credit++
        else
            count.debit++
    }

    return count
}

console.log(user.balance)
console.log(getHigherTransactionByType('credit'))
console.log(getHigherTransactionByType('debit'))
console.log(getAverageTransactionValue())
console.log(getTransactionsCount())
console.table(user)
