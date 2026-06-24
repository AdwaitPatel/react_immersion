import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

// props = data
function App(props) {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  console.log("Props Data : ", props);
  const { data } = props;
  const { name = data.name } = data;
  const { headerName = data.headerName } = data;

  return (
    <>
      <Header headerName={headerName} />
      <h1 style={{ marginTop: "300px" }}>{name}</h1>
      <h1>{props.add(34, 545)}</h1>
      <h2>Count : {count}</h2>
      <button onClick={increment}>Increment</button>
      <Footer />
    </>
  ); 
}

export default App;
