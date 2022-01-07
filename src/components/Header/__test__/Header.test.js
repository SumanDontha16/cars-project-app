import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Header from "../Header";
import renderer from "react-test-renderer";

describe("Header", () => {
	it("Test to match snapshot of component", () => {
		const headerTree = renderer.create(<Header />).toJSON();
		expect(headerTree).toMatchSnapshot();
	});

	it("Header renders with correct title", () => {
		render(<Header />);
		const headerEl = screen.getByTestId("header");

		expect(headerEl.textContent).toBe("Cars Inventory");
	});
});
