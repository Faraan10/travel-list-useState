import React from "react";

const Item = ({ item, toggleItem, deleteItem }) => {
  // console.log(item);

  return (
    <li>
      <input type="checkbox" onClick={() => toggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => deleteItem(item.id)}>❌</button>
    </li>
  );
};

export default Item;
