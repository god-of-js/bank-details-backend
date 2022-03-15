import TransactionService from './transactions.services';
import { Transaction } from '../types/interfaces';

class TransactionsController {
    constructor(private readonly transactionService = TransactionService) {}
    async getTransactions(): Promise<Transaction[]> {
        const transactions = await this.transactionService.getTransactions();

        return transactions;
    }

    async getTransactionById(id:number): Promise<Transaction> {
        const transaction = await this.transactionService.getTransactionById(id);
        if(!transaction) throw new Error("Transaction does not exist.")
        return transaction;
    }
}

export default new TransactionsController();
