import React from 'react'
import style from './port.module.css'

export default function Portofolio() {

  return (
    <div className={` w-100  ${style.bgColor}`}>
    <div className="container text-center py-5 ">
    <h2 className='fw-bold pt-4'>Portfolio</h2>
    <div className='iLine text-center my-3 fa-xl'>
    <i className="fa-solid fa-star m-auto "></i>
    
    </div>
    <div className='row g-5'>
      <div className='col-12 col-md-4 position-relative '><img  src={require("../images/cabin.png")} className='w-100 rounded-2 position-relative ' alt="" /><div className='shadow rounded-2 pt-4'><i className="fa-solid fa-3x fa-plus m-5"></i></div></div>
      <div className='col-12 col-md-4 position-relative '><img src={require("../images/cake.png")} className='img-fluid rounded-2' alt="" /><div className='shadow rounded-2 pt-4' ><i className="fa-solid fa-3x fa-plus m-5"></i></div></div>
      <div className='col-12 col-md-4 position-relative '><img src={require("../images/circus.png")} className='img-fluid rounded-2' alt="" /><div className='shadow rounded-2 pt-4'><i className="fa-solid fa-3x fa-plus m-5"></i></div></div>
      <div className='col-12 col-md-4 position-relative '><img src={require("../images/game.png")} className='img-fluid rounded-2' alt="" /><div className='shadow rounded-2 pt-4'><i className="fa-solid fa-3x fa-plus m-5"></i></div></div>
      <div className='col-12 col-md-4 position-relative '><img src={require("../images/safe.png")} className='img-fluid rounded-2' alt="" /><div className='shadow rounded-2 pt-4'><i className="fa-solid fa-3x fa-plus m-5"></i></div></div>
      <div className='col-12 col-md-4 position-relative '><img src={require("../images/submarine.png")} className='img-fluid rounded-2' alt="" /><div className='shadow rounded-2 pt-4'><i className="fa-solid fa-3x fa-plus m-5"></i></div></div>
    </div>
    </div>
    </div>
  )
}
