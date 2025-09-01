import React from 'react';

const FormComponent = () => { 
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", e);
    console.log("Form target:", e.target);
  };

  let handleChange = (e) => {
    console.log("Typed value:", e.target.value);
  };

  return (
    <div>
      <h1>Form</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
