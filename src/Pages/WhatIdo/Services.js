import React, { useEffect } from 'react';
import './Services.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import {VscCode} from "react-icons/vsc";

const Services = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 })
    }, [])
    return (
        <div className='service p-5'>
            <div className='myServiceText pt-5'>
                <h3> What <span >I Do</span></h3>
                <hr />
            </div>

            <div className='container text-center mt-5'>
                <div className='row'>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-right">
                        <div className='border service p-4'>
                            <p className='service-icon'><span className='border p-2'><VscCode/></span></p>
                            <h5 className="mt-5">WEB DEVELOMENT</h5>
                            <p>I am Web developer. My Expertise is to create front-end design for a website</p>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="zoom-in">
                        <div className='border service p-4'>
                            <p className='service-icon'><span className='border p-2'><VscCode/></span></p>
                            <h5 className='mt-5'>WEB DESIGNER</h5>
                            <p>I am Web Designer. My Expertise is to create  design for a website</p>
                        </div>

                    </div>
                    <div className='col-12 col-md-6 col-lg-4 p-3' data-aos="fade-left">
                        <div className='border service p-4'>
                            <p className='service-icon'><span className='border p-2'><VscCode/></span></p>
                            <h5 className='mt-5'>RESPONSIVE WEBSITE</h5>
                            <p>I am Responsive website Designer. My Expertise is to create Responsive design for a website</p>
                        </div>

                    </div>


                </div>


            </div>


        </div>
    );
};

export default Services;