import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Movie from "./Movie.js";

test("renders a movie", () => {
  render(<Movie name="Dr. Strange and the Universe of Madness" />);

  const drStrangeHeading = screen.getByRole("heading", {
    name: "Dr. Strange and the Universe of Madness",
  });

  expect(drStrangeHeading).toBeInTheDocument();
});

test.todo("renders a movie with a like button");

test.todo("renders a movie with a unlike button");

test.todo("renders a movie with a delete button");

test("calls the onToggleLike handler when the like button is clicked", async () => {
  const user = userEvent.setup();
  const handleToggleLike = jest.fn();

  render(
    <Movie
      name="Dr. Strange and the Universe of Madness"
      onToggleLike={handleToggleLike}
    />
  );

  const drStrangeLikeButton = screen.getByRole("button", {
    name: "like Dr. Strange and the Universe of Madness",
  });

  await user.click(drStrangeLikeButton);
  expect(handleToggleLike).toHaveBeenCalled();
});

test.todo("calls the onDeleteMovie handler when delete button is clicked");
