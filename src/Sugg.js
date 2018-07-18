import React from 'react';


const Sugg = (props) => {
    console.log(props);
    const options = props.searchedList.map((company, i) => (
        <div key={i} >
        <p onClick={() => this.props.onClick(this.props)}>{company.name}</p>
        </div>
    ))
    console.log(options);
    return <div >{options}</div>
  }

export default Sugg;
