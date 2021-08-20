import React from "react";

export function CarList(props) {
  const cars = props.cars;
  const handleClick = (e) => {
    props.displayCar(e.target.value);
  };
  const carList = cars.map((car) => {
    return (
      <li key={car.id} className="car-bullet">
        <p>
          <strong>Make: </strong>
          {car.make} <br></br>
          <strong>Model: </strong>
          {car.model} <br></br>
          <strong>Seats: </strong>
          {car.seats}
        </p>

        <button value={car.id} onClick={handleClick}>
          View, edit, or delete this car
        </button>
      </li>
    );
  });

  return (
    <div>
      <h3>All my cars:</h3>
      <ul className="cars-list">{carList}</ul>
    </div>
  );
}
