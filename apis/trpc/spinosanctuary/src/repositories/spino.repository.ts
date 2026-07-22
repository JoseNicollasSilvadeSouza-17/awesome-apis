import { publicProcedure } from "../config/trpc.js";

const getSpinos = publicProcedure.query(() => {
	return [];
});

export { getSpinos };
