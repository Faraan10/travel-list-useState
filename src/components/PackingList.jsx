import React from "react";
import Item from "./Item";

const PackingList = ({
  items,
  setItems,
  handleToggle,
  handleDelete,
  handleClear,
}) => {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            setItems={setItems}
            handleToggle={handleToggle}
            handleDelete={handleDelete}
          />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option>Sort by input order</option>
          <option>Sort by description</option>
          <option>Sort by packed status</option>
        </select>
        <button onClick={() => handleClear()}>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
