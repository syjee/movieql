import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers"

const server = new GraphQLServer({
    typeDefs : "graphql/schema.graphql",
    resolvers
 });

server.start(() => console.log("GraphQL Server Running"));

/*
var arr = [    
    {"name":"apple", "count": 2},    
    {"name":"orange", "count": 5},    
    {"name":"pear", "count": 3},    
    {"name":"orange", "count": 16}
  ];    
  var newArr = arr.filter(function(item){    
    return item.name === "orange";
  });  
  console.log("Filter results:",newArr[0]);

  var materials = [
    'Hydrogen',
    'Helium',
    'Lithium',
    'Beryllium'
  ];
  
  console.log(materials.map(material => material.length));
  */