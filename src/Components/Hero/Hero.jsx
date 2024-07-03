import React from 'react'
import './Hero.css'
import Home from '../../assets/home.png'

const Hero = () => {
	return (
		<div id='home'>
			<section class="home_banner_area">
				<div class="banner_inner">
					<div class="container">
						<div class="row">
							<div class="col-lg-7">
								<div class="banner_content">
									<h3 class="text-uppercase">Hell0</h3>
									<h1 class="text-uppercase">I am Dinesh</h1>
									<h5 class="text-uppercase">Frontend developer</h5>
									<div class="d-flex align-items-center">
										<a class="primary_btn" href="#"><span>Hire Me</span></a>
										<a class="primary_btn tr-bg" href="#"><span>Get CV</span></a>
									</div>
								</div>
							</div>
							<div class="col-lg-5">
								<div class="home_right_img">
									<img class="" src={Home} alt="" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero