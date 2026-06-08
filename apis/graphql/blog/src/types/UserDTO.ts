import type { UserType } from "../models/User.js";
import type { Types } from "mongoose";

export type JwtPaylodDto = Pick<
	UserType & { _id: Types.ObjectId },
	"_id" | "username" | "email"
>;
