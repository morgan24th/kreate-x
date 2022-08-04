import React from 'react'
import Footer from './Footer'
import Header from './Header'
import kreate_x from '../database/data'

const Home = () => {
  const {welcome,message,photos} = kreate_x

  return (
    <div>
      {/* main */}
      <div className='main'>
        {/* header and content */}
        <div className='flex-1'>
          <Header active={'/'}/>
          {/* banner */}
          <div className='container'>
            <div>
              <h1 className='lg:text-5xl text-3xl text-blue-700 font-semibold'>{welcome}</h1>
              <p className='lg:text-8xl mt-8 text-6xl'>{message}</p>
            </div>
          </div>
          {/* Brief History */}
          {/* Mission and Vision */}
          {/* Location */}
          {/* Under construction */}
          <div className='lg:flex lg:justify-center lg:items-center'>
            <div className='flex items-center justify-center'>
              <img className='lg:w-1/2' src={photos.constructionOne} alt='construction'/>
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
