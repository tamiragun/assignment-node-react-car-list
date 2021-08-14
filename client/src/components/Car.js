import React from "react";
import { EditCar } from "./EditCar";

export class Car extends React.Component {
  render() {
    return (
      <div>
        <div>
          <p>Make: {this.props.make}</p>
          <p>Model: {this.props.model}</p>
          <p>Seats: {this.props.seats}</p>
        </div>
        <div>
          <a>Delete this car</a>
          <EditCar />
          <a>Go back</a>
        </div>
      </div>
    );
  }
}
