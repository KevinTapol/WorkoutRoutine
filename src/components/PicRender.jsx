import React from 'react'
import dataArray from '../workouts.json'
import defaultImg from '../assets/images/baconLoader.jpg'

// The purpose of this component is to test how to display a default image after the render and if there is no picture rendered even though there is a path given for each item. 
const PicRender = () => {

  return (
    <div>
      <img className='block mx-auto my-6' src={defaultImg} alt="" />
      <ul className='flex justify-around'>
        {dataArray.workouts.map((item, index) => (
        <li key={index}>
            <img className='w-[50px] h-[50px]' src={item.imgUrl} alt="" onError={(e) => {
                e.target.src = defaultImg
            }}/>
        </li>
        ))}
      </ul>
    </div>
  )
}

export default PicRender