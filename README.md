# Save my favourite cars

This was an assignment for the Node.js portion of my coding bootcamp. It is a basic car list that allows a user to see a list of their cars, edit the cars, delete the cars, or add new cars.

**Stack used**: JavaScript - Node - React - CSS - Heroku

## The brief

These were the detailed instructions for the assignment:

- Create a Restful API using Node that will allow the user to store a list of cars. - When the user navigates to ‘ http://localhost:8080/api ’ an array of car items should be returned. E.g. of array: [{"id": 1, "make":
  "Mercedes-Benz", "model": "A-class", "seats": 5}, {"id": 2, "make":"Land Rover", "model": "Defender 90", "seats": 6}] - The user should be able to make an HTTP Post request that adds an additional item to the list of cars. - The user should be able to make an HTTP Delete request that deletes an item with a specific id from the list. - The user should be able to make an HTTP Put request to update the model or number of seats of a car.
- Create an attractive React front-end that can be used to interact with the cars API you built.
  - You should be able to use your React front-end to get a list of cars, add additional cars to the list, modify the details about a specific car and delete a car from the list.
- Deploy this app to Heroku.

## My contribution

Some of the files and folders in this repository are React-generated files. The code I wrote can be found in:

- /client/src/
- /server

## How to install this project

You can see the project live at: https://car-list-exercise.herokuapp.com/. Or if you want to play around with the code yourself, follow these steps:

1. Clone the repository on Github into a directory of your choice.
2. If you don't already have Node and Npm installed, go ahead and do that first.
3. Navigate to the directory where you saved the repository, and open a new terminal window. Type `npm install` to get the node modules on your local computer.
4. Type `npm start` to get the server up and running.
5. Open a new terminal and cd into the 'client' folder. Type `npm start` there too to open the front-end app in a new browser tab.
