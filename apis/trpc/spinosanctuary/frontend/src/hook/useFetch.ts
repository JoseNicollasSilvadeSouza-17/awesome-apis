import { useEffect, useState } from "react";
import type { Url } from "../shared/types/Url";

interface Props<T> {
	data?: T;
}

const useFetch = <T>(url: Url): Props<T> => {
	const [data, setData] = useState<T>();

	useEffect(() => {
		const controller = new AbortController();

		const fetchData = async () => {
			try {
				const response = await fetch(url, {
					signal: controller.signal,
				});

				if (!response.ok) throw new Error("Invalid request!");

				const jsonData: T = await response.json();

				setData(jsonData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();

		return () => {
			controller.abort();
		};
	}, [url]);

	return { data };
};

export default useFetch;
