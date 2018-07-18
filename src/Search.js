import React, { Component } from "react";
import Sugg from "./Sugg";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      companies: [],
      searchedList: [],
      value: "",
      text: "",
      searchedCompanyName: '',
      searchedCompanyLogo: '',
      searchedCompanyDomain: ''
    };
  }
  componentDidMount() {
    this.fetchApi();
  }
  fetchApi = () => {
    const url =
      "https://autocomplete.clearbit.com/v1/companies/suggest?query={companyName}";
    fetch(url)
      .then(response => {
        let myData = response.json();
        return myData;
      })
      .then(value => {
        this.setState({
          companies: value
        });
      });
  };

  handleInputChange = event => {
    let searchText = event.target.value.toLowerCase();
    let searched = [];
    if (searchText == '') {
      this.setState({searchedCompanyName: ''})
      this.setState({searchedCompanyLogo: ''})
      this.setState({searchedCompanyDomain: ''})
    }
    if (searchText !== "") {
      this.state.companies.map(company => {
        if (
          company.name.toLowerCase().includes(searchText) ||
          company.domain.toLowerCase().includes(searchText)
        ) {
          searched.push(company);
        }
      });
    }
    this.setState({
      searchedList: searched,
      text: searchText
    });
  };

  onClick = name => {
    const arr = [];
    console.log(name);
    this.search = name;
    this.setState({ text: name });
    console.log(this.state.searchedList);
    this.state.searchedList.map((company) => {
      if (company.name == name) {
        console.log(company.name);
        this.setState({searchedCompanyName: company.name})
        this.setState({searchedCompanyLogo: company.logo})
        this.setState({searchedCompanyDomain: company.domain})
      }
    });
    this.setState({ searchedList: [] });
    console.log(this.state.searchedCompanyName);
  };

  render() {
    return (
      <div className="Search">
        <header className="Search-header">
          <h1 className="Search-title">Welcome to React</h1>
        </header>
        <form>
          <input
            placeholder="Search for..."
            onChange={this.handleInputChange}
            value={this.state.text}
          />
          {this.state.searchedList.map(company => (
            <Sugg onClick={this.onClick} company={company} />
          ))}
        </form>
        <h1>{this.state.searchedCompanyName}</h1>
        <img src={this.state.searchedCompanyLogo} alt="" />
        <p>{this.state.searchedCompanyDomain}</p>
      </div>
    );
  }
}

export default Search;
