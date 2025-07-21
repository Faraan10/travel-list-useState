import { useState } from "react";

const Form = () => {
  const [info, setInfo] = useState({
    id: "",
    description: "",
    packed: false,
    quantity: 1,
  });

  const { id, description, packed, quantity } = info;

  const handleChange = (e) => {
    setInfo({
      ...info,
      [e.target.name]:
        e.target.name === "quantity" ? Number(e.target.value) : e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newData = {
      id: crypto.randomUUID(),
      description: description,
      packed: packed,
      quantity: quantity,
    };
    console.log(newData);

    // AddItem(newData);

    setInfo({
      id: "",
      description: "",
      packed: false,
      quantity: 1,
    });
  };
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your 😍 trip?</h3>
      <select name="quantity" value={quantity} onChange={handleChange}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((i) => (
          <option key={i} value={i}>
            {i}
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
