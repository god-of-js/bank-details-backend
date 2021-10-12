
import TransactionsController from "../controllers/transactions.controllers";
const root = {
    transactions: () => TransactionsController.getTransactions(),
    transaction: ({ id }: {id: number}) => TransactionsController.getTransactionById(id),
  };

export default root;