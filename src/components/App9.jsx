import React from 'react'
import { useState,useEffect } from "react";

export default function App9() {
    const [v1,setV1] = useState(0);
    const [v2, setV2] = useState(0);
    const [total, setTotal] = useState(0);
    useEffect(() => {
        setTotal(Number(v1)+ Number(v2))
    },[v1])
    useEffect(() => {
        setTotal(Number(v1)* Number(v2))
    },[v2])
  return (
    <div>
        <input type="number" placeholder="Enter a number" onChange={(event => setV1(event.target.value))}></input><br/><br/>
        <input type="number" placeholder="Enter a number" onChange={(event => setV2(event.target.value))}></input>
        <p>Total: {total}</p>
    </div>
  )
}
