import styled from "styled-components";

const Title = styled.h2`
  font-size: 1.7rem;
  margin: 0;
  opacity: ${(props) => (props.isLiked ? "1" : "0.5")};
`;

const Button = styled.button`
  border: none;
  background-color: var(--granite);
  color: var(--foam);
  border-radius: 50%;
  width: 2em;
  height: 2em;

  &:hover {
    background-color: var(--nemo);
  }
`;

const Actions = styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
`;

const StyledMovie = styled.article`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 8px 16px;
  margin: -8px -16px;
  border-radius: 4px;

  &:hover {
    background-color: var(--water);
  }
`;

export default function Movie({
  name,
  isLiked = false,
  onDeleteMovie,
  onToggleLike,
}) {
  return (
    <StyledMovie>
      <Title isLiked={isLiked}>{name}</Title>
      <Actions>
        <Button
          type="button"
          aria-label={isLiked ? `unlike ${name}` : `like ${name}`}
          onClick={onToggleLike}
        >
          {isLiked ? "👍" : "👎"}
        </Button>
        <Button
          type="button"
          aria-label={`delete ${name}`}
          onClick={onDeleteMovie}
        >
          ✕
        </Button>
      </Actions>
    </StyledMovie>
  );
}
