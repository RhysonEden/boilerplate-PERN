import React, { useEffect } from "react";
import { getSomething } from "../api";
import { useHistory } from "react-router-dom";

const Start = ({ message, setMessage }) => {
  let history = useHistory();

  useEffect(() => {
    getSomething()
      .then((response) => {
        console.log(response.message);
        // setMessage(response.message);
      })
      .catch((error) => {
        setMessage(error.message);
      });
  });

  function handleClick() {
    history.push("/second");
  }
  return (
    <div className="App">
      <h1>Hello, World!</h1>
      <h2>{message}</h2>
      <button onClick={handleClick}>Second</button>
    </div>
  );
};

export default Start;
