import React from 'react';

const Child2 = (props) => {
  console.log(props);
  let { eName, eSalary, eId, eDesignation } = props.employee ;

  return (
    <div>
      <h1>Child2</h1>
      <h2>empname: {eName}</h2>
      <h2>empsalary: {eSalary}</h2>
      <h2>empid: {eId}</h2>
      <h2>empdes: {eDesignation}</h2>
    </div>
  );
};

export default Child2 ;
