import React, { useState } from 'react'

export default function Createlist() {
  let [name, setName] = useState();
  const [list, setList] = useState([]);

  const handleclick = () => {
    console.log("clicked");
    setList([...list, name])
    console.log(list);
    // setName("")
    // setList("")
  }
  return (
    <div style={{border:"1px solid black", width:"30%",height:"300px",padding:"10px",backgroundColor:"green"}}>

      <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} />
      <button onClick={handleclick}>click</button>
      {
        list.map((e, i) => {
          return <li key={i} style={{backgroundColor:"whitesmoke",width:"220px",margin:"10px"}}>{e}</li>
        })
      }
    </div>
  )
}
