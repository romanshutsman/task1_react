import React, { Component } from "react";
class Sugg extends Component {
  constructor(props) {
    super(props);
    this.state = {
      company: props.company
    };
  }
  onClick = () => {
    console.log(this.state.company);
    this.props.onClick(this.state.company.name);
  };
  render() {
    return (
      <div>
        <p onClick={this.onClick}>{this.state.company.name}</p>
      </div>
    );
  }
}
export default Sugg;
