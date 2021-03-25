import React, { Component } from "react";
import { PlayerContext } from "../data/PlayerContext";
// import axios from "axios";
export default class AddPlayer extends Component {
  //  declare state with required properties
  static contextType = PlayerContext;

  constructor() {
    super();
    this.state = {
      name: "",
      country: "",
      matchesPlayed: "",
    };
  }

  submitHandler(e) {
    e.preventDefault();
    const [players, setPlayers] = this.context;

    const newPlayer = {
      name: this.state.name,
      country: this.state.country,
      matchesPlayed: this.state.matchesPlayed,
    };

    // console.log(newPlayer);
    this.setState({ name: "", country: "", matchesPlayed: "" });
    alert("Added Player Successfully");
    fetch("http://localhost:3333/players", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPlayer),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPlayers([...players, data]);
      });
    // declare and initialise players ,setPlayers from context
    // use axios.post to send new player data to json api
    // and store the same to context also using setPlayer

    // reset the text fields and show acknowledgement
  }
  render() {
    return (
      <div>
        <form
          onSubmit={(e) => {
            this.submitHandler(e);
          }}
          style={{ width: "80%", margin: "40px" }}
        >
          <div className="form-group">
            <label htmlFor="playername">Player Name</label>
            <input
              className="form-control input-field"
              id="name"
              value={this.state.name}
              onChange={(e) => this.setState({ name: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="country">Country</label>
            <input
              className="form-control input-field"
              id="country"
              value={this.state.country}
              onChange={(e) => this.setState({ country: e.target.value })}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Matches Played</label>
            <input
              className="form-control input-field"
              value={this.state.matchesPlayed}
              onChange={(e) => this.setState({ matchesPlayed: e.target.value })}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Add Player
          </button>
        </form>
        {/* display form to accept name,country and matchesPlayed  of a player */}
      </div>
    );
  }
}
AddPlayer.contextType = PlayerContext;
