import { GraphQLObjectType, GraphQLSchema } from "graphql";
import { user, users, userCount } from "./querys.js";
import { createHandler } from "graphql-http/lib/use/express";
import { login, register, createPost } from "./mutations.js";

const queryType = new GraphQLObjectType({
	name: "QueryType",
	description: "The root query type.",
	fields: {
		users,
		user,
		userCount
	},
});

const mutationType = new GraphQLObjectType({
	name: "MutationType",
	description: "The root mutation type",
	fields: {
		register,
		login,
		createPost
	},
});

const schema = new GraphQLSchema({
	query: queryType,
	mutation: mutationType,
});

const graphqlHandler = createHandler({
	schema,
});

export default graphqlHandler;
