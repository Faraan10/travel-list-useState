import React from "react";

const Item = () => {
  return (
    <li>
      <input type="checkbox" />
      {/* <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span> */}
      <button>❌</button>
    </li>
  );
};

export default Item;
