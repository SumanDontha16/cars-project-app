import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import ListCar from "./components/ListCar/ListCar";
import CreateCar from "./components/CreateCar/CreateCar";
import EditCar from "./components/EditCar/EditCar";
import DetailCar from "./components/DetailCar/DetailCar";

import { GlobalProvider } from "./context/GlobalState";
import Header from "./components/Header/Header";

function App() {
	return (
		<GlobalProvider>
			<Header />
			<Routes>
				<Route path="/" element={<ListCar />} exact />
				<Route path="/create" element={<CreateCar />} />
				<Route path="/edit/:id" element={<EditCar />} />
				<Route path="/detail/:id" element={<DetailCar />} />
			</Routes>
		</GlobalProvider>
	);
}

export default App;
