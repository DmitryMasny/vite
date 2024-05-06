import { Box, css, styled } from "@mui/material";
import { useState } from "react";
import reactLogo from "./assets/react.svg";

import { Button } from "ui";

import viteLogo from "/vite.svg";
import "./App.css";

const StyledButton = styled(Button)(
  ({ theme }) => css`
    color: ${theme.palette.primary.light};
  `,
);

const StyledBox = styled(Box)`
  background-color: black;
  ${StyledButton} {
    color: blue;
  }
`;

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <StyledBox>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>

        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
      </StyledBox>
      <h1>Vite + React</h1>
      <div className="card">
        <StyledButton onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </StyledButton>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
