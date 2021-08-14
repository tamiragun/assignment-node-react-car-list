import React from "react";
import { EditCar } from "./EditCar";

export function Car(props) {
  return (
    <div>
      <div>
        <p>
          Make: {props.car.make}
          <br></br>
          Model: {props.car.model}
          <br></br>
          Seats: {props.car.seats}
        </p>
      </div>
      <div>
        <a>Delete this car</a>
        <EditCar />
        <button onClick={props.goBack}>Go back</button>
      </div>
    </div>
  );
}
