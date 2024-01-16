import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Second from "./Second";
import Start from "./Start";

const App = () => {
  const [message, setMessage] = useState([]);

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Start />}></Route>
        <Route path="/second" element={<Second />}></Route>
      </Routes>
    </Router>
  );
};

export default App;
