import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";

// Components
import Header from "./components/Header/Header";
import ListOfCars from "./components/ListOfCars/ListOfCars";
import CreateCar from "./components/CreateCar/CreateCar";
import UpdateCar from "./components/UpdateCar/UpdateCar";
import DetailCar from "./components/DetailCar/DetailCar";

function App() {
	return (
		<GlobalProvider>
			<Header />
			<Routes>
				<Route path="/" element={<ListOfCars />} exact />
				<Route path="/create" element={<CreateCar />} />
				<Route path="/edit/:id" element={<UpdateCar />} />
				<Route path="/detail/:id" element={<DetailCar />} />
			</Routes>
		</GlobalProvider>
	);
}

export default App;
