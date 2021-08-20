const path = require("path");
const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//Parse all body data to JSON:
app.use(express.json());

//Import the list of cars from a json file
const cars = require("./cars.json");

//Set latestId, to be updated each time a new car is added.
let latestId = 2;

//Check if a given car id is in the list, and return the index
app.param("id", (req, res, next, id) => {
  let carId = Number(id);
  try {
    const found = cars.findIndex((car) => {
      return carId === car.id;
    });
    if (found !== -1) {
      req.carIndex = found;
      next();
    } else {
      res.status(404).send("No such car found");
    }
  } catch (err) {
    next(err);
  }
});

//Disable CORS
app.use((req, res, next) => {
  res.header({ "Access-Control-Allow-Origin": "*" });
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  );
  next();
});

//GET endpoint that returns an array of cars:
app.get("/api", (req, res) => {
  res.json({ cars: cars });
});

//GET endpoint that displays a car with a given id
app.get("/api/:id", (req, res) => {
  const carToDisplay = cars[req.carIndex];
  res.send(carToDisplay);
});

//POST endpoint that adds a car to the array:
app.post("/api", (req, res) => {
  if (req.body.make && req.body.model && req.body.seats) {
    const id = latestId + 1;
    latestId++;
    const newCar = {
      id: id,
      make: req.body.make,
      model: req.body.model,
      seats: Number(req.body.seats),
    };
    cars.push(newCar);
    res.status(201).send(newCar);
  } else {
    res.status(400).send("Please provide make, model and seats.");
  }
});

//DELETE endpoint that deletes a car with a given id
app.delete("/api/:id", (req, res) => {
  const carToDelete = cars[req.carIndex];
  cars.splice(req.carIndex, 1);
  res.send(carToDelete);
});

//PUT endpoint that updates a car with a given id and seats or model
app.put("/api/:id", (req, res) => {
  //If neither model nor seats are provided, give error message
  if (!req.body.model && !req.body.seats) {
    res.status(400).send("Please enter the new model and/or seats value");
  }
  //If the model is given, update the object
  if (req.body.model) {
    cars[req.carIndex].model = req.body.model;
  }
  //If the seats are given, update the object
  if (req.body.seats) {
    cars[req.carIndex].seats = Number(req.body.seats);
  }
  const updatedCar = cars[req.carIndex];
  res.send(updatedCar);
});

// Have Node serve the files for our built React app

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
  // All other GET requests not handled before will return our React app
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

//app.use(express.static(path.resolve(__dirname, "../client/build")));
// All other GET requests not handled before will return our React app
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
// });

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
