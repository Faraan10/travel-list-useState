const Item = ({ item, handleDelete }) => {
  return (
    <li>
      <input type="checkbox" />
      <span>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => handleDelete(item.id)}>❌</button>
    </li>
  );
};

export default Item;
