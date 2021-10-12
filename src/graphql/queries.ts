import { buildSchema } from 'graphql';

const schema = buildSchema(`
type Query {
  transaction(id: ID): Transaction
  transactions: [Transaction]
}

type Transaction {
  id: ID
  uid: String
  account: String
  description: String
  category: String
  reference: String
  currency: String
  amount: String
  status: String
  transactionDate: String
  createdAt: String
  updatedAt: String
}
`);

export default schema;