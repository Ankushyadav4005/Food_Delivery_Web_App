import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'


export const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content_left">
            <img src={assets.logo} alt=''/>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Perspiciatis repellat optio adipisci, in molestiae sed quas, architecto, saepe libero eius ipsa! Quisquam accusamus libero porro. Exercitationem unde quam molestias reprehenderit.</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon}alt="" />
                <img src={assets.linkedin_icon} alt="" />
            </div>
            </div>
            <div className="footer-content-centre">
                <h2>COMPANY</h2>
                <ul>
                    <li>HOME</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li> Privay policy</li>
                </ul>

            </div>
            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-212-456-7890</li>
                    <li>Contact@tomato.com</li>
                </ul>

        </div>
            </div>
        <hr />
        <p className="footer-copyright">Copyright 2024 c Tomato.com-All Right reserved.</p>
    </div>
  )
}
