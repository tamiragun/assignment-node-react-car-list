import React from "react";
import { EditCar } from "./EditCar";

export function Car(props) {
  const handleClick = (e) => {
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
        <EditCar
          updateCar={props.updateCar}
          carId={props.car.id}
          goBack={props.goBack}
        />
        <button onClick={props.goBack}>Go back</button>
      </div>
    </div>
  );
}
