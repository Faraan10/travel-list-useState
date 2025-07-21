import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);

  const addItem = (data) => {};
  return (
    <>
      <Logo />
      <Form addItem={addItem} />
      <PackingList />
      <Stats />
    </>
  );
};
export default App;
