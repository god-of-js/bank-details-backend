import {Request, Response} from 'express';
import TransactionService from "../services/transactions.services";

class TransactionsController {
    async getTransactions(req: Request, res: Response): Promise<void> {
        const transactions = TransactionService.getTransactions();
    }
}

export default new TransactionsController();