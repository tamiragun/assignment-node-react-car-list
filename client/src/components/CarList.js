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
          Make: {car.make} <br></br>
          Model: {car.model} <br></br>
          Seats: {car.seats}
        </p>

        <button value={car.id} onClick={handleClick}>
          View, edit, or delete this car
        </button>
      </li>
    );
  });

  return <ul className="cars-list">{carList}</ul>;
}
