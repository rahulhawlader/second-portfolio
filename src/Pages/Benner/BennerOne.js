import React from 'react';
import { Button } from 'react-bootstrap';
import imgage from '../../img/download (1).png'
import Typewriter from 'typewriter-effect'
import './BennerOne.css'

const BennerOne = () => {
 return (
  <div className='w-100 home id="home" '>
   <div className='container'>
   <div className='row home justify-content-between '>
    <div className='col-12 col-md-6 col-lg-6  homeTextPart'>
    <h1> Hi  <span className='text'>I AM  </span> RAHUL!  </h1>
     <h1 className='typewriter'>
     <Typewriter
       options={{
               autoStart: true,
               loop: true,
               delay: 60,
               strings: ['I AM WEB-DEVELOPER', 'AND WEB DESIGNER', 'AND RESPONSIVE WEB DESIGNER']


                                    }}
                                />
      
     
      
      </h1>
     <h5>
     Having Experience of Building Web Applications With React, Node Js, Express, MongoDB, JavaScript and Other Cool Libraries & Frameworks.
       </h5>
     <a href="https://drive.google.com/file/d/1LOtDWQhpK_Y3E4ua5vxxT32o6oXeGlp1/view?usp=sharing" target="blank"><Button className='button' >DOWNLOAD CV</Button></a>
     <Button className='button-section  button'>HIRE ME</Button>
    </div>

    <div className='col-12 col-md-6 col-lg-6 background-color'>
     <img className=' ' src={imgage} alt="My Pictures" />
    </div>
   </div>
   </div>
  </div>
 );
};

export default BennerOne;