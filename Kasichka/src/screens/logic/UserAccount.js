export default class UserAccount {
    constructor() {
        this.name = ''; /* string */
        this.monthlyIncomes = []; /* RegularIncome */
        this.recurringExpenses = []; /* RecurringExpense */
        this.savings = [] /* Savings */
        this.transactions = null; /* Transactions */
        this.startMonthDate = 1; /* Date */
    }
}