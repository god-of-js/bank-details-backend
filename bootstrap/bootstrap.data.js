/**
 * Bootstrap script - creates entries of transactions in the database.
 * To activate, run: yarn bootstrap-data
 */

const fs  = require('fs');
const fastcsv  = require('fast-csv');
const { PrismaClient } =  require('@prisma/client');
const prisma = new PrismaClient();

const transaction = {
  uid: "",
  account: "",
  description: "",
  category: "",
  reference: "",
  currency: "",
  amount: "",
  status: "",
  transactionDate: "",
  createdAt: "",
  updatedAt: "",
}
const transactionKeys = Object.keys(transaction);
const stream = fs.createReadStream('bootstrap/Transactions.csv');
const csvData = [];
const csvStream = fastcsv
  .parse()
  .on('data', function(data) {
    transactionKeys.forEach(key => {
      transaction[key] = data[transactionKeys.indexOf(key)];
    });
    csvData.push(transaction);
  })
  .on('end', function() {
    // remove the first line: header
    csvData.shift();
    csvData.forEach(async row => {
      try {
        await prisma.transactions.create({ data: row });
      } catch(err) {
        console.log(err);
      }
    })
  });

stream.pipe(csvStream);
