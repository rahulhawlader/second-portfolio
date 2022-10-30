import React from 'react';
import './MyServices.css'


const MyServices = () => {
// /* .contaner{
//  width: 100%;
//  height: 100vh;
//  display: flex;
//  flex-wrap:nowrap;
//  justify-content: center;
//  align-items: center;
//  /* background-color: #74Ebd5; */
//  background-color: black;
//  /* background-image: linear-gradient(90deg, #74ebd5 0%, #9face6 100%); */
// } */


 return (
  <div className='bg-black container'>
   <h1 className='text-white text-center mt-5 padding '>What <span className='text-primary'>I Do</span></h1>
   <div className='row justify-content-around'>
   
    <div className='box col-12 col-md-6 col-lg-4 '>
     <h3>Web Designer</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium deserunt nobis cumque beatae soluta labore eum quas suscipit debitis?</p>
     <a href="#" ><button className=''>Hire Me</button> </a>
     <span className='count'>1</span>

    </div>
    <div className='box col-12 col-md-6 col-lg-4'>
     <h3>Web Developer</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium deserunt nobis cumque beatae soluta labore eum quas suscipit debitis?</p>
     <a href="#" ><button className=''>Hire Me</button> </a>
     <span className='count'>2</span>

    </div>
    <div className='box col-12 col-md-6 col-lg-4 '>
     <h3>Web Responsive Designer</h3>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos laudantium deserunt nobis cumque beatae soluta labore eum quas suscipit debitis?</p>
     <a href="#" ><button className=''>Hire Me</button> </a>
     <span className='count'>3</span>

    </div>

   </div>
  </div>
 );
};

export default MyServices;
