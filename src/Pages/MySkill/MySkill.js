import React from 'react';
import './MySkill.css'
import HTML from '../../img/logo/Html.png'
import CSS from '../../img/logo/css.png'
import Bootstraap from '../../img/logo/bootstrap.png'
import Tailwind from '../../img/logo/tailwind.png'
import JS from '../../img/logo/js.png'
import Ract from '../../img/logo/react.png'
import MongoDb from '../../img/logo/mongodb.png'
import express from '../../img/logo/express.js.png'
import node from '../../img/logo/node.js.png'
import github from '../../img/logo/github.jpg'
import redux from '../../img/logo/redux.png'
import firebase from '../../img/logo/firebase.png'

const MySkill = () => {
 return (
  <div className=' container stylish' id='skill'>
   <h1 className='text-center text-white my-5'>My Skill</h1>
   <h4 className='text-center '>TECH TOOLS AND SKILLS THAT I USE IN DEVELOPMENT</h4>
   <div className=' row ml-5'>
    
    <div className='card col-6 col-md-4 col-lg-3 mt-5 justify-content-center items-center'>
     
     <div className='img-section'>
      <img src={HTML} alt='html'></img>
      
     </div>
    
    
     <h3>HTML</h3>
     
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     


    </div>
    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={CSS} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>CSS</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>
    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={Bootstraap} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Bootstraap</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>
    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={Tailwind} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Tailwind</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>

    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={JS} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Java script</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>


    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={Ract} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Ract.js</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>

    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={MongoDb} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>MongoDb</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>

    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={express} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>express.js</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>


    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={firebase} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>firebase</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>
    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={node} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Node.js</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>

    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={redux} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Redux</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>



    <div className='card col-6 col-md-4 col-lg-3 mt-5 '>
     
     <div className='img-section'>
      <img src={github} alt='html'></img>
     </div>
    
    
     <div className='content'>
      <h3>Github</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nisi quo !</p>
     </div>


    </div>

   </div>
  </div>
 );
};

export default MySkill;