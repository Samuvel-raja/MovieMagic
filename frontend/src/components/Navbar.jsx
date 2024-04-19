import React from 'react'
import { Link, useParams } from 'react-router-dom'
import '../styles/navbar.css'
const Navbar = ({data}) => {
  
  
  return (
    <nav class="navbar navbar-expand-lg navbar-light ">
  <a class="navbar-brand mx-2" href="#">MovieTime</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavDropdown">
    <ul class="navbar-nav ms-auto">
      <li class="nav-item ">
       <Link to="/" style={{textDecoration:"none",color:"black",margin:"20px"}}>Home</Link>
      </li>
      <li class="nav-item">
      <Link to={"/bookmovie"} style={{textDecoration:"none",color:"black",margin:"20px"}}>Book Movie</Link>
      </li>
      <li class="nav-item">
      <Link to="/bookings" style={{textDecoration:"none",color:"black",margin:"20px"}}>Bookings</Link>
      </li>
      <li class="nav-item">
      <Link to="/movies" style={{textDecoration:"none",color:"black",margin:"20px"}}>Movies</Link>
      </li>
  
    </ul>
  </div>
</nav>
  )
}

export default Navbar