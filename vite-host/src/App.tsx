import "./App.css";

// import { lazy } from "react";

import { Button } from "remote/ui";
import Remote from "remote/app";
// import { Button as Button2 } from "remote2/ui";

function App() {
  return (
    <>
      <Button>123</Button>
      {/*<Button2 variant="asd">456</Button2>*/}
      <Remote />
    </>
  );
}

export default App;
