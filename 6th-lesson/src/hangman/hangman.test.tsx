import React from "react";
import { render, fireEvent, getByText,screen } from "@testing-library/react";
import Hangman from "../hangman/hangman";

describe("Hangman component", () => {
  it("displays the number of attempts remaining", () => {
    render(<Hangman />);
    expect(screen.getByText("Attempts remaining: 6")).toBeInTheDocument();
    // expect(getByText("Attempts remaining: 6"));
  });

  it("displays the word with underscores for unguessed letters", () => {
    render(<Hangman />);
    expect(screen.getByText(/^_ _ _ _ _$/)).toBeInTheDocument();
  });

  it("updates the word when a letter is guessed", () => {
    render(<Hangman />);
    fireEvent.click(screen.getByText("R"));
    expect(screen.getByText(/^R _ _ _ _$/)).toBeInTheDocument();
  });

  it("updates the number of attempts remaining when a wrong letter is guessed", () => {
   render(<Hangman />);
    fireEvent.click(screen.getByText("X"));
    expect(screen.getByText("Attempts remaining: 5")).toBeInTheDocument();
  });

  it("displays a message when the game is won", () => {
  render(<Hangman />);
    fireEvent.click(screen.getByText("R"));
    fireEvent.click(screen.getByText("e"));
    fireEvent.click(screen.getByText("a"));
    fireEvent.click(screen.getByText("c"));
    fireEvent.click(screen.getByText("t"));
    expect(screen.getByText("You won!")).toBeInTheDocument();
  });

//   it("displays a message when the game is lost", () => {
//    render(<Hangman />);
//     fireEvent.click(screen.getByText("X"));
//     fireEvent.click(screen.getByText("Y"));
//     fireEvent.click(screen.getByText("Z"));
//     fireEvent.click(screen.getByText("A"));
//     fireEvent.click(screen.getByText("B"));
//     fireEvent.click(screen.getByText("C"));
//     expect(screen.getByText("You lost :(")).toBeInTheDocument();
//   });
});
