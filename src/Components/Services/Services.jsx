import React from 'react'
import './Services.css'
import S1 from '../../assets/s1.png'
import S2 from '../../assets/s2.png'
import S3 from '../../assets/s3.png'
import S4 from '../../assets/s4.png'

const Services = () => {
	return (
		<div id='services' className='services'>
			<br />
			<br />
			<br />
			<br />

			<section class="features_area">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 text-center">
							<div class="main_title">
								<span><h2>Service offers </h2></span>
								<p>
									Is give may shall likeness made yielding spirit a itself togeth created
									after sea <br /> is in beast beginning signs open god you're gathering ithe
								</p>
							</div>
						</div>
					</div>
					<div class="row feature_inner">
						<div class="col-lg-3 col-md-6">
							<div class="feature_item">
								<img src={S1} alt="" />
								<h4>Wp developing</h4>
								<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="feature_item">
								<img src={S2} alt="" />
								<h4>UI/ux design</h4>
								<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="feature_item">
								<img src={S3} alt="" />
								<h4>Web design</h4>
								<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
							</div>
						</div>
						<div class="col-lg-3 col-md-6">
							<div class="feature_item">
								<img src={S4} alt="" />
								<h4>seo optimize</h4>
								<p>Creeping for female light years that lesser can't evening heaven isn't bearing tree</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Services