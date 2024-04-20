import React from 'react'
import { ImSpinner11 } from "react-icons/im";
import { TbFidgetSpinner } from "react-icons/tb";
import { ImSpinner6 } from "react-icons/im";
import { CgSpinnerTwo } from "react-icons/cg";
import baconLoader from '../assets/images/baconLoader.jpg'

const Spinner = () => {
  return (
    // <CgSpinnerTwo className='animate-spin text-8xl' />
    // <img className='animate-spin text-8xl rounded-full' src="https://placebacon.net/100/100" alt="" />
    <img className='animate-spin rounded-full' src={baconLoader} alt="" />
  )
}

export default Spinner