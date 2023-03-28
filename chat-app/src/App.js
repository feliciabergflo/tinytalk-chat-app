import React from "react";
import Home from ".components/home/Home";
import LoggedOut from ".components/loggedOut/LoggedOut";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Home />
      <LoggedOut />
    </div>
  );
}

export default App;
