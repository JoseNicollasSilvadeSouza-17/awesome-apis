import type { Document } from "mongoose";

export default interface IPost extends Document {
	authorId: string;
	title: string;
	body: string;
	telephone: string;
}