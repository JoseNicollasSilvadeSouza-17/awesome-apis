import { GraphQLList, GraphQLID, GraphQLInt } from "graphql";
import { UserGraphQLType } from "../types/UserTypes.js";
import { userSchema } from "../models/User.js";

const users = {
	type: new GraphQLList(UserGraphQLType),
	description: "Returns a list of users.",
	resolve() {
		return userSchema.find();
	},
};

const user = {
	type: UserGraphQLType,
	description: "Returns a user",
	args: {
		id: { type: GraphQLID },
	},
	async resolve(_: unknown, args: Record<string, any>) {
		const { id } = args;

		const user = await userSchema.findById(id);

		return user;
	},
};

const userCount = {
	type: GraphQLInt,
	description: "Returns total number users",
	resolve() {
		return userSchema.countDocuments();
	}
}

export { users, user, userCount };
