import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form.js";

// Hint: the matcher ".toHaveBeenCalledWith()" could be useful here
test("calls onAddMovie handler with input values on submit", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();

  render(<Form onAddMovie={handleAddMovie} />);

  const nameInput = screen.getByLabelText("Name");
  const isLikedInput = screen.getByLabelText("Like");
  const submitButton = screen.getByRole("button", { name: "Add" });

  await user.type(nameInput, "The Matrix");
  await user.click(isLikedInput);
  await user.click(submitButton);

  expect(handleAddMovie).toHaveBeenCalledWith({
    name: "The Matrix",
    isLiked: true,
  });
});

// Hint: the matcher ".toHaveValue()" could be useful here
test("clears the name input when the form is submitted", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();

  render(<Form onAddMovie={handleAddMovie} />);

  const nameInput = screen.getByLabelText("Name");
  const submitButton = screen.getByRole("button", { name: "Add" });

  await user.type(nameInput, "The Matrix");
  await user.click(submitButton);

  expect(nameInput).toHaveValue("");
});

// Hint: to test if something is not checked you can work with ".not.toBeChecked()"
test("clears the isLiked input when the form is submitted", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();

  render(<Form onAddMovie={handleAddMovie} />);

  const nameInput = screen.getByLabelText("Name");
  const isLikedInput = screen.getByLabelText("Like");
  const submitButton = screen.getByRole("button", { name: "Add" });

  await user.type(nameInput, "The Matrix");
  await user.click(isLikedInput);
  await user.click(submitButton);

  expect(isLikedInput).not.toBeChecked();
});

// Hint: the matcher ".toHaveFocus()" could be useful here
test("focusses the name input when the form is submitted", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();

  render(<Form onAddMovie={handleAddMovie} />);

  const nameInput = screen.getByLabelText("Name");
  const submitButton = screen.getByRole("button", { name: "Add" });

  await user.type(nameInput, "The Matrix");
  await user.click(submitButton);

  expect(nameInput).toHaveFocus();
});

test("validates required name input", async () => {
  const user = userEvent.setup();
  const handleAddMovie = jest.fn();

  render(<Form onAddMovie={handleAddMovie} />);

  const input = screen.getByLabelText(/name/i);

  expect(input).toBeInvalid();

  await user.type(input, "Mareike");

  expect(input).toBeValid();
});
