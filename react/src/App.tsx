import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home"

export const Routing = () => {
    return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

// conditional rendering
export const Dashboard = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isStudent = isLoggedIn ?? true;
  // const isLoggedIn = true;
  // if (isLoggedIn) {
  //     return (
  //         <div>Dashboard Page</div>
  //     )
  // }
  return (
    // make a student card displays this data
    /* 
        [
            {
                name, rollno, age, cpi
            }
        ]
    */ 
    <>
      {isLoggedIn ? <h1>Dashboard</h1> : <h1>Login Page</h1>}
      <button
        onClick={() => {
          setIsLoggedIn(!isLoggedIn);
        }}
      >
        {isLoggedIn ? "Logout" : "Login"}
      </button>
      {isLoggedIn && <h1>Hello user</h1>}
      {(isLoggedIn || isStudent) && <h1>Welcome.....</h1>}
    </>
  );
};

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
      <button
        onClick={() => {
          increment();
        }}
      >
        Increment
      </button>
      <Footer />
    </>
  );
}

export const Greet = () => {
  const [greet, setGreet] = useState("");
  return (
    <>
      <h1>{greet}</h1>
      <input
        onChange={(e) => {
          setGreet(`Hello ${e.target.value}`);
        }}
      />
    </>
  );
};

export default App;
