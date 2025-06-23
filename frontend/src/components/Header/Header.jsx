import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <div className='header'> 
    <div className='Header-contents'>
        <h2>Oder your favourite food here</h2>
        <p>Choose from a diverse menu featuring a delectable array of dishes crafted with the finest ingredients and culinary expertise. one delicious meal at a time  </p>
        <button onClick={() => document.getElementById('explore-menu').scrollIntoView({ behavior: 'smooth' })}>
  View Menu
</button>
    </div>
    </div>
  )
}

export default Header