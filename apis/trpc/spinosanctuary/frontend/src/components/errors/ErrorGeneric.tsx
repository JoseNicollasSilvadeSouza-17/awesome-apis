import type { ReactNode } from "react";

interface ErrorProps {
	children: ReactNode;
}

export function ErrorGeneric({ children }: ErrorProps) {
	return <span className="app__error-generic">{children}</span>;
}
