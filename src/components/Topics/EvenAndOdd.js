import React, { Component } from "react";

class EvenAndOdd extends Component {
  //Variables

  //Functions
  constructor() {
    super();
    this.state = {
      evenArray: [],
      oddArray: [],
      userInput: "",
    };
  }
  //fuction/method to take input, get the value and update userInput with it
  handleUserInput = (event) => {
    const { value } = event.target;

    this.setState({
      userInput: value,
    });
  };

  findEvenOdd = (userInput) => {
    // Given a string of numbers separated by commas, split the numbers into two different arrays. The first being an array of all the even numbers and the second being an array of all the odd numbers.
    // Change string to a number
    let arr = userInput.split(",");
    let evens = [];
    let odds = [];

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evens.push(+arr[i]);
      } else {
        odds.push(+arr[i]);
      }
    }

    this.setState({ evenArray: evens, oddArray: odds });

    //Remove comma, switch to
  };

  //Return
  render() {
    console.log(this.state);
    return (
      <div className="puzzleBox evenAndOddPB">
        <h4>Even and Odds</h4>
        <input
          className="inputLine"
          type="text"
          onChange={this.handleUserInput}
        />
        <button
          className="confirmationButton"
          onClick={() => {
            this.findEvenOdd(this.state.userInput);
          }}
        >
          Pow!
        </button>
        <span className="resultsBox">
          Evens: {JSON.stringify(this.state.evenArray)}{" "}
        </span>
        <span className="resultsBox">
          Odds: {JSON.stringify(this.state.oddArray)}{" "}
        </span>
      </div>
    );
  }
}

export default EvenAndOdd;
