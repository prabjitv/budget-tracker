import React, {Component} from "react"

class Form extends Component {
  // Setting the component's initial state
  state = {
    expense: 0,
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

    // Alert the user their first and last name, clear `this.state.expense` and `this.state.lastName`, clearing the inputs
    this.setState({
      expense: this.state.expense + 1,
    });
    console.log(this.state.expense);

  };

toSum = event => {

}


  render() {
    // Notice how each input has a `value`, `name`, and `onChange` prop
    return (
      <div>
        <p>
          Expense: {this.state.expense} 
        </p>
        <form className="form">
          <input
            value={this.state.expense}
            name="expense"
            onChange={this.handleInputChange}
            type="text"
            placeholder="Expense"
          />
          <button onClick={this.handleFormSubmit}>Submit</button>
        </form>
      </div>
    );
  }
}
export default Form;