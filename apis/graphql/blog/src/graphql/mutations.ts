import { GraphQLString } from "graphql";
import { userSchema } from "../models/User.js";
import createJWTToken from "../utils/auth.js";
import { GraphQLEmailAddress, GraphQLPhoneNumber } from "graphql-scalars";

const register = {
	type: GraphQLString,
	description: "Register a new user",
	args: {
		username: { type: GraphQLString },
		password: { type: GraphQLString },
		email: { type: GraphQLEmailAddress },
		displayName: { type: GraphQLString },
	},
	async resolve(_: unknown, args: Record<string, any>) {
		const { username, password, email, displayName } = args;

		const user = new userSchema({
			username,
			password,
			email,
			displayName,
		});
		await user.save();

		const token = createJWTToken({
			_id: user._id,
			username: user.username,
			email: user.email,
		});

		return token;
	},
};

const login = {
	type: GraphQLString,
	args: {
		email: { type: GraphQLEmailAddress },
		password: { type: GraphQLString },
	},
	async resolve(_: unknown, args: Record<string, any>) {
		const { email, password } = args;

		const user = await userSchema.findOne({ email }).select("+password");

		console.log(user);

		if (!user || password !== user.password)
			throw new Error("Invalid Credentials");

		const token = createJWTToken({
			_id: user._id,
			username: user.username,
			email: user.email,
		});

		return token;
	},
};

const createPost = {
	type: GraphQLString,
	description: "Create a new post",
	args: {
		title: { type: GraphQLString },
		body: { type: GraphQLString },
		telephone: { type: GraphQLPhoneNumber },
	},
	async resolve(_: unknown, args: Record<string, any>) {
		console.log(args);

		return "New post created";
	},
};

export { register, login, createPost };
