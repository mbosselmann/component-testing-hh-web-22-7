import { uid } from "uid";
import { useState } from "react";
import styled from "styled-components";
import Form from "../Form/Form.js";
import Movie from "../Movie/Movie.js";

const MovieList = styled.ul`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default function Movies({ initialMovies = [] }) {
  const [movies, setMovies] = useState(initialMovies);

  function handleAddMovie(newMovie) {
    setMovies([...movies, { id: uid(), ...newMovie }]);
  }
  function handleDeleteMovie(id) {
    setMovies(movies.filter((movie) => movie.id !== id));
  }

  function handleToggleLike(id) {
    setMovies(
      movies.map((movie) =>
        movie.id === id ? { ...movie, isLiked: !movie.isLiked } : movie
      )
    );
  }

  return (
    <>
      <h1>Favorite Movies</h1>
      <MovieList>
        {movies.map((movie) => (
          <li key={movie.id}>
            <Movie
              name={movie.name}
              isLiked={movie.isLiked}
              onDeleteMovie={() => handleDeleteMovie(movie.id)}
              onToggleLike={() => handleToggleLike(movie.id)}
            />
          </li>
        ))}
      </MovieList>
      <Form onAddMovie={handleAddMovie} />
    </>
  );
}
