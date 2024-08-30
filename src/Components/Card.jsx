import React from 'react'
import reactLogo from '../assets/react.svg'

function Card(props) {
  
 
  return (
    
    <div className="card mb-3" style={{maxWidth:"450 px"}}>
    <div className="row g-0">
        <div className="col-md-4">
        <img src={props.image} className="img-fluid rounded-start hotel-img" alt="..."/>
        </div>
        <div className="col-md-6">
        <div className="card-body text-start">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.description}</p>
            
        </div>
        </div>
        <div className="col-md-2 d-flex flex-column">
          <label htmlFor="">From</label>
          <div className='price'><span>{props.currency}</span>{props.price}</div>
          <button className='btn btn-primary mt-5'>Choose Room</button>
        </div>
    </div>
</div>
    
    
  )
}

export default Card
