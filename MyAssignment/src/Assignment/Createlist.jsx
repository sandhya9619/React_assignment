import React, { useState } from 'react'

export default function Createlist() {
    let [name,setName]=useState('');
    const [list,setList]=useState([]);

    const handleclick=()=>{
        console.log("clicked");
        setList([...list,name])
        console.log(list);
        // setList("")
    }
  return (
    <div><input type="text" placeholder='Enter name'  onChange={(e)=>setName(e.target.value)} />
    <button onClick={handleclick}>click</button>
    {
        list.map((e,i)=>
            {
                return <li key={i}>{e}</li>
            })
    }
    </div>
  )
}
