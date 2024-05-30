import React from 'react'
import './Style/home.css';
import idliVada2 from './Ass/idliVada2.webp'
import Dosa from './Ass/Dosa.jpg'
import puri from './Ass/puri.jpg'
const Home = () => {
  return (
    <div className='homeMain'>
      <h1 className='mainText'>Welcome to Navdeep Tiffin Store!! Eat  Explore And Enjoy</h1>
      <img src={idliVada2} className='imgBox'></img>
      
      <img src={Dosa} className='Dosa'></img>
      <img src={puri} className='puri'></img>
    </div>
  )
}

export default Home
