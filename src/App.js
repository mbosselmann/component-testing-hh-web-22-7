import styled from "styled-components";
import Movies from "./components/Movies/Movies.js";

const initialMovies = [
  {
    id: "28djdh72",
    name: "The Incredible Hulk",
    isLiked: false,
  },
  {
    id: "dknseu2",
    name: "Spiderman 1-25",
    isLiked: false,
  },
  {
    id: "dkwi02ksk",
    name: "Lord of the Rings",
    isLiked: true,
  },
];

const StyledApp = styled.main`
  max-width: 700px;
  width: 500px;
`;

export default function App() {
  return (
    <StyledApp>
      <Movies initialMovies={initialMovies} />
    </StyledApp>
  );
}
