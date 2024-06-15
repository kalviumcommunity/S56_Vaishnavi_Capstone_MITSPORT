import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import About from "./Pages/About";
import Detail from "./Pages/Detail";
import Contact from "./Pages/contact";
import Register from "./Pages/Register";
import Batch from "./Pages/Batch";
import UpdateForm from "./Pages/Updateform";
import Signup from "./Pages/Signup";
import Welcome from "./Pages/Welcome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/detail" element={<Detail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/register" element={<Register />} />
        <Route path="/batch" element={<Batch />} />
        <Route path="/updateform/:id" element={<UpdateForm />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
