import React from "react";
import Item from "./Item";

const PackingList = ({ items, deleteItem }) => {
  return (
    <div className="list">
      <ul>
        {items?.map((item) => (
          <Item key={item.id} item={item} deleteItem={deleteItem} />
        ))}
      </ul>

      <div className="actions">
        <select>
          <option>Sort by input order</option>
          <option>Sort by description</option>
          <option>Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
