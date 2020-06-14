import React, { Component } from "react";
import Form from "../../components/Form"
import Table from "../../components/Table"

class Singlepage extends Component {

  state = {
    expenseList: [
      {
        id: 1,
        value: 1,
      },
      {
        id: 2,
        value: 5,
      },
      {
        id: 3,
        value: 9,
      },
    ]
  }



  render() {
    console.log(this.state.expenseList)
    return (
      <>
        <div className="container-fluid">

          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-4">React Budget Tracker</h1>
              <p className="lead">A reflection of your spending habits...</p>
            </div>
          </div>


          <Form />
          <Table />
        </div>
      </>
    )
  }
};

export default Singlepage;