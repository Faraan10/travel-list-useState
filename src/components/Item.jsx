const Item = ({ item, toggleItem, handleDelete }) => {
  return (
    <li>
      <input type="checkbox" onClick={() => toggleItem(item.id)} />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
