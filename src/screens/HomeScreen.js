import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function HomeScreen() {
    const navigate =useNavigate()
  return (
    <div className='d-flex align' style={{backgroundColor:"blue", height:"100vh"}}>
        <div className='d-flex self-align'>

        <div className=''>
            <div className=''>
                <h1 style={{fontSize:"4rem",color:"white"}}>Estary</h1>
                <h1>New Way to<br/>Buy & Rent Houses</h1>
            </div>
            
        </div>
        
        <div className='btn'>
            <button onClick={()=>navigate("./buy")} style={{fontSize:"1.5rem"}}>Buy House</button>
            <button style={{marginLeft:"1rem",fontSize:"1.5rem"}} onClick={()=>navigate("./rent")} >Rent House</button>
        </div>
        
        </div>
    </div>
  )
}
