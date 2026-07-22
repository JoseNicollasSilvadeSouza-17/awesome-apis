import type z from "zod";
import type urlSchema from "../schemas/url";

/**
 * Representa o tipo URL
 *
 * @example
 * ```ts
 * const url: Url = "http://josenicollassilvadesouza.com/"
 * ```
 */

export type Url = z.infer<typeof urlSchema>;
