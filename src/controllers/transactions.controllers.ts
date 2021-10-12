import TransactionService from "../services/transactions.services";
import { Transaction } from "../types/interfaces";

class TransactionsController {
    async getTransactions(): Promise<Transaction[]> {
        const transactions = await TransactionService.getTransactions();
        return transactions;
    }

    async getTransactionById(id:number): Promise<Transaction | null> {
        const transaction = await TransactionService.getTransactionById(id);
        return transaction;
    }
}

export default new TransactionsController();
