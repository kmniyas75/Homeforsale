import React from 'react'
import { useParams } from 'react-router-dom';
import data from '../data';

export default function HouseDetailedScreen() {
  const params =useParams();
  const {slugs}= params;

  const datas= data.houses.filter(e=>e.slug==slugs)
  return (
    datas.map(e=>(
      <div className='container d-flex' style={{height:"100vh"}}>
        <div><img className='img-fluid' src={e.img} alt={e.type}/></div>
      <div>
        <h1>{e.price}$</h1>
        <h3>{e.address}</h3>
        <h3>{e.country}</h3>
      <h4>{e.description}</h4>
      </div>
      
    </div>
    ))
    
    
  )
}
