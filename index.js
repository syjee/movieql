import { GraphQLServer } from "graphql-yoga";
console.log("hello");

const server = new GraphQLServer({ });

server.start(() => console.log("GraphQL Server Running"));