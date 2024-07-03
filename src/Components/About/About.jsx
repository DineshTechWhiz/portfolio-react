import React from 'react'
import './About.css'
import Details from '../../assets/details.png'
import Logo from '../../assets/logo1.png'
import Html from '../../assets/html.png'
import Css from '../../assets/css.png'
import Bs from '../../assets/bs.png'
import Js from '../../assets/js.png'
import Rjs from '../../assets/react.png'
import Vs from '../../assets/vs.png'
import Ghub from '../../assets/ghub.png'
import Git from '../../assets/git.png'




const About = () => {
	return (


		<div id='about' className='about'>
			<br />
			<br />
			<br />
			<br />
			<section class="about_area section_gap">
				<div class="container">
					<div class="row justify-content-start align-items-center">
						<div class="col-lg-5">
							<div class="about_img">
								<img class="" src={Details} alt="" />
							</div>
						</div>
						<div class="offset-lg-1 col-lg-5" >
							<div class="main_title text-left" >
								<h1 >Let’s <br />Introduce <span>ABOUT</span> <br />Myself</h1>
								<p>
									I'm Dinesh, and I'm passionate about crafting engaging and user-friendly experiences
									 on the web as a frontend developer. I recently graduated with a focus on frontend development and 
									 have been honing my skills in HTML, CSS, and JavaScript to create responsive and visually appealing websites.
									  I am enthusiastic about learning new technologies and frameworks like React.js to build dynamic and interactive user interfaces.
								</p>
								<p>
								I am currently seeking a role where I can leverage my skills and enthusiasm to contribute 
								effectively while continuing to grow both personally and professionally. Thank you for considering my 
								introduction, and I look forward to connecting with like-minded
								</p>
								{/* <a class="primary_btn" href="#"><span>Download CV</span></a> */}
							</div>
						</div>
					</div>
				</div>
			</section>
			<div className="brand">
				<section class="brand_area section_gap_bottom">
					<div class="container">
						<div class="row justify-content-center">
							<div class="col-lg-6">
								<div class="row">
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">

												<img src={Html} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Css} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Bs} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Js} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Rjs} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Git} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Vs} alt="" />
											</div>
										</div>
									</div>
									<div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Ghub} alt="" />
											</div>
										</div>
									</div>
									{/* <div class="col-lg-4 col-md-4 col-sm-6">
										<div class="single-brand-item d-table">
											<div class="d-table-cell text-center">
												<img src={Logo} alt="" />
											</div>
										</div>
									</div> */}
								</div>
							</div>
							<div class="offset-lg-2 col-lg-4 col-md-6">
								<div class="client-info">
									<div class="d-flex mb-50">
										<span class="lage">10</span>
										<span class="smll">Years Experience Working</span>
									</div>
									<div class="call-now d-flex">
										<div>
											<span class="fa fa-phone"></span>
										</div>
										<div class="ml-15">
											<p>call us now</p>
											<h3>(+1)-800-555-6789</h3>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</section>
			</div>

		</div>
	)
}

export default About