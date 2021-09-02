import React, { Component } from "react";

class FilterString extends Component {
  //Variables
  constructor() {
    super();
    this.state = {
      unfilteredNames: ["Jim", "Suzy", "Bob", "Fran"],
      userInput: "",
      filteredNames: [],
    };
  }
  //Functions

  filtering(userInput) {
    let unfilteredNames = this.state.unfilteredNames;
    let filteredN = [];

    for (let i = 0; i < unfilteredNames.length; i++) {
      if (unfilteredNames[i] !== userInput) {
        filteredN.push(unfilteredNames[i]);
      }
    }
    this.setState({ filteredNames: filteredN });
  }

  //Return
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>Filter String</h4>
        <span className="puzzleText">
          Unfiltered Names:{" "}
          {JSON.stringify(this.state.unfilteredNames, null, 10)}
        </span>
        <input
          className="inputLine"
          type="text"
          onChange={(ev) => this.setState({userInput: ev.target.value})}
        />
        <button
          className="confirmationButton"
          onClick={() => this.filtering(this.state.userInput)}
        >
          Filter
        </button>
        <span className="resultsBox filterObjectRB">
          filteredNames: {JSON.stringify(this.state.filteredNames, null, 10)}
        </span>
      </div>
    );
  }
}
export default FilterString;
