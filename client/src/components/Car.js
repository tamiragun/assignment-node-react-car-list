import React from "react";
import { EditCar } from "./EditCar";

export function Car(props) {
  const [editCar, setEditCar] = React.useState(false);

  const handleClick = (e) => {
    props.deleteCar(e.target.value);
    props.goBack();
  };

  const toggleEdit = () => {
    setEditCar(!editCar);
  };

  return (
    <div className="single-car">
      <h3>My selected car</h3>
      <div className="car-bullet">
        <p>
          <strong>Make: </strong>
          {props.car.make}
          <br></br>
          <strong>Model: </strong>
          {props.car.model}
          <br></br>
          <strong>Seats: </strong>
          {props.car.seats}
        </p>
      </div>
      <div className="buttons">
        <button value={props.car.id} onClick={handleClick}>
          Delete this car
        </button>
        <button onClick={toggleEdit}>Edit this car</button>
        <button onClick={props.goBack}>Go back</button>
      </div>
      <div>
        {editCar && (
          <EditCar
            updateCar={props.updateCar}
            carId={props.car.id}
            goBack={props.goBack}
          />
        )}
      </div>
    </div>
  );
}
