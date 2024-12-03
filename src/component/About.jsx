import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Requirement_img from '../assets/images/jpg/need_requirement.jpg'
import Right_click from '../assets/images/png/right_click.png'
import right_arrow from '../assets/images/svg/right_arrow.svg'
import youtube from '../assets/images/svg/youtube.svg'
import { Col, Row } from 'react-bootstrap';

const About = () => {
    const [active, setActicve] = useState('buyer');

    return (

        // -----------------------------------HABOT ABOUT SECTION---------------------------
        <>


            <div className='habot_about_section'>

                {/* ------------------------------------HABOT ABOUT------------------------------------- */}
                <div className="habot_info_about  ">
                    <h1 className='text-black font-bold'>Ready to dive into <span className='text-[rgb(39,21,85)]'>HABOT?</span></h1>

                    <p className='py-4 m-0'>Signing up with HABOT opens the door to a world of new opportunities
                        and potential for business growth. Gain access to a vibrant community
                        of like-minded individuals, unlock valuable resources, and take the first
                        step towards realizing your entrepreneurial dreams.</p>

                    <div className='relative flex justify-center sm:justify-start'>
                        <Button variant="success" className='py-3 fw-bold  w-60'>Sign up Today! </Button>

                        <div className='hidden sm:block absolute right-[300px] top-5 '>
                            <img src={right_arrow} alt="" />
                        </div>
                    </div>

                </div>

                {/* ----------------------------------------HABOT ABOUT COUNTRIES--------------------------------- */}
                <div className="habot_info_countries ">
                    <div className='habot_about_country '>
                        <p className='habot_country'>Abu Dhabi</p>
                        <p className='habot_country'>Duabi</p>
                    </div>
                    <div className='habot_about_country'>
                        <p className='habot_country'>Sharjah & Ajman</p>
                        <p className='habot_country'>Fujairah</p>
                    </div>
                    <div className='habot_about_country'>
                        <p className='habot_country'>Ras Al Khaimah</p>
                        <p className='habot_country'>Umm Al Quwain</p>
                    </div>
                </div>
            </div>

            {/* ------------------------------- HABOT ABOUT YOUR REQUIREMENT-------------------- */}

            <div className='habot_about_requirement bg-[#072F57] mx-20 rounded-md '>

                <div className='habot_requirement_buyer_supplier px-20 py-24 flex gap-5 flex-wrap justify-center '>
                    <Row >

                        <Col md={6}>

                            <div className="relative habot_requirement">
                                {/* Main Image */}
                                <img src={Requirement_img} alt="Requirement" className="w-full h-auto habot_requirement-img" />
                            </div>
                        </Col>

                        <Col md={6}>
                            <div className="habot_buyer_supplier  pt-10">

                                <div className='habot_buyer_and_supplier flex gap-10 sm:gap-20'>

                                    <div className='habot_buyer flex flex-col   gap-1'>
                                        <button className={`${active === 'buyer' ? 'text-[rgb(232,112,80)]' : 'text-white'} text-4xl font-bold w-[150px]`} onClick={() => setActicve('buyer')}>Buyer</button>
                                        <p className={`${active === 'buyer' ? 'border-b-4 border-b-[rgb(232,112,80)]  rounded-b-sm' : 'border-black'}w-[150px]  ml-2       pt-2`}></p>
                                    </div>

                                    <div className='habot_supplier flex flex-col  gap-1'>
                                        <button className={`${active === 'supplier' ? 'text-[rgb(232,112,80)]' : 'text-white'} text-4xl font-bold w-[150px]`} onClick={() => setActicve('supplier')}>Supplier</button>
                                        <p className={`${active === 'supplier' ? 'border-b-4 border-b-[rgb(232,112,80)]   rounded-b-sm' : ''}w-[150px]  ml-2      pt-2`}></p>
                                    </div>

                                </div>

                                {/* ---------------------------------------TERNARY OPERATOR FOR BUYER & SUPPLIER----------------------------- */}

                                {
                                    active === 'buyer' ? (

                                        <div className='habot_buyer_active flex flex-col gap-3 pt-10'>

                                            <div className='habot_content'>
                                                <div className='habot_right_click'>
                                                    <img src={Right_click} alt="title" />
                                                </div>
                                                <p className='m-0'>Post your requirements.</p>
                                            </div>

                                            <div className='habot_content'>
                                                <div className='habot_right_click'>
                                                    <img src={Right_click} alt="title" />
                                                </div>
                                                <p className='m-0'>Sit back for multiple suppliers to contact you.</p>
                                            </div>

                                            <div className='habot_content'>
                                                <div className='habot_right_click'>
                                                    <img src={Right_click} alt="title" />
                                                </div>
                                                <p className='m-0'>Choose among the suppliers based on the
                                                    ratings and reviews.</p>
                                            </div>

                                        </div>

                                    ) : (

                                        <div className='habot_supplier_active flex flex-col gap-3 pt-10'>

                                            <div className='habot_content'>
                                                <div className='habot_right_click'>
                                                    <img src={Right_click} alt="title" />
                                                </div>
                                                <p className='m-0 '>Complete your profile and get verified.</p>
                                            </div>

                                            <div className='habot_content'>
                                                <div className='habot_right_click'>
                                                    <img src={Right_click} alt="title" />
                                                </div>
                                                <p className='m-0 '>Choose service tags and get notified about each opportunity.</p>
                                            </div>

                                            <div className='habot_content'>
                                                <div className='habot_right_click'>
                                                    <img src={Right_click} alt="title" />
                                                </div>
                                                <p className='m-0 '>Contact buyers, and expand your business.</p>
                                            </div>

                                        </div>
                                    )
                                }


                            </div>
                        </Col>

                    </Row>
                </div>
            </div>
        </>
    )
}

export default About
