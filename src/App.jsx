import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  // console.log(items);

  const handleAdd = (data) => {
    // console.log(data);
    setItems((prevItems) => [...prevItems, data]);
  };

  const toggleItem = (id) => {
    // console.log(id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const deleteItem = (id) => {
    // console.log(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <>
      <Logo />
      <Form handleAdd={handleAdd} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        clearList={clearList}
        toggleItem={toggleItem}
      />
      <Stats />
    </>
  );
};
export default App;
