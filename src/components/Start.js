import React, { useEffect } from "react";
import { getSomething } from "../api";
import { useNavigate } from "react-router-dom";

const Start = ({ message, setMessage }) => {
  let history = useNavigate();

  // useEffect(() => {
  //   getSomething()
  //     .then((response) => {
  //       console.log(response.message);
  //       // setMessage(response.message);
  //     })
  //     .catch((error) => {
  //       setMessage(error.message);
  //     });
  // });

  function handleClick() {
    history("/second");
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
