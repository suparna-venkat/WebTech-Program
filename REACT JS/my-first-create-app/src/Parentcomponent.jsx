import React from 'react';
import Childcomponent from './childcomponent';

const Parentcomponent = () => {
  return (
    <div>
      <h1>Parentcomponent</h1>
      <Childcomponent name="soup" age={18} />
    </div>
  );
};

export default Parentcomponent;
