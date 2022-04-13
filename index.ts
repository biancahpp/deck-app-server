import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import graphql, { GraphQLSchema } from 'graphql';
import { graphqlHTTP } from 'express-graphql';
import { Mutation, RootQuery } from './src/Schemas';
dotenv.config();

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

const schema = new GraphQLSchema({ query: RootQuery, mutation: Mutation })

const app = express();
const PORT = process.env.APP_PORT || 5000
app.use(express.json());
app.use(cors(corsConfig));
app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}))

app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));