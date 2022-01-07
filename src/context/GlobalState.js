import React, { createContext, useReducer } from "react";
import Reducer from "./Reducer";

const initialState = {
	car: [
		{
			id: 1,
			make: "Ford",
			model: "Puma",
			colour: "Black",
			year: "2009",
		},
	],
};

export const GlobalContext = createContext(initialState);
export const GlobalProvider = ({ children }) => {
	const [state, dispatch] = useReducer(Reducer, initialState);

	const createNewCar = (car) => {
		dispatch({
			type: "CREATE_NEW_CAR",
			payload: car,
		});
	};

	const deleteCar = (id) => {
		dispatch({
			type: "DELETE_CAR",
			payload: id,
		});
	};

	const updateCar = (car) => {
		dispatch({
			type: "UPDATE_CAR",
			payload: car,
		});
	};

	return (
		<GlobalContext.Provider
			value={{
				car: state.car,
				createNewCar,
				deleteCar,
				updateCar,
			}}
		>
			{children}
		</GlobalContext.Provider>
	);
};
