import React, { Component } from 'react';
import logo from './logo.svg';
import './Search.css';
import Sugg from './Sugg';

class Search extends Component {
  constructor(props)  {
    super(props);
    this.onSearch = this.onSearch.bind(this);
    this.handleClickedItem = this.handleClickedItem.bind(this);
    this.onClick = this.onClick.bind(this);
    this.state = {
      companies: [],
      searchedList: [],
      value: ''
    }
 }
 componentDidMount() {
  this.fetchApi();
  console.log(this.state.companies);
}
 fetchApi = ()=> {
   const url = 'https://autocomplete.clearbit.com/v1/companies/suggest?query={companyName}';
   fetch(url)
   .then( (response) => {
    let myData = response.json()
    return myData;
   })
   .then((value) => {
    let companies = value.map((company, i) => {
      this.setState({
        companies: [...this.state.companies, company]
      })
     })
     console.log(this.state.companies);
   });
  }
  onSearch(arr){
    // this.setState({companies: arr});
  };
  handleInputChange = () => {
    console.log(this.search.value);
    let searched = [];
    this.state.companies.map((company, i) => {
      console.log(company.name);
      console.log(company.domain);
      const tempName = company.name.toLowerCase();
      const tempDomain = company.domain.toLowerCase();
      if(tempName.includes(this.search.value.toLowerCase()) || tempDomain.includes(this.search.value.toLowerCase())) {
        searched.push(company);
      }
    })
    console.log(searched);

    this.setState({
      searchedList: searched
    })
    if(this.search.value == '') {
      this.setState({
        searchedList: []
      })
    }
  }
  handleClickedItem(data) {
    console.log(data);
  }

  onClick = e => {
    console.log(e.target.value)
    this.setState({ value: e.target.value});
  };
  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <img src={logo} className="Search-logo" alt="logo" />
          <h1 className="Search-title">Welcome to React</h1>
        </header>
        <form>
        <input
          placeholder="Search for..."
          ref={input => this.search = input}
          onChange={this.handleInputChange}

        />
          <Sugg searchedList={this.state.searchedList} onClick={this.onClick.bind(this)} />
      </form>
      </div>
    );
  }
}

export default Search;
