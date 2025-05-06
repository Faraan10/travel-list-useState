import React from "react";

const Stats = ({ items }) => {
  return (
    <footer className="stats">
      {items.length > 0 ? (
        <em>{items.length} have been packed</em>
      ) : (
        <em>Start adding some items to your packing list</em>
      )}
    </footer>
  );
};

export default Stats;
