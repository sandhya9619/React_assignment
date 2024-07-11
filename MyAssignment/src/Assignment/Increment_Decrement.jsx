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
    <div style={{border:"1px solid black", width:"30%",height:"300px",textAlign:"center",marginLeft:"420px"}}>
        <h1>Counter App</h1>
        <h1 style={{fontSize:"40px"}}>{number}</h1>
        <button style={{backgroundColor:"green", border:"2px solid grey",padding:"10px",width:"110px",borderRadius:"5px"}} onClick={handleincrement}>Increment</button>
        <button style={{backgroundColor:"red", border:"2px solid grey",padding:"10px",width:"110px",borderRadius:"5px",margin:"10px"}}  onClick={handledecrement}>Decrement</button>
        <br />
        <button style={{backgroundColor:"grey",color:"white", border:"2px solid grey",padding:"10px",width:"110px",borderRadius:"5px"}} onClick={handlereset}>Reset</button>
    </div>
  )
}
