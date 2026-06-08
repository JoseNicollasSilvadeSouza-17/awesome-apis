import jwt from "jsonwebtoken";
import type { JwtPaylodDto } from "../types/UserDTO.js";

const createJWTToken = (user: JwtPaylodDto) => {
	return jwt.sign({ user }, "JNSS", {
		expiresIn: "1h",
	});
};

export default createJWTToken;
