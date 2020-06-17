import React, { Component } from "react";

class Table extends Component {

  function(props) {
    render() {
      return (

        <table className="justify-content-center table table-hover table-striped table-sm">
          <thead className="thead-light">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Fidsfrst</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{props.expense}</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colspan="2">Larry the Bird</td>
            </tr>
          </tbody>
        </table>

// props.expenses.map({ expenses })

    )
    }
  };
};
export default Table;