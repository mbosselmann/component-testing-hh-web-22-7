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

test("renders a movie with a like button", () => {
  render(<Movie name="Dr. Strange and the Universe of Madness" />);

  const drStrangeLikeButton = screen.getByRole("button", {
    name: "like Dr. Strange and the Universe of Madness",
  });

  expect(drStrangeLikeButton).toBeInTheDocument();
});

test("renders a movie with a unlike button", () => {
  render(<Movie name="Dr. Strange and the Universe of Madness" isLiked />);

  const drStrangeUnlikeButton = screen.getByRole("button", {
    name: "unlike Dr. Strange and the Universe of Madness",
  });

  expect(drStrangeUnlikeButton).toBeInTheDocument();
});

test("renders a movie with a delete button", () => {
  render(<Movie name="Dr. Strange and the Universe of Madness" />);

  const deleteButton = screen.getByRole("button", {
    name: "delete Dr. Strange and the Universe of Madness",
  });

  expect(deleteButton).toBeInTheDocument();
});

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

test("calls the onDeleteMovie handler when delete button is clicked", async () => {
  const user = userEvent.setup();
  const handleDeleteMovie = jest.fn();

  render(
    <Movie
      name="Dr. Strange and the Universe of Madness"
      onDeleteMovie={handleDeleteMovie}
    />
  );

  const deleteButton = screen.getByRole("button", {
    name: "delete Dr. Strange and the Universe of Madness",
  });

  await user.click(deleteButton);

  expect(handleDeleteMovie).toHaveBeenCalled();
});
