import React, { Component } from "react"

class Form extends Component {
  // Setting the component's initial state
  state = {
    oneExpense: 0,
    sum: 0,
  };

  handleInputChange = event => {
    // Getting the value and name of the input which triggered the change
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    // console.log(event.target.value);
    this.props.addExpense({value: this.state.oneExpense});
    // let expenseArray = this.state.expenses;
    let addingBox = this.state.sum + parseFloat(this.state.oneExpense);
    // expenseArray.push(this.state.oneExpense)
    this.setState({
    //   expenses: expenseArray,
      sum: addingBox
    });

    // console.log(this.state.oneExpense, this.state.sum, this.state.expenses);

  };



  render() {
    // console.log(this.state.oneExpense, this.state.sum, this.state.expenses);
    return (
      <div>
        <p>
         Sum Total of Expenses: {this.state.sum}
        </p>
        <form className="form">
          <input
            type="number"
            value={this.state.oneExpense}
            name="oneExpense"
            onChange={this.handleInputChange}
            placeholder="enter your expense"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;