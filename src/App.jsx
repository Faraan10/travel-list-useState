import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const handleAddItems = (data) => {
    // console.log(data);
    setItems((prevItems) => [...prevItems, data]);
  };

  const handleToggle = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  // console.log(items);

  const handleDelete = (id) => {
    // console.log(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  const handleClear = () => {
    setItems([]);
  };
  return (
    <>
      <Logo />
      <Form handleAddItems={handleAddItems} />
      <PackingList
        items={items}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
      <Stats items={items} />
    </>
  );
};
export default App;
