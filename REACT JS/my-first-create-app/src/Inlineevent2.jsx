import React from 'react';

const Inlineevent2 = () => {
  let handleclick = () => {
    alert("button clicked");
  };

  return (
    <div>
      <h1>Inlineevent2</h1>
      <button onClick={handleclick}>Click Me</button>
    </div>
  );
};

export default Inlineevent2;
