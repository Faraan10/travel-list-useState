import React from "react";

const Form = () => {
  return (
    <form className="add-form">
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {/* {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))} */}
      </select>
      <input type="text" placeholder="Item..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
