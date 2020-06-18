import React, { Component } from "react";

class Table extends Component {

    render() {
      return (

        <table className="justify-content-center table table-hover table-striped table-sm">
          <thead className="thead-light">
            <tr>
              <th scope="col">Expense History</th>
            </tr>
          </thead>
          <tbody>
            {this.props.expenseList.map(expense => (
              <tr>{expense.value}</tr>
            ))}
          </tbody>
        </table>


    )
    }
  };
export default Table;