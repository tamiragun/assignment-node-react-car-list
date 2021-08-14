import React from "react";
import { EditCar } from "./EditCar";

export function Car(props) {
  const handleClick = (e) => {
    console.log(e.target.value);
    props.deleteCar(e.target.value);
    props.goBack();
  };

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
        <button value={props.car.id} onClick={handleClick}>
          Delete this car
        </button>
        <EditCar />
        <button onClick={props.goBack}>Go back</button>
      </div>
    </div>
  );
}
