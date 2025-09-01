import React, { useState } from 'react';

const Form1 = () => {
    let [firstname,setFirstname]=useState("");
    let [lastname,setLastname]=useState("");
    let[email,setEmail]=useState("");
    let[password,setPassword]=useState("");

    let handleChangeForFirstName=(e)=>{
    let value=e.target.value;
    setFirstname(value);
    };
    
    let handleChangeForLastName=(e)=>{
        let value=e.target.value;
        setLastname(value);
    };
    let handleChangeForEmail=(e)=>{
    let value=e.target.value;
    setEmail(value);
    };
    let handleChangeForPassword=(e)=>{
        let value=e.target.value;
        setPassword(value);
    }
    let handleSubmit=(e)=>{
        e.preventDefault();
        console.log("Form Submitted");
        console.log("FirstName",firstname);
        console.log("LastName",lastname);
        console.log("Email",email);
        console.log("Password",password);
        
        
        
    }
  return (
    <div>
         <h1 className='text-center text-[25px] '>Log In</h1>
         <form  onSubmit={handleSubmit} className=' flex justify-center items-center '>
           
            <fieldset className='border bg-gray-900 w-[300px] h-[350px] text-white rounded-md p-2.5'>
            <label htmlFor=""  >FirstName:</label>
            <input type="text"  className='border border-none bg-gray-800 rounded-md flex mt-2 ml-[40px]' value={firstname} name="firstname" onChange={handleChangeForFirstName}/>
         
         <label htmlFor=""  >LastName:</label>
            <input type="text"  className='border  border-none bg-gray-800 rounded-md flex mt-2 ml-[40px]' value={lastname} name="lastname" onChange={handleChangeForLastName}/>
            <label htmlFor="" >Email:</label>
            <input type="email"  className='border border-none bg-gray-800 rounded-md flex mt-2 ml-[40px]' value={email} name="email" onChange={handleChangeForEmail}/>
            <label >Password:</label>
            <input type="password"  className='border border-none bg-gray-800 rounded-md flex mt-2 ml-[40px]' value={password} name="password" onChange={handleChangeForPassword}/>
          <button className="border text-[15px] p-1 border-none bg-gray-800 ml-[200px] mt-14 rounded-md">Submit</button>
          </fieldset>
         </form>
    </div>
  );
};

export default Form1;