import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const CreateCar = () => {
	const [make, setMake] = useState("");
	const [model, setModel] = useState("");
	const [colour, setColour] = useState("");
	const [year, setYear] = useState("");

	const { createNewCar, car } = useContext(GlobalContext);

	const navigate = useNavigate();

	const onSubmit = (e) => {
		e.preventDefault();

		const addNewCar = {
			id: car.length + 1,
			make,
			model,
			colour,
			year,
		};
		createNewCar(addNewCar);
		navigate("/");
	};

	return (
		<>
			<div className="container updateCar">
				<h3 className="display-6 mb-5" data-testid="title">
					Create Car
				</h3>
				<form onSubmit={onSubmit}>
					<div className="mb-3">
						<label htmlFor="make" className="form-label">
							Make
						</label>
						<input
							data-testid="make"
							type="text"
							required={true}
							className="form-control"
							id="make"
							value={make}
							onChange={(e) => setMake(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="model" className="form-label">
							Model
						</label>
						<input
							type="text"
							required={true}
							className="form-control"
							id="model"
							value={model}
							onChange={(e) => setModel(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="colour" className="form-label">
							Colour
						</label>
						<input
							type="text"
							required={true}
							className="form-control"
							id="colour"
							value={colour}
							onChange={(e) => setColour(e.target.value)}
						/>
					</div>
					<div className="mb-3">
						<label htmlFor="year" className="form-label">
							Year
						</label>
						<input
							type="number"
							required={true}
							className="form-control"
							id="year"
							value={year}
							onChange={(e) => setYear(e.target.value)}
						/>
					</div>
					<button
						type="submit"
						data-testid="addcar"
						className="btn btn-primary me-2"
					>
						Add Car
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

export default CreateCar;
