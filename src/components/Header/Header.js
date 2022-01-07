import React from "react";

const Header = () => {
	return (
		<>
			<nav
				className="navbar navbar-light py-4 mb-4"
				style={{ backgroundColor: "#24356d" }}
			>
				<div className="container">
					<h4
						className="display-6"
						style={{ color: "#ffffff" }}
						data-testid="header"
					>
						Cars Inventory
					</h4>
				</div>
			</nav>
		</>
	);
};

export default Header;
