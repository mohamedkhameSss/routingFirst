import React from 'react'
import { Link } from 'react-router-dom'
import styles from "./nav.module.css";
export default function Navbar() {
  return (
    

    <>
<nav className={`navbar navbar-expand-lg ${styles.bgColor} `}>
  <div className="container">
    <Link className="navbar-brand" to="">StartReact</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
      <div className="navbar-nav ms-auto">
        <Link className="nav-link " to="portofolio">Portofolio</Link>
        <Link className="nav-link" to="about">About</Link>
        <Link className="nav-link" to="contact">contact</Link>
        
      </div>
    </div>
  </div>
</nav>


    </>
  )
}
