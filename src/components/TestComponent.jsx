import React from 'react'
import Spinner from './Spinner'

const TestComponent = () => {
  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className='text-xl'>Bacon Loading...</h1>
        <Spinner style={{}}/>
        <span>This is a test page for random components, routing and other stuff.</span>
      </div>
    </>
  )
}

export default TestComponent