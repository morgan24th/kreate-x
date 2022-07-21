import React from 'react'
import Footer from './Footer'
import Header from './Header'
import kreate_x from '../database/data'

const Home = () => {
  const {welcome,message} = kreate_x

  return (
    <div>
      {/* main */}
      <div className='main'>
        {/* header and content */}
        <div className='flex-1'>
          <Header active={'/'}/>
          <div className='container'>
            <div>
              <h1 className='lg:text-5xl text-4xl text-blue-700 font-semibold'>{welcome}</h1>
              <p className='text-xl'>{message}</p>
            </div>
          </div>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Home
