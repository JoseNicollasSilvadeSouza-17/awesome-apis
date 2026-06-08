import { model, Schema, type InferSchemaType } from "mongoose";
import type IPost from "../types/IPost.js";

const post = new Schema<IPost>(
	{
		authorId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
			trim: true,
		},
		body: {
			type: String,
			required: true,
			trim: true,
		},
		telephone: {
			type: String,
			required: true,
			trim: true,
			match: [/^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/, "Provide a valid phone number"],
		},
	},
	{
		timestamps: true,
	},
);

type PostType = InferSchemaType<typeof post>;

const postSchema = model<PostType>("Post", post);

export { postSchema };
