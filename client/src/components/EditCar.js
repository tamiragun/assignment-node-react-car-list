import React from "react";

export class EditCar extends React.Component {
  render() {
    return (
      <div>
        <h3>Edit car</h3>
        <form>
          <label htmlFor="model">Model:</label>
          <input id="model" type="text"></input>
          <label htmlFor="seats">Seats:</label>
          <input id="seats" type="number"></input>
          <button type="submit">Edit car</button>
        </form>
      </div>
    );
  }
}
