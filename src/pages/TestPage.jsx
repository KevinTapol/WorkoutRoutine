import React from 'react'
import TestComponent from '../components/TestComponent'
import Hero from '../components/Hero'
// import PicRender from '../components/PicRender'

const TestPage = () => {
  return (
    <>
      <Hero title="Bacon Loading..." subtitle='Om nom'/>
      <TestComponent />
      {/* <PicRender /> */}
    </>
  )
}

export default TestPage