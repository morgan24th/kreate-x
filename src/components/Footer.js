import React from 'react'
import data from '../database/data'

const Footer = () => {
    const {footer, name} = data

  return (
    <div className='bg-blue-700 text-white text-lg lg:text-xl'>
      <div className='container'>
        {/* info */}
        <div className='p-5'>
          <h1>{name}</h1>
          <p>{footer.rights} &copy; {footer.date}</p>
          <p>{footer.mail}</p>
          <p>{footer.tel}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
