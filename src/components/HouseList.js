import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from '../data.js'

export default function HouseList() {
    let locations = data.houses.map(a=>a.country)
    let properties = data.houses.map(a=>a.type)
    function removeDuplicates(arr) {return arr.filter((item,index) => arr.indexOf(item) === index);}
    

    const [location,setLocation] =useState("--");
    const [price,setPrice] =useState("--");
    const [property,setProperty] =useState("--");
    
    const range=price.split("-");
    let min=range[0];
    let max=range[1];

    function sortOut(){
        console.log('im in buddy')
        if(location==="--" && price==="--" && property==="--"){
            const first=[...data.houses]
            console.log(first)
            return first
        }else if(data.houses.filter(a=>a.country===location )){
            console.log('im out')
        const first=data.houses.filter(a=>a.country===location);
            if(first.filter(a=>a.type===property)){
                const second=first.filter(a=>a.type===property);
                
                if(second.filter(a=>a.price>=min && a.price<=max)){
                    const third=second.filter(a=>a.price>=min && a.price<=max);
                    return third
                }
                return second
            }
           return first
        }
          
            
        }

  return (
    <div className="container main">

        <div className="main-items d-flex-center">
          <h1>Search properties to rent</h1>
          </div>

        <div className="main-items">
          <div style={{backgroundColor:"white",paddingBottom:'1rem'}}>
            <div className="span-head">

            <form onSubmit={()=>sortOut}>
                <div>
                    <label htmlFor="location">Location</label><br/>
            <select id="location" onChange={(event) => setLocation(event.target.value)}
        value={location}>
            <option value="--">--</option>
            {removeDuplicates(locations).map(e=>(
                <option value={e}>{e}</option>
            ))}
            </select><br/>
                </div>
            
                <div>
                    <label htmlFor="price">Price</label><br/>
            <select onChange={(event) => setPrice(event.target.value)}
        value={price}>
            <option value="--">--</option>
            <option value="200000-400000">200000-400000$</option>
            <option value="200000-400000">200000-400000$</option>
            <option value="400000-10000000">400000$ and above</option>
            </select><br/>
                </div>
            
                <div>
                    <label htmlFor="property-type">Property Type</label><br/>
            <select onChange={(event) => setProperty(event.target.value)}
        value={property}>
            <option value="--">--</option>
            {removeDuplicates(properties).map(e=>(
                <option value={e}>{e}</option>
            ))}
            </select><br/>
                </div>
            

            <input type="submit" value="View All Houses" className="rounded search"/>

            </form>
            </div>
            </div></div>
            

        <div id="sort" className="main-content">
            {sortOut().map(e=>(<Link to={`/house/${e.slug}`}>
                <div className="main-content-items">
            <img src={e.img} alt={e.address}/>
            <h3 style={{fontWeight:"normal"}}><span style={{fontSize:"0.9em",fontWeight:"bold"}}>Price: </span><span style={{color:"red"}}>{e.price}$</span></h3>
            <p><span style={{fontSize:"0.9em",fontWeight:"bold"}}>Address: </span>{e.address}</p>
            <h3><span style={{fontSize:"0.9em",fontWeight:"bold"}}>Country: </span><span style={{color:"green"}}>{e.country}</span></h3>
            <h4><span style={{fontSize:"0.9em",fontWeight:"bold"}}>Property type-- </span><span style={{color:"red"}}>{e.type}</span></h4>
            <hr/>
          </div></Link>
            ))}
        </div>

        
        </div>
  )
}
