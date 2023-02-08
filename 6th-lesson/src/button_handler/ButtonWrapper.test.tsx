import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ButtonWrapper } from "../button_handler/ButtonWrapper";

describe("testing", () => {
  test("renders learn react link", () => {
    const onclick = jest.fn();
    render(<ButtonWrapper onClick={onclick} title="add item" />);
    const buttonElement = screen.getByText("add item");
    // expect(buttonElement).toBeInTheDocument();
    fireEvent.click(buttonElement);
    expect(onclick).toHaveBeenCalledTimes(1);
  });
});
