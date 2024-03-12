import React from 'react';
import'../cssFiles/Footer.css';
import { FaFacebookSquare, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {

  const handleCall = () => {
    console.log('Calling customer service...');
  };

  const handleEmail = () => {
    console.log('Sending email to customer service...');
  };

  const handleTrackOrder = () => {
    console.log('Tracking order...');
  };

  const handleAboutUs = () => {
    console.log('About Us');
  };

  const handlePrivacyPolicy = () => {
    console.log('Privacy Policy');
  };

  const handleTermsConditions = () => {
    console.log('Terms & Conditions');
  };

  const handleBlog = () => {
    console.log('Blog');
  };

  return (
    <div className='site-footer'>
        <div className='footer-content'>
           <p>Women's T-shirts | Women's Crop Tops | Women's Hoodies | Women's Off Shoulder Tops <br/>
           Men's T-shirts | Men's Graphic T-shirts | Men's Geeky T-shirts | Men's Crop Tops | Men's Hoodies | Men's Joggers <br/>
           Cricket Graphic T-shirts | Geek Graphic T-shirts | Funny Graphic T-shirts |
           </p>
           
           <div className='customer-service' >
            <h5>CUSTOMER SERVICE</h5>
            <div className='customer-service-link'>
            <a href='#' onClick={handleCall}>Call l</a>
            <a href='#' onClick={handleEmail}>Email l</a>
            <a href='#' onClick={handleTrackOrder}>Track Order</a>
            </div>
          </div>

          <div className='company-links'>
            <h5>COMPANY</h5>
            <div className='customer-service-link'>
            <a href='#' onClick={handleAboutUs}>About Us l</a>
            <a href='#' onClick={handlePrivacyPolicy}>Privacy Policy l</a>
            <a href='#' onClick={handleTermsConditions}>Terms & Conditions l</a>
            <a href='#' onClick={handleBlog}>Blog</a>
            </div>
          </div>

          <div className='social-icons'>
            <h5>CONNECT WITH US</h5>
            <div className='social-icons-link'>
            <a href='#'><FaFacebookSquare size={25} className='facebook'/></a>
            <a href='#'><FaTwitter size={25} className='twitter' /></a>
            <a href='#'><FaInstagram size={25} className='instagram' /></a>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Footer;