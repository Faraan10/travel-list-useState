import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, toggleItem, handleDelete, clearList }) => {
  const [data, setData] = useState("input");

  console.log(data);

  let sortedItems = items;

  if (data == "input") {
    sortedItems = items;
  }

  const handleChange = (e) => {
    setData(e.target.value);
  };

  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div className="actions">
        <select onChange={handleChange}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
