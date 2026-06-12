import { GraphQLID, GraphQLObjectType, GraphQLString } from "graphql";
import { GraphQLDateTime, GraphQLEmailAddress, GraphQLPhoneNumber } from "graphql-scalars";

export const PostGraphQLType = new GraphQLObjectType({
	name: "PostType",
	description: "The post type",
	fields: {
		id: { type: GraphQLID },
		authorId: { type: GraphQLID },
		title: { type: GraphQLString },
		body: { type: GraphQLString },
		telephone: { type: GraphQLPhoneNumber },
	},
});
