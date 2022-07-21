import React from 'react'
import data from '../database/data'

const Footer = () => {
    const {footer, name} = data

  return (
    <div>
      <div className='container'>
        {/* info */}
        <div className='border-t-2'>
            <h1>{name}</h1>
            <p>{footer.rights} &copy; {footer.date}</p>
            <p>{footer.mail}</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
