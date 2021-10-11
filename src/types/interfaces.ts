export interface Transaction {
    id: number;
    uid: string;
    account: string;
    description: string;
    category: string;
    reference: string;
    currency: string;
    amount: string;
    status: string;
    transactionDate: string;
    createdAt: string;
    updatedAt: string;
}