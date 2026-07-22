import { createTRPCClient, httpBatchLink } from "@trpc/client";
import type { AppRouter } from "../../../src/routes/spino.routes";

const client = createTRPCClient<AppRouter>({
	links: [
		httpBatchLink({
			url: "http://localhost:3000/trpc/",
		}),
	],
});

export default client;
