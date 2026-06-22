import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const data = {
  name: "Adwait Patel",
};

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App name="Adwait" /> */}
    <App data={data} />
  </StrictMode>,
);
