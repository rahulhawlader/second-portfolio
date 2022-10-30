import React from 'react';
import { useState } from 'react';
import {FaFacebookSquare, FaGithub, FaLinkedin} from 'react-icons/fa'
import {GiHamburgerMenu} from 'react-icons/gi'
import './Navbar.css'


const Navber = () => {
 const [showIcons, setShowIcons]=useState(false)
 return (
  <>
  <nav className='main-nav fixed-top '>
   <div className='logo-div'>
    <h3>
     <span>R</span>ahul
    
     <span>H</span>awlader
    
    </h3>

   </div>
   <div className={showIcons ? 'menu-link mobile-menu-link':'menu-link'}>
    <ul>
     <li><a style={{color:'white'}} href="#home">Home</a></li>
     <li><a style={{color:'white'}} href="#about">About Me</a></li>
     <li><a style={{color:'white'}} href="#projects">Projects</a></li>
     <li><a style={{color:'white'}} href="#contack">Contack</a></li>
     <li><a style={{color:'white'}} href="#resume">Resume</a></li>
     <li><a style={{color:'white'}} href="#blogs">Blogs</a></li>
    </ul>

   </div>
   {/* social-media */}
   <div className='social-dev'>
   <ul className='social-dev-destop'>
     <li>
      <a href='https://www.facebook.com/mdrahul.hawlader.5' target="new">
       <FaFacebookSquare/>
       </a>
       </li>
     <li>
      <a href='https://github.com/rahulhawlader' target="new">
      
       <FaGithub/>
      
      
       </a>
       
       
       </li>


     
     <li>
      <a 
     href='https://www.linkedin.com/in/md-sajib-hossain-rahul-583442241/' target="new">
      <FaLinkedin/>
      </a>
      </li>

   </ul>

   <div className='hambarger-menu' >
   <a href="#" onClick={()=>setShowIcons(!showIcons)}>
    
   <GiHamburgerMenu />
    </a> 
    

   </div>
   </div>


  </nav>
  
  
  </>
 );
};

export default Navber;