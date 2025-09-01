import React from 'react'

const Eventwithparams = () => {
    let handleclick =(name)=> {
        alert('hello how r u? ${name}');
    };
  return (
    <div>
        <button onClick={()=> handleclick("john")}>click me</button>
    </div>
  );
};

export default Eventwithparams;