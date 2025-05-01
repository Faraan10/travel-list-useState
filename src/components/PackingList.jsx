import React, { useState } from "react";
import Item from "./Item";

const PackingList = ({
  items,
  setItems,
  handleToggle,
  handleDelete,
  handleClear,
}) => {
  const [sortBy, setSortBy] = useState("input");
  // console.log(sortBy);

  let sortedItems = items;

  if (sortBy === "input") {
    sortedItems = items;
  }
  if (sortBy === "description") {
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }

  if (sortBy === "packed") {
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  }

  return (
    <div className="list">
      <ul>
        {sortedItems?.map((item) => (
          <div key={item.id}>
            <Item
              item={item}
              setItems={setItems}
              handleToggle={handleToggle}
              handleDelete={handleDelete}
            />
          </div>
        ))}
      </ul>

      <div className="actions">
        <select
          name="sortBy"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={handleClear}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
