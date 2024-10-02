import React from 'react'
import './Services.css'
import Services_data from '../../assets/services-data/Services-data'
import arrowicon from '../../assets/icons/icons8-arrow-50.png'
const Services = () => {
  return (
    <div id='services' className='services'>
      <div className="services-title">
        <h1>My Services</h1>
        {/* <img src="" alt="" /> */}
      </div>
       <div className="services-container">
        {Services_data.map((service,index)=>{
            return <div className="services-format" key={index}>
                <h3>{service.s_no}</h3>
                <h2>{service.s_name}</h2>
                <p>{service.s_dis}</p>
                <div className="services-readmore">
                    <p>Read More</p>
                    <img src={arrowicon} alt="" />
                </div>
            </div>
        })}
       </div>
    </div>
  )
}

export default Services
