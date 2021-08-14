import React from "react";
import { CarList } from "./components/CarList";
import { AddCar } from "./components/AddCar";
import { Car } from "./components/Car";
import "./App.css";

function App() {
  const [cars, setCars] = React.useState(null);
  const [newCar, setNewCar] = React.useState(null);
  const [car, setCar] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => {
        setCars(data.cars);
      });
  }, [cars]);

  const addNewCar = (make, model, seats) => {
    console.log(`Add car with make :${make}, model: ${model}, seats: ${seats}`);
    setNewCar({ make: make, model: model, seats: seats });
    const newCar = { make: make, model: model, seats: seats };
    console.log(newCar);

    const newCarMake = make;
    const newCarModel = model;
    const newCarSeats = seats;
    const url = `http://localhost:3001/api?make=${newCarMake}&model=${newCarModel}&seats=${newCarSeats}`;
    fetch(url, {
      method: "POST",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newCar),
    })
      .then((response) => console.log(response))
      //.then((response) => response.json())
      //.then((data) => {
      //  console.log("Success:", data);
      //})
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const displayCar = (id) => {
    const url = `http://localhost:3001/api/${id}`;
    fetch(url)
      //.then((response) => {
      //  console.log(response);
      //})
      .then((response) => response.json())
      .then((data) => {
        console.log("Success, displaying: ", data);
        setCar(data.carToDisplay);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const goBack = () => {
    setCar(null);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>My favourite cars</h1>
      </header>
      <div>
        {!car ? (
          !cars ? (
            "Loading..."
          ) : (
            <div>
              <AddCar addNewCar={addNewCar} />
              <CarList cars={cars} displayCar={displayCar} />
            </div>
          )
        ) : (
          <Car car={car} goBack={goBack} />
        )}
      </div>
    </div>
  );
}

export default App;
