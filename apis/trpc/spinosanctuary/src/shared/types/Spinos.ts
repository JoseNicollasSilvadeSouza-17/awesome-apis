import type z from "zod";
import type {
	specieSchema,
	genderSchema,
	foodSchema,
	categorySchema,
	spinosSchema,
} from "../schemas/spinos.js";

/**
 * Representa um tipo abstrato de Spinosaurídae
 *
 * @example
 * ```ts
 * const spino: ISpinos = {
 * 	name: "José Nícollas",
 * 	specie: "Baryonyx",
 *  category: "Terrestrial"
 * }
 * ```
 */

export type ISpinos = z.infer<typeof spinosSchema>;

export type Specie = z.infer<typeof specieSchema>;

export type Gender = z.infer<typeof genderSchema>;

export type Category = z.infer<typeof categorySchema>;

export type Food = z.infer<typeof foodSchema>;
