import { router } from "../config/trpc.js";
import { getSpinos } from "../repositories/spino.repository.js";

const appRouter = router({
	getAll: getSpinos,
});

export type AppRouter = typeof appRouter;
export { appRouter };
