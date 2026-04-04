import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@as-integrations/express5";

import {resolvers,typeDefs}from './graphql/index'

async function startServer() {
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    introspection: true,
  });

  await server.start();

  app.use(cors());
  app.use(bodyParser.json());

  app.use("/graphql", expressMiddleware(server));

  app.listen(4000, () => {
    console.log("Server running at http://localhost:4000/graphql");
  });
}

startServer();
