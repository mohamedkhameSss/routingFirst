import React from 'react'
import image1 from '../images/avataaars.svg'
export default function StartReact() {
  return (
    <>
    <div className="container text-center ">
    <div className='w-25  m-auto py-5 px-3'><img className='img-fluid' src={image1} alt="" /></div>
    <h1 className='fw-bold '>Start React</h1>
    <div className='d-flex text-center my-3 iLineWhite'>
    <i className="fa-solid fa-star m-auto fa-xl"></i>
    </div>
    <h4>Graphic Artist - Web Designer - Illustrator</h4>
    </div>
    </>
  )
}
