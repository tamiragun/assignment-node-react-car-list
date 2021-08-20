import React from "react";

export class AddCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { make: "", model: "", seats: 0 };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    const id = e.target.id;
    if (id === "make") {
      this.setState({ make: e.target.value });
    } else if (id === "model") {
      this.setState({ model: e.target.value });
    } else if (id === "seats") {
      this.setState({ seats: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.addNewCar(this.state.make, this.state.model, this.state.seats);
    this.setState({ make: "", model: "", seats: 0 });
  }

  render() {
    return (
      <div className="add-car">
        <h3>Add a new car</h3>
        <form onSubmit={this.handleSubmit} className="car-form">
          <label htmlFor="make">Make:</label>
          <input
            id="make"
            type="text"
            value={this.state.make}
            onChange={this.handleUserInput}
            required
          ></input>
          <br></br>
          <label htmlFor="model">Model:</label>
          <input
            id="model"
            type="text"
            value={this.state.model}
            onChange={this.handleUserInput}
            required
          ></input>
          <br></br>
          <label htmlFor="seats">Seats:</label>
          <input
            id="seats"
            type="number"
            value={this.state.seats}
            onChange={this.handleUserInput}
            min="1"
            required
          ></input>
          <br></br>
          <button type="submit">Add car</button>
        </form>
      </div>
    );
  }
}
