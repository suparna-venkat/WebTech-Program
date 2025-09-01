import React from 'react';
import Child2 from './Child2';

const Parent2 = () => {
  let employee = {
    eName: "tamizh",
    eSalary: 10000000,
    eId: 101,
    eDesignation: "thief",
    eDoesExist: true,
    eStatus: undefined,
    eJob: null,
  };

  return (
    <div>
      <h1>Parent2</h1>
      <Child2 employee={employee} />
    </div>
  );
};

export default Parent2 ;
