import React from 'react'

const list = () => {
    let names=[
        "john🦋",
        "don🥶",
        "mohan🌻",
        "rohan✨"

    ];
    console.log(names);
  return (
    <div><h1>names</h1>
    <ul>
        {names.map((map,index)=>{
            return <li key={index}>{error}</li>;
        }
        )
        };
    </ul>

    </div>
  );
};

export default list;