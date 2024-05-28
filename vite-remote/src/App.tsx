import { Box, styled } from "@mui/material";
import { getList, getUser } from "api/jsonplaceholder.ts";
import { useCallback, useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";

import { Button } from "ui";

import viteLogo from "/vite.svg";
import "./App.css";

const StyledBox = styled(Box)`
  background-color: black;
`;

function App() {
  const [name, setName] = useState("");
  const [list, setList] = useState([]);

  useEffect(() => {
    getUser().then(({ data }) => {
      setName(`${data.firstname} ${data.lastname} `);
    });
  }, []);

  const handleGetList = useCallback(() => {
    getList().then(({ data }) => {
      setList(data);
    });
  }, []);

  console.info("list", list);

  return (
    <>
      <StyledBox>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </StyledBox>
      <h1>Hi {name}</h1>
      <div className="card">
        <Button onClick={handleGetList}>GET 23</Button>
      </div>
    </>
  );
}

export default App;
