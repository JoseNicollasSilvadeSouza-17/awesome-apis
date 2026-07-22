import z from "zod";

/**
 * Representa o número de porta do servidor
 *
 * @example
 * ```http
 * 3000
 * 3001
 * .
 * .
 * .
 * 4000
 * ```
 */

const PORT = z
	.string()
	.trim()
	.min(2, "Required number PORT")
	.default("3000")
	.transform(Number)
	.parse(process.env.PORT);

export { PORT };
