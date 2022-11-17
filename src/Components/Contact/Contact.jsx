import React from 'react'
import style from '../Portofolio/port.module.css'
import styles from "../Navbar/nav.module.css";
export default function Contact() {
  return (
    <>
    <div className={` w-100 p-5 ${style.bgColor}`}>
      <div className="container text-center py-5 ">
    <h2 className='fw-bold pt-4'>Contact Me</h2>
    <div className='iLine text-center my-3'>
    <i className="fa-lg fa-solid fa-star m-auto"></i>
    </div>
<form className='w-75 m-auto text-start'>
<div className="mb-3 border-bottom">
    <input type="text" className="form-control border border-0 py-3 " id="exampleInputName" placeholder='Name' />
  </div>
  <div className="mb-3 border-bottom">
    <input type="email" className="form-control border border-0 py-3 " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email address' />
   
  </div>
 
  <div className="mb-3 border-bottom">
    <input type="tele" className="form-control border border-0 py-3 " placeholder='Password' id="exampleInputPhone" />
  </div>
  <div className="mb-3 ">
    <textarea name="Massage"  cols="30" rows="5" className="form-control border border-0 list-unstyled " placeholder='Massage'></textarea>
  </div>
 
  <button type="submit" className="btn btn-primary p-4 border border-0">Send</button>
</form>

    </div> 
    </div>
    <footer className={`  ${styles.bgColor} `}>
        <div className="container text-center">
      <div className="row p-5 g-5 ">
        <div className="col-md-4"><h3 className='fw-bold pb-3'> Location</h3><p>2215 John Daniel Drive
Clark, MO 65243 </p></div>
        <div className="col-md-4"><h3 className='fw-bold pb-3'>Around the Web</h3>
        <div>
          <button  className={` btn-outline-light border border-0   py-2  ${styles.bgColor} ${styles.colWhite}`}>
        <i className="fa-brands fa-instagram fa-xl m-2"></i></button>
        <button  className={` btn-outline-light border border-0   py-2  ${styles.bgColor} ${styles.colWhite}`}>
        <i className="fa-brands fa-facebook fa-xl m-2"></i></button>
        <button  className={` btn-outline-light border border-0   py-2  ${styles.bgColor} ${styles.colWhite}`}>
        <i className="fa-brands fa-twitter fa-xl m-2"></i></button>
        <button  className={` btn-outline-light border border-0   py-2  ${styles.bgColor} ${styles.colWhite}`}>
        <i className="fa-brands fa-github fa-xl m-2"></i></button>
        </div>
        </div>
        <div className="col-md-4"><h3 className='fw-bold pb-3'>About Freelancer</h3><p>Freelance is a free to use, MIT licensed Bootstrap theme created by Route </p></div>
        </div>
      </div>
      <div className='w-100 bg-dark text-center p-3  ' > <h6 className='mt-2'>Copyright © Your Website 2021</h6></div>
    </footer>
    </>
  )
}
