import React, { useState } from "react";
import Item from "./Item";

const PackingList = () => {
  return (
    <div className="list">
      <ul></ul>

      <div className="actions">
        <select>
          <option>Sort by input order</option>
          <option>Sort by description</option>
          <option>Sort by packed status</option>
        </select>
        <button>Clear list</button>
      </div>
    </div>
  );
};

export default PackingList;
