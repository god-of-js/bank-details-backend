
import TransactionsController from "../transactions/transactions.controller";
const root = {
    transactions: () => TransactionsController.getTransactions(),
    transaction: ({ id }: { id: number }) => TransactionsController.getTransactionById(id),
  };

export default root;