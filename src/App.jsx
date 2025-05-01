import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((prevItems) => [...prevItems, item]);
  };

  const handleToggle = (id) => {
    // console.log(id);
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  };
  // console.log(items);

  const handleDelete = (id) => {
    setItems((prevItems) => prevItems.filter((item) => item.id != id));
  };

  const handleClear = () => {
    setItems([]);
  };
  return (
    <>
      <Logo />
      <Form setItems={setItems} handleAddItem={handleAddItem} />
      <PackingList
        items={items}
        setItems={setItems}
        handleToggle={handleToggle}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
      <Stats />
    </>
  );
};
export default App;
