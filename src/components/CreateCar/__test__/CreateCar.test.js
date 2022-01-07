import React from "react";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import CreateCar from "../CreateCar";
import renderer from "react-test-renderer";
import { MemoryRouter } from "react-router-dom";
import { GlobalProvider } from "../../../context/GlobalState";

describe("Create Car", () => {
	it("Test to match snapshot of component", () => {
		const createCarTree = renderer
			.create(
				<MemoryRouter>
					<CreateCar />
				</MemoryRouter>
			)
			.toJSON();
		expect(createCarTree).toMatchSnapshot();
	});

	it("Should renders with correct title", () => {
		render(
			<MemoryRouter>
				<CreateCar />
			</MemoryRouter>
		);
		const headerEl = screen.getByTestId("title");
		expect(headerEl.textContent).toBe("Create Car");
	});

	test("should return a default error message for fields that don't have a value", () => {
		render(
			<MemoryRouter>
				<CreateCar />
			</MemoryRouter>
		);
		const requiredField = screen.getByTestId("make");
		expect(requiredField.required).toBe(true);
	});

	test("should call the onSubmit when provided", async () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<CreateCar />
				</MemoryRouter>
			</GlobalProvider>
		);

		const make = screen.getByLabelText(/make/i);
		const model = screen.getByLabelText(/model/i);
		const colour = screen.getByLabelText(/colour/i);
		const year = screen.getByLabelText(/year/i);

		user.type(make, "ford");
		user.type(model, "puma");
		user.type(colour, "black");
		user.type(year, "2008");

		const button = screen.getByRole("button", { name: "Add Car" });
		user.click(button);
	});
});
