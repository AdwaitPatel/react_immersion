import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";

const data = {
  name: "Adwait Patel",
  headerName: "GLA Section PRF A"
};

function add (a, b) {
    return a+b
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <App name="Adwait" /> */}
    <App data={data} add={add}/>
    {/* <App data={data} {...data} /> */}
    
  </StrictMode>,
);
