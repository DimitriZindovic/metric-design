import React from "react";
import Button from "./Components/Button/button";

function App() {
    return <Button onClick={() => alert("Button clicked!")}>
      Click Me! 
    </Button>;
}

export default App;
