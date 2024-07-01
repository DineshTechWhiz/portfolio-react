import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="navbar">
			<div className="logo"><i class="fa-brands fa-vaadin"></i> DINE.</div>
			<ul class="nav justify-content-center sidebar">
		 		<li ><a href="#"></a></li>
		 		<li class="nav-item">
		 			<a class="nav-link active" aria-current="page" href="#home">Home</a>
		 		</li>
		 		<li class="nav-item">
		 			<a class="nav-link" href="#about">About</a>
		 		</li>
		 		<li class="nav-item">
		 			<a class="nav-link" href="#services">Services</a>
		 		</li>
		 		<li class="nav-item">
		 			<a class="nav-link" href="#work">Work</a>
		 		</li>
		 		<li class="nav-item">
		 			<a class="nav-link" href="#contact">Contact</a>
		 		</li>
		 	</ul>
		{/* <div className="toggle"onClick={() => setNavbar(!navbar)}>
			<i class="fa-solid fa-bars"></i>
		</div> */}
		</div >
  )
}

export default Navbar