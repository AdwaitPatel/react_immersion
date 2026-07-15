import { useContext } from "react";
import { ThemeContext } from "../main";

function ContextDemo() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "white" : "#222",
        color: theme === "light" ? "black" : "white",
        minHeight: "100vh",
        padding: "20px",
      }}
    >
      <h1
        style={{
          color: theme === "light" ? "black" : "white",
        }}
      >
        {theme} Theme
      </h1>

      <button onClick={toggleTheme}>Toggle Theme</button>
    </div>
  );
}

export default ContextDemo;
