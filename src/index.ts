const createError = require('http-errors');
import express, { Application } from 'express';
import cors from 'cors';
import path from 'path';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { graphqlHTTP } from 'express-graphql';
import { buildSchema } from 'graphql';

const app: Application = express();

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const schema = buildSchema(`
  type Query {
    hello: String
  }
`);

const root = {
  hello: () => {
    return 'Hello world!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

const PORT = 4000;
app.listen(PORT, () => console.log(`Server listening on: http://127.0.0.1:${PORT}/graphql`))

export default app;
