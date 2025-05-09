import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  console.log(items);

  const handleAdd = (data) => {
    // console.log(data);
    setItems((prevItems) => [...prevItems, data]);
  };

  return (
    <>
      <Logo />
      <Form handleAdd={handleAdd} />
      <PackingList item={items} />
      <Stats />
    </>
  );
};
export default App;
