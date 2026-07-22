import useFetch from "../hook/useFetch";
import type { Url } from "../shared/types/Url";
import type { ISpinos } from "../../../src/shared/types/Spinos";

const url: Url = "http://localhost:3000/trpc/getSpinos";

export default function Spinos() {
	const { data } = useFetch<ISpinos[]>(url);

	return (
		<>
			<h2 className="app__title">Spinosaurídaes:</h2>

			<ul className="app__list">
				{data?.map((spino) => (
					<li className="app__item" key={spino.id}>
						<span className="app__name">{spino.name}</span>

						<p className="app__p">Espécie: {spino.specie.name}</p>
					</li>
				))}
			</ul>
		</>
	);
}
