import React from "react";

const Stats = ({ items }) => {
  let packed = items.filter((item) => item.packed).length;
  // console.log(packed);
  const percentage = Math.round((packed / items.length) * 100);
  console.log(percentage);

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
