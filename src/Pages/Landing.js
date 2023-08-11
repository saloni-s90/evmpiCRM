import React from 'react'
import logo from '../images/logo.jpeg'
import slideimage1 from '../images/img1.jpeg'
import slideimage2 from '../images/2.svg'
import slideimage3 from '../images/3.svg'
import slideimage4 from '../images/4.svg'
import './Landing.css'
import chassis1 from '../images/chassis1.jpg'
import chassis2 from '../images/chassis2.jpg'
import evmotor1 from '../images/evmotor1.jpg'


function Landing() {
  return (
    <div>
      <nav className="navbar sticky-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="/"> <img className="image1" src={logo} ></img></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <a className="nav-link fs-5" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link fs-5" href="#">About Us</a>
              </li>
            </ul>
            <button className="btn btn-outline-success" type="submit">Login</button>
          </div>
        </div>
      </nav>


      <div id="carouselExampleCaptions" className="carousel carousel-dark slide carousel-fade mb-5">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slideimage3} className="d-block w-900 border border-5 border-black" />

          </div>
          <div className="carousel-item">
            <img src={slideimage2} className="d-block w-900  border border-5 border-black" alt="..." />

          </div>
          <div className="carousel-item">
            <img src={slideimage4} className="d-block w-900  border border-5  border-black" alt="..." />

          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Landing
