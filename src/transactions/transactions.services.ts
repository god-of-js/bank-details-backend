import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
import { Transaction } from "../types/interfaces";
class TransactionService {
    async getTransactions(): Promise<Transaction[]> {
        const transactions: Transaction[] = await prisma.transactions.findMany();
        return transactions;
    }

    async getTransactionById(id: number): Promise<Transaction | null> {
        const transaction: Transaction | null = await prisma.transactions.findUnique({
            where: {
                id: Number(id)
            }
        });
        return transaction;
    }
}

export default new TransactionService();
