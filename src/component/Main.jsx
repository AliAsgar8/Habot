import React from 'react'
import Button from 'react-bootstrap/Button';
import { MdEmail, MdLocationOn } from 'react-icons/md';

const Main = () => {
    return (

        // -------------------------------------HABOT MAIN SECTION---------------------------------

        <div className='habot_main_section text-white  py-24 flex flex-col  gap-4  items-center'>

            <div className='habot_main_heading text-center'>
                <h1 className='font-bold text-5xl '>Are You a Supplier?</h1>
                <h2 className='font-normal text-5xl'>Explore Matching Opportunities.</h2>
            </div>

            <div className="habot_input_field flex gap-2 flex-wrap justify-center px-2 sm:px-10 ">

            <div className='flex gap-2 flex-wrap justify-center'>
                <div className="habot_email_input flex items-center relative ">
                    <MdEmail className='habot_icon' />
                    <input type="text" placeholder='Search your required service here' className='habot_input' />
                </div>

                <div className="habot_location_input flex items-center relative">
                    <MdLocationOn className='habot_icon' />
                    <input type="text" placeholder='Search your desired location here' className='habot_input' />
                </div>
            </div>

                <Button variant="success" style={{ height: '55px', width: '120px' }}>Search</Button>
            </div>

            <div className='habot_buy flex gap-3 flex-wrap justify-center'>
                <p className='font-bold m-0'>Are You a buyer?</p>
                <p>  <span>Click here if you are looking to post a requirement</span><hr  className='text-white m-0'/></p>
            </div>
        </div>
    )
}

export default Main
