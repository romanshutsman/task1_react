import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      companies: []
    }
 }
 
 fetchApi = ()=> {
   const url = 'https://autocomplete.clearbit.com/v1/companies/suggest?query={companyName}';
   fetch(url)
   .then( (response) => {
    let myData = response.json()
    return myData;
   })
   .then((value) => {
     console.log(value);
    let companies = value.map((company, i) => {
      return (
        <div key={i}>
          <h1>{company.name}</h1>
          <img src={company.logo} alt="logo" />
          <h3>{company.domain}</h3>
        </div>
      );
     })
     this.setState({companies: companies});
     console.log(this.state.companies);
   });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <div>
          {this.state.companies}
        </div>
        <button onClick={this.fetchApi}>fetchApi</button>
      </div>
    );
  }
}

export default App;
