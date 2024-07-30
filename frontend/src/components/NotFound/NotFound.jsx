import React from 'react'
import { Link } from 'react-router-dom'
import image from '../../assets/Images/notfound.png'
const NotFound = () => {
  return (
    <>
        <section className='page notfound'>
          <div className="content">
            <img src={image} alt="notfound" />
          </div>
          <div className='button'>
            <Link to={'/'}>RETURN TO HOME PAGE</Link>
            </div>
        </section>
    </>
  )
}

export default NotFound