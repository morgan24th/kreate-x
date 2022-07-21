import React from 'react'
import Footer from './Footer'
import Header from './Header'
import data from '../database/data'

const Services = () => {
    const {services} = data

  return (
    <div>
      {/* main */}
      <div className='main'>
        {/* header and content */}
        <div className='flex-1'>
          <Header active={'/services'}/>
          <div className='container'>
            <div>
              <h1 className='lg:text-5xl text-3xl text-blue-700 font-semibold'>{services.title}</h1>
            </div>  
          </div>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Services
