import React,{useState} from 'react'

const Nameststechange = () => {
    let[name, setName]=useState("jo");
    let[age, setAge]=useState(20);
    let changeData=()=>{
        setName("carlos");
        setAge(40);
    };
  return (
    <div><h1> Name:{name}</h1>
    <h1>Age:{age}</h1>
    <button onClick={changeData}>change data</button>
    </div>
  )
}

export default Nameststechange;