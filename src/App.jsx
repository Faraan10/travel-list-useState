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

  const deleteItem = (id) => {
    // console.log(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Logo />
      <Form handleAdd={handleAdd} />
      <PackingList items={items} deleteItem={deleteItem} />
      <Stats />
    </>
  );
};
export default App;
