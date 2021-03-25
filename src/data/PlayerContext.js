import React, { useState, createContext, useEffect } from "react";
// import axios from "axios";
import { BrowserRouter } from "react-router-dom";
// import Header from "../components/Header";
// import AddPlayer from "../components/AddPlayer";
// import ShowPlayer from "../components/ShowPlayer";
import App from "../App";
// import AddPlayer from "../components/AddPlayer";
// import ShowPlayer from "../components/ShowPlayer";

export const PlayerContext = createContext();

export const PlayerProvider = () => {
  const [players, setPlayers] = useState([]);
  // declare the player hook here

  useEffect(() => {
    fetch("http://localhost:3333/players")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlayers(data);
        return data;
      })
      .catch((err) => {
        // console.log("Unable to fetch", err);
        return err;
      });
  }, []);
  // initialise player array using axios get method from json file
  // using json server api

  return (
    <BrowserRouter>
      {/* <Header text="PlayerApp" /> */}
      <PlayerContext.Provider value={[players, setPlayers]}>
        <App />
        {/* <ShowPlayer />
        <AddPlayer /> */}
        {/* <Switch>
          <Route exact path="/ShowPlayer" component={ShowPlayer} />
          <Route exact path="/AddPlayer" component={AddPlayer} />
        </Switch> */}
      </PlayerContext.Provider>
    </BrowserRouter>
  );
};
