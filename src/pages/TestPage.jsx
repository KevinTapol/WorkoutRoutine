import React from 'react'
import TestComponent from '../components/TestComponent'
import Hero from '../components/Hero'

const TestPage = () => {
  return (
    <>
      <Hero title="Bacon Loading..." subtitle='Om nom'/>
      <TestComponent />
    </>
  )
}

export default TestPage