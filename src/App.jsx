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
        setItems={setItems}
        handleDelete={handleDelete}
        handleClear={handleClear}
      />
      <Stats />
    </>
  );
};
export default App;
