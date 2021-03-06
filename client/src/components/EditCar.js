import React from "react";

export class EditCar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { model: "", seats: 0 };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUserInput(e) {
    const id = e.target.id;
    if (id === "model") {
      this.setState({ model: e.target.value });
    } else if (id === "seats") {
      this.setState({ seats: e.target.value });
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCar(this.props.carId, this.state.model, this.state.seats);
    this.setState({ model: "", seats: 0 });
    this.props.goBack();
  }

  render() {
    return (
      <div>
        <h3>Edit car model or seats</h3>
        <form onSubmit={this.handleSubmit} className="car-form">
          <label htmlFor="model">Model:</label>
          <input
            id="model"
            type="text"
            value={this.state.model}
            onChange={this.handleUserInput}
          ></input>
          <br></br>
          <label htmlFor="seats">Seats:</label>
          <input
            id="seats"
            type="number"
            value={this.state.seats}
            onChange={this.handleUserInput}
          ></input>
          <br></br>
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}
