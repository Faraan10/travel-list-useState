const Item = () => {
  return (
    <li>
      <input type="checkbox" />
      {/* style={item.packed ? { textDecoration: "line-through" } : {}} */}
      <span></span>
      <button>❌</button>
    </li>
  );
};

export default Item;
