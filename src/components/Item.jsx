import React from "react";

const Item = ({ item, handleToggle, handleDelete }) => {
  return (
    <li>
      <input type="checkbox" onClick={() => handleToggle(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
