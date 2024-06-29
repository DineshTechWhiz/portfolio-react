import React from 'react'
import './Navbar.css'

const Navbar = () => {
const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBtn.onclick = function(){
	dropDownMenu.classList.toggle('open')
	const isOpen = dropDownMenu.classList.contains('open')

	toggleBtnIcon.classList = isOpen
	? 'fa-solid fa-xmark' 
	: 'fa-solid fa-bars'

}

	return (
		<div className="navbar">
			<div className="logo"><i class="fa-brands fa-vaadin"></i> DINE.</div>
			<ul class="nav justify-content-center sidebar links">
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
			<div className="toggle_btn">
				<i class="fa-solid fa-bars"></i>
			</div>
			<div className="dropdown_menu open">
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
			</div>
		 	{/* <ul class="nav justify-content-center sidebar">
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
		 	</ul> */}

		</div >
	);
}

export default Navbar
