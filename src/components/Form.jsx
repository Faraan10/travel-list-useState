import React, { useState } from "react";

const Form = ({ handleAddItem }) => {
  const [data, setData] = useState({
    id: "",
    description: "",
    quantity: 1,
    packed: false,
  });

  const { id, description, quantity, packed } = data;

  const handleChange = (e) => {
    setData((prevData) => ({
      ...prevData,
      [e.target.name]:
        e.target.name === "quantity" ? Number(e.target.value) : e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(data);

    if (!description) {
      return;
    }

    const newData = {
      id: crypto.randomUUID(),
      description: description,
      quantity: quantity,
      packed: packed,
    };

    handleAddItem(newData);

    setData({
      id: "",
      description: "",
      quantity: 1,
      packed: false,
    });
  };
  // console.log(items);

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity" value={quantity} onChange={handleChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
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
