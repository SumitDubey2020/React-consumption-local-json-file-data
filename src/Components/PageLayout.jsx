import React from 'react'
import Card from './Card'
import data from '../data/data.json'
import reactLogo from '../assets/react.svg'
import Pagination from 'react-bootstrap/Pagination';
function PageLayout() {

  
  return (
    
    <div className='container'>
      
      {data.HotelList.map((listitem)=>(<Card image={listitem.ThumbNailURL} title={listitem.HotelName} description={listitem.ShortDescription} price={listitem.TotalCharges} currency={listitem.DisplayCurrencyCode}/>))}
    
    </div>
  )
}

export default PageLayout
