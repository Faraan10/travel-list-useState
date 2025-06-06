import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  // console.log(items);

  const addItems = (data) => {
    setItems((prevItems) => [...prevItems, data]);
  };

  const toggleItem = (data) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === data ? { ...item, packed: !item.packed } : item
      )
    );
  };

  const handleDelete = (data) => {
    setItems((prevItems) => prevItems.filter((item) => item.id != data));
  };

  const clearList = () => {
    setItems([]);
  };

  return (
    <>
      <Logo />
      <Form addItems={addItems} />
      <PackingList
        items={items}
        toggleItem={toggleItem}
        handleDelete={handleDelete}
        clearList={clearList}
      />
      <Stats items={items} />
    </>
  );
};
export default App;
