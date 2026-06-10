import type { Request, Response, NextFunction } from "express";

const authenticateJwt = (req: Request, res: Response, next: NextFunction) => {
	const token = req.headers.authorization?.split(" ")[1];

	console.log(token);
	next();
};

export default authenticateJwt;
