import React from "react";
import "./App.css";
import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Apod from "./components/pages/Apod";
import Messiers from "./components/pages/Messiers";
import Hubble from "./components/pages/Hubble";
import Constellations from "./components/pages/Constellations";
import Mars from "./components/pages/Mars";
import NotFound from "./components/subcomponents/NotFound";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{ index: true, element: <Navigate to="apod" /> },
			{ path: "apod", element: <Apod /> },
			{ path: "messiers", element: <Messiers /> },
			{ path: "hubble", element: <Hubble /> },
			{ path: "constellations", element: <Constellations /> },
			{ path: "mars", element: <Mars /> },
			{ path: "*", element: <NotFound /> },
		],
	},
]);

const App = () => {
	return <RouterProvider router={router} />;
};

export default App;
