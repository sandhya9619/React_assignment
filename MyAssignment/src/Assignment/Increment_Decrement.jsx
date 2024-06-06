import React, { useState } from 'react'

export default function Increment_Decrement() {
    const [number,setNumber]=useState(0)

    const handledecrement=()=>{
        console.log("clicked");
        setNumber(number-1);

    }

    const handleincrement=()=>{
        console.log("clicked");
        setNumber(number+1);
        console.log(number);

    }

    const handlereset =()=>{
        setNumber(0)
    }

  return (
    <div>
        <h3>React Web</h3>
        <h1 >{number}</h1>
        <button onClick={handledecrement}>Decrement</button>
        <button onClick={handleincrement}>Increment</button>
        <br />
        <button onClick={handlereset}>Reset</button>
    </div>
  )
}
