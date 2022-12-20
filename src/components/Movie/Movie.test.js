import Movie from "./Movie.js";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// first step
// test("renders of movie", () => {
//   render(<Movie name="Dr. Strange" />);

//   const drStrangeTitle = screen.getByText("Dr. Strange");

//   expect(drStrangeTitle).toBeInTheDocument();
// });

test("renders of movie", () => {
  render(<Movie name="Dr. Strange" />);

  const drStrangeTitle = screen.getByRole("heading", { name: "Dr. Strange" });

  expect(drStrangeTitle).toBeInTheDocument();
});

test("calls the onToggleLike handler when the like button is clicked", async () => {
  const user = userEvent.setup();
  const handleToggleLike = jest.fn();

  render(<Movie name="Dr. Strange" onToggleLike={handleToggleLike} />);

  const likeButton = screen.getByRole("button", { name: "like Dr. Strange" });

  await user.click(likeButton);

  expect(handleToggleLike).toHaveBeenCalled();
});
