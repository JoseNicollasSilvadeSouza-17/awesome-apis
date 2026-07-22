import type { TimeHTMLAttributes } from "react";

type CustomTimeProps = Omit<TimeHTMLAttributes<HTMLTimeElement>, "dateTime">;

interface TimeProps extends CustomTimeProps {
	dateTime: string;
}

export function Time({ dateTime, ...rest }: TimeProps) {
	return (
		<time dateTime={dateTime} {...rest}>
			{dateTime}
		</time>
	);
}
