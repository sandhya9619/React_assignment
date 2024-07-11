import React from 'react'
import { useNavigation } from 'react-router-dom'

export default function Loginpage() {
  return (
    <div style={{border:"1px solid ",width:"30%",textAlign:"center",margin:"0 auto ",marginTop:"100px",padding:"30px",}}>
      <h2>login page</h2>
      <input type="text" placeholder='Enter your name' />
      <br />
      <br /><input type="text" placeholder='Enter your Email' />
      <br /> 
      <br />
      <input type="text" placeholder='Enter your Password' /> <br />
      <br />
      <button>login</button>
    </div>
  )
}
