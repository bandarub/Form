import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import injectTapEventPlugin from "react-tap-event-plugin";
import orderBy from "lodash/orderBy";

import logo from "./logo.svg";
import "./App.css";
import Form from "./Form";
import Table from "./Table";
import "./Form.css";
import "./Table.css";

injectTapEventPlugin();

const invertDirection = {
  asc: "desc",
  desc: "asc"
};

class App extends Component {
  state = {
    data: [
      {
        fullName: "John Doe",
        email: "john.doe@gmail.com",
        phone: "0405678471"
      },
      {
        fullName: "George Clooney",
        email: "george.clooney@hollywood.com",
        phone: "0404629898"
      },
      {
        fullName: "T Gounin",
        email: "t.gounin0@wordpress.com",
        phone: "0405678231"
      },
      {
        fullName: "Justine Henderson",
        email: "justine.henderson.@live.com",
        phone: "0503568936"
      },
      {
        fullName: "Mathias Little",
        email: "Mathias.Little@wordpress.com",
        phone: "0506897230"
      },
      {
        fullName: "Angela Walker",
        email: "Angela.Walker@twitter.com",
        phone: "0124589630"
      },
      {
        fullName: "Waylon Dalton",
        email: "Waylon.Dalton@wordpress.com",
        phone: "0124589635"
      },
      
    ],
    editIdx: -1,
    columnToSort: "",
    sortDirection: "desc"
  };

  handleRemove = i => {
    this.setState(state => ({
      data: state.data.filter((row, j) => j !== i)
    }));
  };

  startEditing = i => {
    this.setState({ editIdx: i });
  };

  stopEditing = () => {
    this.setState({ editIdx: -1 });
  };

  handleChange = (e, name, i) => {
    const { value } = e.target;
    this.setState(state => ({
      data: state.data.map(
        (row, j) => (j === i ? { ...row, [name]: value } : row)
      )
    }));
  };
  
  handleSave = (i, x) => {
    this.setState(state => ({
      data: state.data.map((row, j) => (j === i ? x : row))
    }));
    this.stopEditing();
  };

  handleSort = columnName => {
    this.setState(state => ({
      columnToSort: columnName,
      sortDirection:
        state.columnToSort === columnName
          ? invertDirection[state.sortDirection]
          : "asc"
    }));
  };

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Form
            onSubmit={submission =>
              this.setState({
                data: [...this.state.data, submission]
              })
            }
          />
          <Table
            handleSort={this.handleSort}
            handleRemove={this.handleRemove}
            startEditing={this.startEditing}
            editIdx={this.state.editIdx}
            stopEditing={this.stopEditing}
            handleChange={this.handleChange}
            columnToSort={this.state.columnToSort}
            sortDirection={this.state.sortDirection}
            data={orderBy(
              this.state.data,
              this.state.columnToSort,
              this.state.sortDirection
            )}
            header={[
              {
                name: "Full name",
                prop: "fullName"
              },
              {
                name: "Email",
                prop: "email"
              },
              {
                name: "Phone",
                prop: "phone"
              }
            ]}
          />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;