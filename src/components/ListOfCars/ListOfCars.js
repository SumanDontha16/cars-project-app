import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { GlobalContext } from "../../context/GlobalState";

const ListOfCars = () => {
	const { car, deleteCar, updateCar } = useContext(GlobalContext);
	return (
		<>
			<div className="container">
				<div className="row">
					<div className="col-md-8"></div>
					<div className="col-md-4 text-right">
						{car.length >= 1 ? (
							<Link to="/create">
								<button className="btn btn-primary" type="button">
									Create New Car
								</button>
							</Link>
						) : (
							<p></p>
						)}
					</div>
				</div>
				<div>
					{car?.length > 0 ? (
						<div className="table-responsive">
							<table className="table table-striped table-hover">
								<thead>
									<tr>
										<th scope="col">Make</th>
										<th scope="col">Model</th>
										<th scope="col">Colour</th>
										<th scope="col">Year</th>
									</tr>
								</thead>
								<tbody>
									{car.map((c) => (
										<tr key={c.id}>
											<td>
												<Link to={`/detail/${c.id}`}>{c.model}</Link>
											</td>
											<td>
												<Link to={`/detail/${c.id}`}>{c.make}</Link>
											</td>
											<td>{c.colour}</td>
											<td>{c.year}</td>
											<td>
												<Link to={`/edit/${c.id}`}>
													<i
														className="bi bi-pencil-square"
														onClick={() => updateCar(c.id)}
													></i>
												</Link>
											</td>
											<td>
												<i
													className="bi bi-x-circle-fill"
													onClick={() => deleteCar(c.id)}
												></i>
											</td>
										</tr>
									))}
								</tbody>
							</table>
						</div>
					) : (
						<div className="noList">
							<p className="lead"> It seems we dont have any cars </p>
							<Link to="/create">
								<button type="button" className="btn btn-primary">
									Create New Car
								</button>
							</Link>
						</div>
					)}
				</div>
			</div>
		</>
	);
};

export default ListOfCars;
