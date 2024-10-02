import React from 'react'
import './Mywork.css'
// import Mywork from '../../assets/mywork/mywork.js'
import mywork from '../../assets/mywork/mywork'
import arrowicon from '../../assets/icons/icons8-arrow-50.png'

const Mywork = () => {
  return (
    <div id='portfolio' className='mywork'>
        <div className="mywork-title">
            <h1>My latest work</h1>
            {/* <img src="" alt="" /> */}
        </div>
        <div className="mywork-container">
          {mywork.map((work,index)=>{
            return <img key={index} src={work.w_image} alt=''/>
          })}
        </div>
        <div className="myworkshowmore">
            <p>Show More</p>
            <img src={arrowicon} alt="" />
        </div>
      
    </div>
  )
}

export default Mywork
