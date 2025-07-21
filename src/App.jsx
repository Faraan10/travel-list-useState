import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (data) => {
    console.log(data);
    setItems((prevItems) => [...prevItems, data]);
  };
  console.log(items);

  const removeItem = (id) => {
    // console.log(id);
    setItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <Logo />
      <Form addItem={addItem} />
      <PackingList items={items} removeItem={removeItem} />
      <Stats />
    </>
  );
};
export default App;
