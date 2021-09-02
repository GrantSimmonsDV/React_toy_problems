import React, { Component } from "react";

class FilterObject extends Component {
  //Variables
  constructor() {
    super();
    this.state = {
      unFilteredArray: [
        {
          name: "Jimmy",
          age: 3,
          shoeSize: 5,
        },
        {
          name: "John",
          age: 10,
        },
        {
          name: "Dan",
          age: 15,
          shoeSize: 10,
        },
      ],
      userInput: "",
      filteredArray: [],
    };
  }
  //Functions
  handleUserInput(value) {
    this.setState({
      userInput: value,
    });
  }

  filterObj(userInput) {
    let unFilteredArray = this.state.unFilteredArray;
    let filteredArr = [];

    for (let i = 0; i < unFilteredArray.length; i++) {
      if (unFilteredArray[i].hasOwnProperty(userInput)) {
        filteredArr.push(unFilteredArray[i]);
      }
    }

    this.setState({ filteredArray: filteredArr });
  }

  //Return
  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter Object</h4>
        <span className="puzzleText">
          unFilteredArray:{" "}
          {JSON.stringify(this.state.unFilteredArray, null, 10)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={(event) => this.handleUserInput(event.target.value)}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filterObj(this.state.userInput)}
        >
          Sort
        </button>
        <span className="resultsBox filterObjectRB">
          filteredArray: {JSON.stringify(this.state.filteredArray, null, 10)}
        </span>
      </div>
    );
  }
}
export default FilterObject;
