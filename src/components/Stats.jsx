import React from "react";

const Stats = ({ items }) => {
  const packedItems = items.filter((item) => item.packed).length;

  const percentage = Math.round((packedItems * 100) / items.length);
  // console.log(percentage);

  return (
    <footer className="stats">
      {items.length === 0
        ? "Start adding some items to your packing list 🚀"
        : packedItems === items.length
        ? "You are all set to go ✈️"
        : `You have ${items.length} items on your list and you already packed ${packedItems} (${percentage}%)`}
    </footer>
  );
};

export default Stats;
