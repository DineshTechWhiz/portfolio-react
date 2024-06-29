import React from 'react'
import './Footer.css'

	

const Footer = () => {
	const today = new Date();
	const year = today.getFullYear();
  return (
    <div>
        <footer class="footer_area">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-12">
					<div class="footer_top flex-column">
						<div class="footer_logo">
							<a href="#">
								{/* <img src={Logo} alt=""/> */}
							</a>
							<h4>Dinesh Siddharth.</h4>
						</div>
						<div class="footer_social">
							<a href="https://github.com/DineshTechWhiz"><i class="fa-brands fa-github"></i></a>
							<a href="https://www.linkedin.com/in/dinesh-thiyagarajan46/"><i class="fa-brands fa-linkedin"></i></a>
							<a href="https://www.instagram.com/xo_toby_ox/"><i class="fa-brands fa-square-instagram"></i></a>
							{/* <a href="#"><i class="fa fa-behance"></i></a> */}
						</div>
					</div>
				</div>
			</div>
			<div class="row footer_bottom justify-content-center">
				<p class="col-lg-8 col-sm-12 footer-text">
					
					{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
Copyright &copy;<small> {year}</small> All rights reserved | This template is made with <i class="fa fa-heart-o" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank">Colorlib</a>
{/* <!-- Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. --> */}
</p>
			</div>
		</div>
	</footer>
    </div>
  )
}


export default Footer