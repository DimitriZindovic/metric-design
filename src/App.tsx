import React from "react";
import Button from "./components/Button";


function App() {
    return <Button onClick={() => alert("Button clicked!")}>
      Click Me! 
    </Button>;
}

export default App;
