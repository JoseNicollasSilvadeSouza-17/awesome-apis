import type { OptionLabel } from "../../shared/types/OptionLabel";

interface OptionLabelProps {
	label: string;
}

export function OptionLabel({ label }: OptionLabelProps) {
	switch (label as OptionLabel) {
		case "Male": {
			return `♂️ ${label}`;
		}

		case "Female": {
			return `♀️ ${label}`;
		}

		case "Intersex": {
			return `⚧️ ${label}`;
		}

		case "Amphibian": {
			return `💧 ${label}`;
		}

		case "Terrestrial": {
			return `🪨 ${label}`;
		}

		case "Piscivorous": {
			return `🐟 ${label}`;
		}

		case "Carnivorous": {
			return `🥩 ${label}`;
		}

		default: {
			return label;
		}
	}
}
