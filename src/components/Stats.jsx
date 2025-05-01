import React from "react";

const Stats = ({ items }) => {
  console.log(items);

  return (
    <footer className="stats">
      {items.length > 0 ? (
        <em>
          You have {items.length} {items.length > 1 ? "items" : "item"} on your
          list, and you already packed
        </em>
      ) : (
        <em>Start adding some items to your packing list</em>
      )}
    </footer>
  );
};

export default Stats;
