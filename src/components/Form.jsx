import { useState } from "react";

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select></select>
      <input type="text" placeholder="Item..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
