import React, { useState } from "react";

const Form = ({ handleAdd }) => {
  const [form, setForm] = useState({
    id: "",
    description: "",
    quantity: 1,
    packed: false,
  });

  const { description, quantity, packed } = form;

  const handleChange = (e) => {
    setForm((prevData) => ({
      ...prevData,
      [e.target.name]:
        e.target.name === "quantity" ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!description.trim()) {
      return;
    }

    const newData = {
      id: crypto.randomUUID(),
      description: description,
      quantity: quantity,
      packed: packed,
    };
    handleAdd(newData);
    setForm({
      id: "",
      description: "",
      quantity: 1,
      packed: false,
    });
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select onChange={handleChange} name="quantity" value={quantity}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((number) => (
          <option value={number} key={number}>
            {number}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        name="description"
        value={description}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default Form;
