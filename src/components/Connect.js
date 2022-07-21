import React from 'react'
import Footer from './Footer'
import Header from './Header'
import data from '../database/data'

const Connect = () => {
    const {connect} = data

  return (
    <div>
      {/* main */}
      <div className='main'>
        {/* header and content */}
        <div className='flex-1'>
          <Header active={'/connect'}/>
          <div className='container'>
            <div>
              <h1 className='lg:text-5xl text-3xl text-blue-700 font-semibold'>{connect.title}</h1>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Connect
