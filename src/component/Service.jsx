import React from 'react'
import profile from '../assets/images/png/profile.png'
import requirement from '../assets/images/png/requirement.png'
import search from '../assets/images/png/search_supplier.png'
import list from '../assets/images/png/list.png'
import notified from '../assets/images/png/notified.png'
import connected from '../assets/images/png/connected.png'

const Service = () => {

    const product = [
        {
            icon: profile,
            title: "Select Your Role and Sign Up"
        },
        {
            icon: requirement,
            title: "Buyers Post Your Requirements"
        },
        {
            icon: search,
            title: "Review, Select, and Contact the Best Suppliers"
        },
        {
            icon: notified,
            title: "Suppliers Complete your profile and get notified for opportunities"
        },
        {
            icon: list,
            title: "Contact to Buyers and Share your Quote for the service"
        },
        {
            icon: connected,
            title: "Both the Parties can Connect and Make Business Leave a Feedback"
        }
    ]

    return (

        // ------------------------------------HABOT SERVICE SECTION-------------------------------------

        <div className='habot_service_section '>

            <div className="habot_get_verified bg-[#E8FBFF] flex justify-between  px-20 md:px-40  flex-wrap   py-16    items-center my-28">
                <p className='text-black text-4xl font-bold'>Let Suppliers <span className='border-b-4 border-b-[#EB7150]'>Find You</span> </p>
                <button className='px-5 py-2 bg-[#EB7150] text-white rounded-md'>Get Verified</button>
            </div>

            <div className="habot_work">

                <div className="habot_work_content text-center flex flex-col items-center">
                    <h1 >How it works?</h1>
                    <p className='w-[300px] sm:w-[500px] md:w-[700px] pb-10'>Buyers post their needs and review top suppliers, while suppliers complete profiles, connect with
                        potential buyers, and build successful business relationships, sharing valuable feedback.</p>
                </div>

                {/* ------------------------------------------MAP THE PRODUCT-------------------------- */}

                <div className="habot_services flex justify-center flex-wrap pb-32">
                    {
                        product.map((item, index) => {
                            return (
                                <div key={index} className={`habot_profile ${index % 2 == 0 ? 'bg-[#E8FBFF]' : ' bg-white'}  px-20 py-2 w-[400px] rounded-sm flex flex-col justify-center gap-4 items-center text-center`}>
                                    <div className='p-12'>
                                        <img src={item.icon} alt="" className=' w-[100%]' />
                                    </div>
                                    <p className='text-xl font-semibold text-black'>{item.title}</p>
                                </div>
                            )

                        })
                    }
                </div>
            </div>

        </div>
    )
}

export default Service
