import React from "react";

const Item = () => {
  return (
    <li>
      <input type="checkbox" />
      {/* style={item.packed ? { textDecoration: "line-through" } : {} */}
      <span>quantity and desc</span>
      <button>❌</button>
    </li>
  );
};

export default Item;
