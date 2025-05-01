import React from "react";

const Stats = ({ items }) => {
  console.log(items);

  const packed = items.filter((item) => item.packed).length;
  // console.log(packed);

  return (
    <footer className="stats">
      {items.length > 0 ? (
        <em>
          You have {items.length} {items.length > 1 ? "items" : "item"} on your
          list, and you already packed {packed}
        </em>
      ) : (
        <em>Start adding some items to your packing list</em>
      )}
    </footer>
  );
};

export default Stats;
