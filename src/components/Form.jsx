import React, { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({
    id: "",
    description: "",
    quantity: "",
    packed: false,
  });

  const handleChange = () => {};

  const handleSubmit = () => {};

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input type="text" placeholder="Item..." />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
