import React from 'react';
import './MyProjects.css'
import doctore from '../../img/chair.png'
import Parlour from '../../img/engin-akyurt-g-m8EDc4X6Q-unsplash 1.png'
import fasion from '../../img/12-home_default.jpg'

const MyProjects = () => {

// /* .containaar{
 
 
//  width: 100%;
//  height: 100vh;
//  
//  align-items: center;
//  /* background-color: #74Ebd5; */
//  background-color: black;
//  /* background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%); */
// } */


 return (
  <div className='containar'>
   <h3 className='text-white text-center'>My All Projects</h3>
   <div className='row justify-content-around mat'>
    <div className='project col-12 col-md-6 col-lg-4 my-5'>
     <div className='imbDiv'>
      <img src={doctore} alt="" srcset="" />
     </div>
     <div className='contant'>
     <div className='ankor-stylle'>
    <a  href='https://github.com/rahulhawlader/new-doctor-portals' target="_blanck">Client</a>
    <a href='https://github.com/rahulhawlader/new-doctore-portals-server' target="_blanck">server</a>
    </div>
     <h3>Doctore portal</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure neque animi molestias quibusdam deleniti saepe sapiente blanditiis porro nesciunt?</p>
     
     <a href='https://doctore-portals-two.web.app/' target="_blanck"><button>Demo</button></a>


     </div>
    </div>
    
    <div className='project col-12 col-md-6 col-lg-4 mt-5'>
    <div className='imbDiv'>
      <img src={Parlour} alt="" srcset="" />
     </div>
     
     <div className='contant'>

    <div className='ankor-stylle'>
    <a  href='https://github.com/rahulhawlader/jerins-parlour' target="_blank">Client</a>
    <a href='https://github.com/rahulhawlader/zerins-parlour-server' target="_blank">server</a>
    </div>
    
    
     <h3 className='text-black '>Jerins Parlour</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure neque animi molestias quibusdam deleniti saepe sapiente blanditiis porro nesciunt?</p>


     <a href='https://jerin-parlour-40611.web.app/' target='_blank'><button>Demo</button></a>
    
     </div>
    </div>
    
    <div className='project col-12 col-md-6 col-lg-4 mt-5'>
    <div className='imbDiv'>
      <img src={fasion} alt="" srcset="" />
     </div>
    <div className='contant'>
    <div className='ankor-stylle'>
    <a  href='https://github.com/rahulhawlader/fasion-holesakes-house' target="blank">Client</a>
    <a href='https://github.com/rahulhawlader/fasion-holesale-server' target='_blank'>server</a>
    </div>
    <h3>Fasion House</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae iure neque animi molestias quibusdam deleniti saepe sapiente blanditiis porro nesciunt?</p>


    
    <a href='https://fasion-holesales-house.web.app/' target="_blank"><button>Demo </button></a>

    </div>
   
    </div>
    
   
  </div>
  </div>
 );
};

export default MyProjects;