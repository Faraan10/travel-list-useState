import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";
import { useState } from "react";

const App = () => {
  const [items, setItems] = useState([]);
  return (
    <>
      <Logo />
      <Form />
      <PackingList item={items} />
      <Stats />
    </>
  );
};
export default App;
