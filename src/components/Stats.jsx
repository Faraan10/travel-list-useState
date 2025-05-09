import React from "react";

const Stats = ({ items }) => {
  const packed = items.filter((item) => item.packed).length;
  const percentage = Math.round((packed / items.length) * 100);
  return (
    <footer className="stats">
      {items.length > 0 ? (
        <em>
          You have {items.length} items on your list, and you have packed{" "}
          {packed} ({percentage}%)
        </em>
      ) : (
        <em>Start adding some items to your packing list</em>
      )}
    </footer>
  );
};

export default Stats;
