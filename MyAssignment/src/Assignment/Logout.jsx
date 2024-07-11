import React from 'react'
import { useNavigate, useNavigation } from 'react-router-dom'

export default function Logout() {
  const navigate = useNavigate ();
  return (
    <div>
    <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'space-between',padding:"20px",borderRadius:"10px" }}>
        <h1>NavBar</h1>
        <button style={{ borderRadius: '20px', width: '100px', height: '50px', marginTop: '10px' }} onClick={()=>navigate("./login")}>Logout</button>
    </div>

    <div style={{height:'320px'}}>
        <h1 style={{margin:'0 auto',textAlign:'center'}}>public views</h1>
    </div>

    <div style={{ backgroundColor: 'blue', color: 'white', display: 'flex', justifyContent: 'space-between',padding:"20px",borderRadius:"10px" }}>
        <h1>Footer</h1>
    </div>
</div>
  )
}
