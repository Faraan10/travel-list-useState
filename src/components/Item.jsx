import React from "react";

const Item = ({ item, handleToggle, handleDelete }) => {
  // console.log(item);

  return (
    <li>
      <input
        type="checkbox"
        // value={item.packed}
        onClick={() => handleToggle(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      {/* style={{ textDecoration: "line-through" }} */}
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
