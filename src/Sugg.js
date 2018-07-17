import React from 'react';


const Sugg = (props) => {
    console.log(props);
    const options = props.searchedList.map((company, i) => (
        <div key={i} >
          <h1>{company.name}</h1>
          <img src={company.logo} alt="logo" />
          <h3>{company.domain}</h3>
        </div>
    ))
    console.log(options);
    return <div >{options}</div>
  }

export default Sugg;
