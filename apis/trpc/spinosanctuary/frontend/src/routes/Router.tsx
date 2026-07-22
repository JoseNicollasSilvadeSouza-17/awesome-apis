import { Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
import Layout from "../layout/Layout";
import { Home } from "../pages/Home";
import { Error404 } from "../components/errors/Error404";
import { Loading } from "../components/ui/Loading";

const Spinos = lazy(() => import("../pages/Spinos"));

export default function Router() {
	return (
		<Routes>
			<Route element={<Layout />}>
				<Route path="/" element={<Home />} />
				<Route
					path="/spinos"
					element={
						<Suspense fallback={<Loading />}>
							<Spinos />
						</Suspense>
					}
				/>
				<Route path="/*" element={<Error404 />} />
			</Route>
		</Routes>
	);
}
