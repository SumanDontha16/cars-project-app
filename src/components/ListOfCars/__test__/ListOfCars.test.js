import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import ListOfCars from "../ListOfCars";
import { MemoryRouter } from "react-router-dom";
import { GlobalProvider } from "../../../context/GlobalState";

describe("List Of Cars", () => {
	test("Component rendered successfully!", () => {
		const { container } = render(
			<GlobalProvider>
				<MemoryRouter>
					<ListOfCars />
				</MemoryRouter>
			</GlobalProvider>
		);
		expect(container).toMatchSnapshot();
	});

	test("Should show create new car button to add list", () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<ListOfCars />
				</MemoryRouter>
			</GlobalProvider>
		);

		const button = screen.getByRole("button", { name: "Create New Car" });
		userEvent.click(button);
	});

	test("Table Headers rendered successfully!'", () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<ListOfCars />
				</MemoryRouter>
			</GlobalProvider>
		);

		expect(screen.getByRole("table")).toBeInTheDocument();
		expect(
			screen.getByRole("columnheader", { name: "Make" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("columnheader", { name: "Model" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("columnheader", { name: "Colour" })
		).toBeInTheDocument();
		expect(
			screen.getByRole("columnheader", { name: "Year" })
		).toBeInTheDocument();
	});

	test("Table data rendered successfully!'", () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<ListOfCars />
				</MemoryRouter>
			</GlobalProvider>
		);

		expect(screen.getByRole("cell", { name: "Puma" })).toBeInTheDocument();
		expect(screen.getByRole("cell", { name: "Ford" })).toBeInTheDocument();
		expect(screen.getByRole("cell", { name: "Black" })).toBeInTheDocument();
		expect(screen.getByRole("cell", { name: "2009" })).toBeInTheDocument();
	});

	test("Edit link working successfully!", () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<ListOfCars />
				</MemoryRouter>
			</GlobalProvider>
		);
		userEvent.click(screen.getByRole("link", { name: "" }));
	});

	test("Detail link working successfully!", () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<ListOfCars />
				</MemoryRouter>
			</GlobalProvider>
		);

		userEvent.click(screen.getByRole("link", { name: "Puma" }));
	});
});
