import React, { Component } from "react";
import Form from "../../components/Form"
import Table from "../../components/Table"

class Singlepage extends Component {

  state = {
    expenseList: []
  }

  addExpense = (expense) => {
    this.setState({ expenseList:[...this.state.expenseList, expense] })
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


          <Form addExpense={this.addExpense}/>
          <Table expenseList={this.state.expenseList} />
        </div>
      </>
    )
  }
};

export default Singlepage;