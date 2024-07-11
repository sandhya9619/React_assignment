import React, { useState } from 'react'

export default function TodoApp() {
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
    <div style={{border:"1px solid black", width:"90%",height:"200%",padding:"10px",backgroundColor:"black"}}>
        <div style={{backgroundColor:"purple", width:"100%",height:"200%",textAlign:"center",}}>

        {
          list.map((e, i) => {
              return <li key={i} style={{backgroundColor:"whitesmoke",width:"40%",margin:"10px",padding:"10px",marginLeft:"40px"}}>{e}</li>
              
            })
        }
      <input type="text" placeholder='Enter name' onChange={(e) => setName(e.target.value)} style={{marginTop:"250px",padding:"10px 30px"}} />
      <button onClick={handleclick}  style={{marginTop:"250px",padding:"10px 30px",margin:"10px"}}>click</button>
    
        </div>
    </div>
  )
}
