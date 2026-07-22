import FOOD from "../../../../src/shared/schemas/food";
import CATEGORY from "../../../../src/shared/schemas/category";
import GENDER from "../../../../src/shared/schemas/gender";

export type OptionLabel =
	(typeof GENDER)[number] | (typeof CATEGORY)[number] | (typeof FOOD)[number];
