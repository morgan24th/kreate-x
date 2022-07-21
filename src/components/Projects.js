import React from 'react'
import Footer from './Footer'
import Header from './Header'
import data from '../database/data'

const Projects = () => {
    const {projects} = data

  return (
    <div>
      {/* main */}
      <div className='main'>
        {/* header and content */}
        <div className='flex-1'>
          <Header active={'/projects'}/>
          <div className='container'>
            <h1 className='lg:text-5xl text-3xl text-blue-700 font-semibold'>{projects.title}</h1>
          </div>
        </div>
        {/* footer */}
        <Footer/>
      </div>
    </div>
  )
}

export default Projects
