import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { GraphQLDateTime, GraphQLEmailAddress } from "graphql-scalars";

export const UserGraphQLType = new GraphQLObjectType({
	name: "UserType",
	description: "Abstraction of a user in the system",
	fields: {
		id: { type: GraphQLID},
		username: { type: GraphQLString},
		email: { type: GraphQLEmailAddress},
		displayName: { type: GraphQLString},
		createdAt: { type: GraphQLDateTime},
		updatedAt: { type: GraphQLDateTime},
	}
});