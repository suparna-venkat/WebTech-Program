import React from 'react';

const Childcomponent = (props) => {
  console.log(props);

  return (
    <div>
      <h1>Childcomponent</h1>
      <h2>Name: {props.name}</h2>
      <h2>Age: {props.age}</h2>
    </div>
  );
};

export default Childcomponent;
