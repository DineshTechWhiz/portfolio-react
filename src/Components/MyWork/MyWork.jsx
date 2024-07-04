import React from 'react'
import './MyWork.css'
import B1 from '../../assets/p1.jpg'

const MyWork = () => {
	return (
		<div id='work' className='mywork'>
			<br /><br /><br /><br />
			<section class="portfolio_area" id="portfolio">
				<div class="container">
					<div class="row">
						<div class="col-lg-12">
							<div class="main_title text-left main">
								<h2>quality <span>work</span> <br />
									Recently done project </h2>
							</div>
						</div>
					</div>
					<div class="row row-gap">
						<div class="card text-center col-sm-6">
							{/* <img src={B1} class="card-img-top" alt="..." /> */}
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quic example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						<div class="card text-center col-sm-6">
							{/* <img src={B1} class="card-img-top" alt="..." /> */}
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quic example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						<div class="card text-center col-sm-6">
							{/* <img src={B1} class="card-img-top" alt="..." /> */}
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quic example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div>
						{/* <div class="card text-center col-sm-6">
							<img src={B1} class="card-img-top" alt="..." />
							<div class="card-body">
								<h5 class="card-title">Card title</h5>
								<p class="card-text">Some quic example text to build on the card title and make up the bulk of the card's content.</p>
								<a href="#" class="btn btn-primary">Go somewhere</a>
							</div>
						</div> */}
					</div>
				</div>
			</section>
		</div>
	)
}

export default MyWork