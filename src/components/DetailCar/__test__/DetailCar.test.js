import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import DetailCar from "../DetailCar";
import { MemoryRouter } from "react-router-dom";
import { GlobalProvider } from "../../../context/GlobalState";

describe("Detail Car", () => {
	test("Component rendered successfully!", () => {
		const { container } = render(
			<GlobalProvider>
				<MemoryRouter>
					<DetailCar />
				</MemoryRouter>
			</GlobalProvider>
		);
		expect(container).toMatchSnapshot();
	});

	test("Go Back working successfully!", () => {
		render(
			<GlobalProvider>
				<MemoryRouter>
					<DetailCar />
				</MemoryRouter>
			</GlobalProvider>
		);

		const button = screen.getByRole("button", { name: "Go Back" });
		userEvent.click(button);
	});
});
