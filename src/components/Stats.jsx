import React from "react";

const Stats = ({ items }) => {
  const packedItems = items.filter((item) => item.packed).length;

  return (
    <footer className="stats">
      {items.length == 0
        ? "Start adding some items to your packing list 🚀"
        : `You have ${items.length} items on your list and you already packed ${packedItems}`}
    </footer>
  );
};

export default Stats;
