import React from 'react'
import './Contact.css'

const Contact = () => {

	const onSubmit = async (event) => {
		event.preventDefault();
		const formData = new FormData(event.target);
	
		formData.append("access_key", "b962544d-ffbb-467f-94be-c1cd12a41b3a");
	
		const object = Object.fromEntries(formData);
		const json = JSON.stringify(object);
	
		const res = await fetch("https://api.web3forms.com/submit", {
		  method: "POST",
		  headers: {
			"Content-Type": "application/json",
			Accept: "ap plication/json"
		  },
		  body: json
		}).then((res) => res.json());
	
		if (res.success) {
		  console.log("Success", res);
		  alert('Your Comment Send Success')
		}
	  };

	 
	return (
		<div id='contact'>
			{/* <br /><br /><br /> <br /><br /> */}
			<section class="newsletter_area">
				<div class="container">
					<div class="row justify-content-center align-items-center">
						<div class="col-lg-12">
							<div class="subscription_box text-center">
								<h2 class="text-uppercase text-white">get update from anywhere</h2>
								<p class="text-white">
									Bearing Void gathering light light his eavening unto dont afraid.
								</p>
								<div class="subcribe-form" id="mc_embed_signup">
									<form onSubmit={onSubmit} className='input'>
										<input type="text" name="Text" placeholder='Leave Your Commend' onFocus={(e) => e.target.placeholder = ""} onBlur={(e) => e.target.placeholder = "Leave Your Commend"}/>
										
										<button class="primary-btn hover d-inline">Get Started</button>
										<div class="info"></div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	)
}

export default Contact