import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({ items, toggleItem, deleteItem, clearList }) => {
  let sortedItems = items;

  const [sortBy, setSortBy] = useState("input");

  if (sortBy === "input") {
    sortedItems = items;
  }

  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }
  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <Item
            key={item.id}
            item={item}
            toggleItem={toggleItem}
            deleteItem={deleteItem}
          />
        ))}
      </ul>

      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
