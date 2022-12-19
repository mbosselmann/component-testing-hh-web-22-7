import styled from "styled-components";
import HomePage from "./pages/HomePage.js";

const StyledApp = styled.div`
  width: min(500px, 100% - 2rem);
`;

export default function App() {
  return (
    <StyledApp>
      <HomePage />
    </StyledApp>
  );
}
