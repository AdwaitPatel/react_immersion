import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

// import App from "./App.tsx";
// import { Greet, Dashboard } from "./App.tsx";
// import RegistrationForm from "./components/RegistrationForm.tsx";

// const data = {
//   name: "Adwait Patel",
//   headerName: "GLA Section PRF A",
// };

// function add(a, b) {
//   return a + b;
// }

// import App from "./App2.tsx";
import App from "./App3.tsx";
import ContextDemo from "./components/ContextDemo.tsx";
import { UserProvider } from "./components/UserContext.tsx";


import { createContext, useState } from "react";

export const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App name="Adwait" /> */}
    {/* <App data={data} add={add}/> */}
    {/* <App data={data} {...data} /> */}
    {/* <Greet /> */}
    {/* <RegistrationForm /> */}

    {/* Conditional Rendering */}
    {/* <Dashboard /> */}

    {/* Routing */}
    {/* <App /> */}


    {/* Context */}
    <ThemeProvider>
      {/* <ContextDemo /> */}
      <App />
    </ThemeProvider>




  </StrictMode>,
);



