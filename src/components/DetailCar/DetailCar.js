import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const DetailCar = () => {
	const [data, setData] = useState("");

	const { car } = useContext(GlobalContext);
	const { id } = useParams();

	useEffect(() => {
		const carId = id;
		const selectedCar = car.find((c) => c.id === parseInt(carId));
		setData(selectedCar);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<>
			<div className="container">
				<div>
					<div className="row">
						<div className="col-md-12">
							<Link to="/">
								<button type="button" className="btn btn-dark">
									Go Back
								</button>
							</Link>
						</div>
					</div>
					<div className="listing">
						<div className="row">
							<div className="col-md-12">
								<span>{data && data.make}</span> (
								<span>{data && data.year}</span>)<h4>{data && data.model}</h4>
								<span>{data && data.colour}</span>
								<br />
								<br />
								<p className="lead">
									<small>
										Lorem Ipsum is simply dummy text of the printing and
										typesetting industry. Lorem Ipsum has been the industry's
										standard dummy text ever since the 1500s, when an unknown
										printer took a galley of type and scrambled it to make a
										type specimen book.
									</small>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default DetailCar;
