import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { Counter } from "./Counter";

describe("testing", () => {
  test("testing hanlde counter by use state", () => {
    render(<Counter />);
    const buttonElement = screen.getByText("add one");
    const divElement = screen.getByRole("contentinfo");
    fireEvent.click(buttonElement);
    expect(divElement).toHaveTextContent("count is 1");
  });
});
