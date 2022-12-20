import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movies from "./Movies.js";

const initialMovies = [
  {
    id: "0",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "1",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "2",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

test("renders the initialMovies", () => {
  render(<Movies initialMovies={initialMovies} />);

  const hulkHeading = screen.getByRole("heading", {
    name: "The Incredible Hulk",
  });

  expect(hulkHeading).toBeInTheDocument();

  const spidermanHeading = screen.getByRole("heading", {
    name: "Spiderman 1-25",
  });

  expect(spidermanHeading).toBeInTheDocument();

  const lordOfTheRingsHeading = screen.getByRole("heading", {
    name: "Lord of the Rings",
  });

  expect(lordOfTheRingsHeading).toBeInTheDocument();
});

test("renders a new movie when the form is submitted with a new movie name", async () => {
  const user = userEvent.setup();

  render(<Movies initialMovies={initialMovies} />);

  const input = screen.getByLabelText("Name");

  await user.type(input, "The Matrix");

  const button = screen.getByRole("button", { name: "Add" });

  await user.click(button);

  const matrixHeading = screen.getByRole("heading", { name: "The Matrix" });

  expect(matrixHeading).toBeInTheDocument();
});

// Hint: think about how you get the button by role and his accessible name
// maybe the matcher ".toHaveAccessibleName()" could be useful

test.todo("likes a movie when the like button is clicked");

test.todo("unlikes a movie when the unlike button is clicked");

// Hint: to test if something is not in the document you can work with the screen method
// ".queryByRole()" and with "not.toBeInTheDocument()" for your assertion

test.todo("deletes a movie when the delete button is clicked");
