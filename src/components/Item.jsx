import React from "react";

const Item = ({ item, setItems, handleDelete }) => {
  return (
    <li>
      <input type="checkbox" />
      {/* style={item.packed ? { textDecoration: "line-through" } : {} */}
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
