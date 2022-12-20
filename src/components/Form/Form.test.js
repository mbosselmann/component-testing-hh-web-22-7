import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Form from "./Form.js";

// Hint: the matcher ".toHaveBeenCalledWith()" could be useful here
test.todo("calls the onAddMovie handler with input values on submit");

// Hint: the matcher ".toHaveValue()" could be useful here
test.todo("clears the name input when the form is submitted");

// Hint: to test if something is not checked you can work with ".not.toBeChecked()"
test.todo("clears the isLiked input when the form is submitted");

// Hint: the matcher ".toHaveFocus()" could be useful here
test.todo("focusses the name input when the form is submitted");

// does not work currently, but does work with Next.JS

// test("does not call the onAddMovie handler when the form is submitted without a name", async () => {
//   const user = userEvent.setup();
//   const handleAddMovie = jest.fn();

//   render(<Form onAddMovie={handleAddMovie} />);

//   const submitButton = screen.getByRole("button", { name: "Add" });

//   await user.click(submitButton);
//   expect(handleAddMovie).not.toHaveBeenCalled();
// });
