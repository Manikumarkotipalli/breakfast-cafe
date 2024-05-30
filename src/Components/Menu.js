import React from 'react'
import './Style/Menu.css';
import idliVada2 from './Ass/idliVada2.webp'
import Dosa from './Ass/Dosa.jpg'
import puri from './Ass/puri.jpg'

const Menu = () => {
  return (
    <div className='container'>
      
      <div ><h1 className='headline' >Take a sneak in to our spread !! </h1></div>
      <div className='img-container'>
      <img src={idliVada2} className="card-img-first" alt="Card Image" />
     
     <img src={Dosa} className='card-img-top' alt='card Image' />
     <img src={puri} className='card-img-side' alt='card Image' />

     </div>
     
      <div className ="row">
        <div className='col-md-4'>
      <div className="card">
      
      <div className="card-body">
        <h5 className="card-title">IDLY</h5>
        <p className="card-text">One of the defining features of idly is its healthfulness. It is low in calories, easy to digest, and gluten-free, making it suitable for various dietary preferences and restrictions.</p>
        <a href="#" className="btn btn-primary">know about idly</a>
      </div>
     </div>
     </div>
    <div className='col-md-4'>
      <div className='card'>
       
       <div className='card-body'>
        <h5 className='card-title'>DOSA</h5>
        <p className='card-text'>The popularity of dosa has spread beyond India, making it a beloved dish in Indian restaurants worldwide.</p>
        <a href='#' className="btn btn-primary">Know About dosa</a>
       </div>
       </div>
       </div>
       <div className='col-md-4'>
      <div className="card">
      
      <div className="card-body">
        <h5 className="card-title">PURI</h5>
        <p className="card-text">Puri is typically served with a variety of side dishes, making it a versatile accompaniment to many Indian meals:</p>
        <a href="#" className="btn btn-primary">Know about PURI</a>
      </div>
     </div>
     </div>
   
    
     
    
      
       </div>
       
    </div>
  )
}

export default Menu
