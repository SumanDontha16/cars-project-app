/* eslint import/no-anonymous-default-export: [2, {"allowArrowFunction": true}] */
export default (state, action) => {
	switch (action.type) {
		case "CREATE_NEW_CAR":
			return {
				...state,
				car: [...state.car, action.payload],
			};

		case "UPDATE_CAR":
			const editingCar = action.payload;
			const updatedCar = state.car.map((car) => {
				if (car.id === editingCar.id) {
					return editingCar;
				}
				return car;
			});
			return {
				...state,
				car: updatedCar,
			};

		case "DELETE_CAR":
			return {
				...state,
				car: state.car.filter((car) => car.id !== action.payload),
			};

		default:
			return state;
	}
};
