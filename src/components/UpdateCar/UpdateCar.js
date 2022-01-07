import React, { useState, useEffect, useContext } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const UpdateCar = () => {
	const { car, updateCar } = useContext(GlobalContext);
	const [selectedCar, setSelectedCar] = useState({
		id: null,
		make: "",
		model: "",
		colour: "",
		year: "",
	});

	const navigate = useNavigate();
	const { id } = useParams();

	useEffect(() => {
		const carId = id;
		const selectedCar = car.find((c) => c.id === parseInt(carId));
		setSelectedCar(selectedCar);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	const handleOnChange = (key, value) => {
		setSelectedCar({ ...selectedCar, [key]: value });
	};

	const onSubmit = (e) => {
		e.preventDefault();
		updateCar(selectedCar);
		navigate("/");
	};

	return (
		<>
			<div className="container">
				<h3 className="display-6 mb-5"> Update Car </h3>
				<form onSubmit={onSubmit}>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Make
						</label>
						<input
							type="text"
							required={true}
							className="form-control"
							value={selectedCar.make}
							onChange={(e) => handleOnChange("make", e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Model
						</label>
						<input
							type="text"
							required={true}
							className="form-control"
							value={selectedCar.model}
							onChange={(e) => handleOnChange("model", e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Colour
						</label>
						<input
							type="text"
							required={true}
							className="form-control"
							value={selectedCar.colour}
							onChange={(e) => handleOnChange("colour", e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="formGroupExampleInput" className="form-label">
							Year
						</label>
						<input
							type="number"
							required={true}
							className="form-control"
							value={selectedCar.year}
							onChange={(e) => handleOnChange("year", e.target.value)}
						/>
					</div>
					<button type="submit" className="btn btn-primary me-2">
						Update Car
					</button>
					<Link to="/">
						<button type="button" className="btn btn-dark">
							Cancel
						</button>
					</Link>
				</form>
			</div>
		</>
	);
};

export default UpdateCar;
