import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Transaction } from "../types/interfaces";
class TransactionService {
    async getTransactions(): Promise<Transaction[]> {
        const transactions: Transaction[] = await prisma.transactions.findMany();
        return transactions;
    }
}

export default new TransactionService();