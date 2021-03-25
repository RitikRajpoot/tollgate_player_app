import "./App.css";
import React from "react";
import Header from "./components/Header";
import AddPlayer from "./components/AddPlayer";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ShowPlayer from "./components/ShowPlayer";
// import { PlayerProvider } from "./data/PlayerContext";

function App() {
  return (
    <div className="App" style={{ width: "100%" }}>
      <Router>
        {/* <PlayerProvider> */}
        <Header text="PlayerApp" />
        <Switch>
          <Route exact path="/" />
          <Route exact path="/AddPlayer" component={AddPlayer} />
          <Route exact path="/ShowPlayer" component={ShowPlayer} />
        </Switch>
        {/* add Header component add route for - /(show blank page),AddPlayer
        ,ShowPlayer */}
        {/* </PlayerProvider> */}
      </Router>
    </div>
  );
}

export default App;
