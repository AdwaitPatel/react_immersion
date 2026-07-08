import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import Home from "./pages/Home";
import Student from "./pages/Student";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        
        <Route path="/student/:id" element={<Student />} />
        {/* For query params */}
        <Route path="/student" element={<Student />} />
      </Routes>
    </BrowserRouter>
  );
}



export default App;
