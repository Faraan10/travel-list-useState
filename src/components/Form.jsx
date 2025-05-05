import React, { useState } from "react";

const Form = ({ handleAddItems }) => {
  const [info, setInfo] = useState({
    id: "",
    description: "",
    quantity: 1,
    packed: false,
  });

  const { description, quantity, packed } = info;

  const handleChange = (e) => {
    setInfo((prevData) => ({
      ...prevData,
      [e.target.name]:
        e.target.name === "quantity" ? Number(e.target.value) : e.target.value,
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(info);
    if (!description) {
      return;
    }

    const newData = {
      id: crypto.randomUUID(),
      description: description,
      quantity: quantity,
      packed: packed,
    };

    setInfo({
      id: "",
      description: "",
      quantity: 1,
      packed: false,
    });

    handleAddItems(newData);
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity" value={quantity} onChange={handleChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((item) => (
          <option key={item} value={item}>
            {item}
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
