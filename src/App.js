//jshint esversion:6
import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Join from "./component/Join/Join.js";
import Chat from "./component/Chat/Chat.js";


function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<Join />} />
      <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
