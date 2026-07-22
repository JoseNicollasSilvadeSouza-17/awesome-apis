import client from "prom-client";
import type { Request, Response } from "express";

const registry = client.register;

client.collectDefaultMetrics({
	prefix: "human_extinct_animals_",
	register: registry,
});

export async function prometheusMetrics(req: Request, res: Response) {
	res.setHeader("Content-Type", registry.contentType);

	const metrics = await registry.metrics();

	res.send(metrics);
}
