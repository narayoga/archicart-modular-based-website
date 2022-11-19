import Carousel from 'react-bootstrap/Carousel'
import logo from "../images/archicart.png"
import one from "../images/1.jpg"
import two from "../images/2.jpg"
import three from "../images/3.jpg"

const Bannerun = () => {
	return (
		<div classNameName="section animated fadeIn">
			<div className="d-flex justify-content-between px-5 py-2">
				<a href="/">
					<img className="logo" src={logo} alt="archicart"></img>
				</a>
				<nav style={{ width: "30%" }}>
					<ul className='d-flex justify-content-around text-black pt-2'>
						<li>Home</li>
						<li>About</li>
						<li>Collection</li>
						<li>Contact</li>
						<li className='badge-arch mb-2'>Sign Up</li>
					</ul>
				</nav>
			</div>
			<Carousel fade>
				<Carousel.Item>
					<img
						className="d-block w-100 banner-carousel"
						src={one}
						alt="First slide"
					/>
					<Carousel.Caption>
						<div className="d-md-block animated fadeIn">
							<p className="fadeInUp wow monseraat" data-wow-delay=".6s">Global Grand <span style={{color:"#e84e56"}}>Event on</span>Digital Design</p>
							<h1 className="text-uppercase mb-3" data-wow-delay=".4s">Design Thinking Conference</h1>
							<a href="#" className="fadeInRight wow btn btn-border btn-lg btn-danger" data-wow-delay=".6s">Explore More</a>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={two}
						alt="Second slide"
					/>

					<Carousel.Caption>
						<div className="d-md-block animated fadeIn">
							<p className="fadeInUp wow monseraat" data-wow-delay=".6s">Global Grand Event on Digital Design</p>
							<h1 className="text-uppercase mb-3" data-wow-delay=".4s">22 Amazing Collection</h1>
							<a href="#" className="fadeInRight wow btn btn-border btn-lg btn-danger" data-wow-delay=".6s">Explore More</a>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
				<Carousel.Item>
					<img
						className="d-block w-100"
						src={three}
						alt="Third slide"
					/>

					<Carousel.Caption>
						<div className="d-md-block animated fadeIn">
							<p className="fadeInUp wow monseraat" data-wow-delay=".6s">Global Grand <span style={{color:"#e84e56"}}>Event on</span> Digital Design</p>
							<h1 className="text-uppercase mb-3" data-wow-delay=".4s">Keep the Creativity Flying High</h1>
							<a href="#" className="fadeInRight wow btn btn-border btn-lg btn-danger" data-wow-delay=".6s">Explore More</a>
						</div>
					</Carousel.Caption>
				</Carousel.Item>
			</Carousel>
		</div>
	)
}

export default Bannerun