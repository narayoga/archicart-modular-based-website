import content from "../images/arch-content.jpg"

const CountDown = () => {
	return (
		<section id="services" className="animated fadeIn services section-padding text-black my-5" style={{padding:"10em 0"}}>
			<div className="container">
				<div className="row">
					<div className="col-12">
						<div className="section-title-header text-center">
							<h1 className="section-title wow fadeInUp monseraat" data-wow-delay="0.2s">Why You Choose Us?</h1>
							<p className="wow fadeInDown" data-wow-delay="0.2s">Global Grand Event on Digital Design</p>
						</div>
					</div>
				</div>
				<div className="row services-wrapper">
					{/* <!-- Services item --> */}
					<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
						<div className="services-item wow fadeInDown" data-wow-delay="0.2s">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart" viewBox="0 0 16 16">
									<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
								</svg>
							</div>
							<div className="services-content">
								<h3><a href="#">Get Inspired</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
							</div>
						</div>
					</div>
					{/* <!-- Services item --> */}
					<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
						<div className="services-item wow fadeInDown" data-wow-delay="0.4s">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-images" viewBox="0 0 16 16">
									<path d="M4.502 9a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
									<path d="M14.002 13a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2V5A2 2 0 0 1 2 3a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v8a2 2 0 0 1-1.998 2zM14 2H4a1 1 0 0 0-1 1h9.002a2 2 0 0 1 2 2v7A1 1 0 0 0 15 11V3a1 1 0 0 0-1-1zM2.002 4a1 1 0 0 0-1 1v8l2.646-2.354a.5.5 0 0 1 .63-.062l2.66 1.773 3.71-3.71a.5.5 0 0 1 .577-.094l1.777 1.947V5a1 1 0 0 0-1-1h-10z" />
								</svg>
							</div>
							<div className="services-content">
								<h3><a href="#">Meet New Faces</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
							</div>
						</div>
					</div>
					{/* <!-- Services item --> */}
					<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
						<div className="services-item wow fadeInDown" data-wow-delay="0.6s">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope" viewBox="0 0 16 16">
									<path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
								</svg>
							</div>
							<div className="services-content">
								<h3><a href="#">Fresh Tech Insights</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
							</div>
						</div>
					</div>
					{/* <!-- Services item --> */}
					<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
						<div className="services-item wow fadeInDown" data-wow-delay="0.8s">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trophy" viewBox="0 0 16 16">
									<path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z" />
								</svg>
							</div>
							<div className="services-content">
								<h3><a href="#">Networking Session</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
							</div>
						</div>
					</div>
					{/* <!-- Services item --> */}
					<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
						<div className="services-item wow fadeInDown" data-wow-delay="1s">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-video3" viewBox="0 0 16 16">
									<path d="M14 9.5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm-6 5.7c0 .8.8.8.8.8h6.4s.8 0 .8-.8-.8-3.2-4-3.2-4 2.4-4 3.2Z" />
									<path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h5.243c.122-.326.295-.668.526-1H2a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v7.81c.353.23.656.496.91.783.059-.187.09-.386.09-.593V4a2 2 0 0 0-2-2H2Z" />
								</svg>
							</div>
							<div className="services-content">
								<h3><a href="#">Global Event</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
							</div>
						</div>
					</div>
					{/* <!-- Services item --> */}
					<div className="col-md-6 col-lg-4 col-xs-12 padding-none">
						<div className="services-item wow fadeInDown" data-wow-delay="1.2s">
							<div className="icon">
								<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chat-left" viewBox="0 0 16 16">
									<path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
								</svg>
							</div>
							<div className="services-content">
								<h3><a href="#">Free Swags</a></h3>
								<p>Lorem ipsum dolor sit amet, consectetuer commodo ligula eget dolor.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}

export default CountDown