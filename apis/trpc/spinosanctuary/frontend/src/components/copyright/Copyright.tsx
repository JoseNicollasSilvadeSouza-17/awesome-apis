import { currentYear } from "../../utils/date";
import { Time } from "../ui/Time";

interface CopyrightProps {
	author: string;
}

export default function Copyright({ author }: CopyrightProps) {
	return (
		<small className="footer__copyright">
			Copyright &copy; <Time dateTime={currentYear} className="footer__year" />{" "}
			{author} - Todos os direitos reservados.
		</small>
	);
}
