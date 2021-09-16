import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Second from "./Second";
import Start from "./Start";

const App = () => {
  const [message, setMessage] = useState([]);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Start message={message} setMessage={setMessage} />
        </Route>
        <Route path="/second">
          <Second />
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
