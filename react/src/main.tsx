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

import App from "./App2.tsx";

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
    <App />
  </StrictMode>,
);
