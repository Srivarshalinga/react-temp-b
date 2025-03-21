import React from 'react'
import { useState, useEffect } from "react";

export default function App8() {
    const [numbers,setNumbers] = useState([]);
    const [number, setNumber] = useState();
    const handleSubmit = () =>{
        setNumbers([...numbers, number]);
    }
    const [total, setTotal] = useState(0);
    useEffect(() => {  //any change happens at numbers then it will be called; useeffect is called at initial load(if numbers is not specified)
        setTotal(
            numbers.reduce((s,number) =>{ 
                return s+Number(number);
            },0)
        )
        // // const sum = number.reduce((s,value) =>{ 
        //     return s+value;
        // });
        
    }, [numbers]);
  return (
    <div>
        <input type="number" placeholder="enter number" onChange={(event)=> setNumber(event.target.value)}></input>
        <button onClick={handleSubmit}>Submit</button>
        <hr></hr>
        {numbers && numbers.map((value, index) => 
            <div key={index}>{value}</div>
        )}
        <p>Total:{total}</p>
    </div>
  );
}
