import React from "react";
import { useState } from "react";
export default function App6() {
  const [hobby, setHobby] = useState([]); //hobby is an array variable
  const [text, setText] = useState();
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = () => {
    const isExistingItem = hobby.includes(text);
    if(isExistingItem){
     setErrorMessage("User Already exists..");
    }else{
    setHobby([...hobby, text]);
    setErrorMessage("");
    }
  };
  const handleDelete = (value) => {
    setHobby(hobby.filter((element) => element!=value));
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Enter your hobby"
        onChange={(event) => setText(event.target.value)}
      ></input>
      <button onClick={handleSubmit}>Add</button>
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}

      <hr></hr>
      {hobby && hobby.map((value, index) => <li key={index}>
        {value} - 
        <button onClick={() => handleDelete(value)}>Delete</button>
      </li>)}
    </div>
  );
}