import React, { useContext } from "react";
import { PlayerContext } from "../data/PlayerContext";

export default function ShowPlayer() {
  // initialise the player info using useContext hook
  const players = useContext(PlayerContext)[0];

  return (
    <div className="data-table" style={{ width: "95vw" }}>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Player Id</th>
            <th scope="col">Name</th>
            <th scope="col">Country</th>
            <th scope="col">Total Match Played</th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, key) => (
            <tr key={key}>
              <th scope="row">{player.id}</th>
              <td>{player.name}</td>
              <td>{player.country}</td>
              <td>{player.matchesPlayed}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
