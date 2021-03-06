import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

 const server = new GraphQLServer({
	typeDefs: "graphql/schema.graphql",
	resolvers
}); // grapQLServer config source

server.start(() => console.log("GraphQL Server Running"));
