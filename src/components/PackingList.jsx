import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, handleToggle, handleDelete, handleClear }) => {
  let sortedItems;

  const [sorted, setSorted] = useState("input");

  if (sorted === "input") {
    sortedItems = items;
  }

  if (sorted === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sorted === "status") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item
            item={item}
            key={item.id}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sorted} onChange={(e) => setSorted(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="status">Sort by packed status</option>
        </select>
        <button onClick={() => handleClear()}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
