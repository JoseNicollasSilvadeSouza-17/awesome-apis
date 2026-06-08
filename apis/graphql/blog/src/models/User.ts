import { model, Schema, type InferSchemaType } from "mongoose";
import type IUser from "../types/IUser.js";

const user = new Schema<IUser>(
	{
		username: {
			type: String,
			required: true,
			trim: true,
		},
		password: {
			type: String,
			required: true,
			trim: true,
		},
		email: {
			type: String,
			required: true,
			unique: true,
			trim: true,
			match: [
				/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
				"Provide a valid email address",
			],
		},
		displayName: {
			type: String,
			required: true,
			trim: true,
		},
	},
	{
		timestamps: true,
		versionKey: false,
	},
);

export type UserType = InferSchemaType<typeof user>;

const userSchema = model<UserType>("User", user);

export { userSchema };
