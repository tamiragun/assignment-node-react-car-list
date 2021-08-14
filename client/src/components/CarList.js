import React from "react";

export function CarList(props) {
  const cars = props.cars;
  const carList = cars.map((car) => {
    return (
      <li key={car.id} className="car-bullet">
        <p>
          Make: {car.make} <br></br>
          Model: {car.model} <br></br>
          Seats: {car.seats}
        </p>
        <a href="http://localhost:3000/">View, edit, or delete this car</a>
      </li>
    );
  });

  return <ul className="cars-list">{carList}</ul>;
}
