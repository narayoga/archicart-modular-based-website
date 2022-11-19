import logo from "../images/archicart.png"

const Banner = () => {
	return (
		<div className="section banner-bg animated fadeIn">
			<div className="d-flex justify-content-between py-3 px-5">
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
			<div className="mx-auto text-black position-relative" style={{ width: "60%" }}>
				<div className="title-banner">
					<h2 className="fw-light fs-1">PHILOSOPHY OF</h2>
					<h2 className="fw-bold fs-1">ARCHITECTURE</h2>
					<div style={{ width: "50%" }}>
						<p className="fw-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita aliquam quod dolorum quidem nulla quasi ducimus? </p>
					</div>
					<button className="btn btn-danger ">
						see all
					</button>
				</div>
			</div>
			<div className="d-flex">
				<div className="box-banner active">
					<p className="fw-bold">Lorem ipsum dolor.</p>
					<p className="fw-light">Lorem ipsum dolor sit amet, consectetur  </p>
					<a href="/">see all</a>
				</div>
				<div className="box-banner unactive">
					<p className="fw-bold">Lorem ipsum dolor.</p>
					<p className="fw-light">Lorem ipsum dolor sit amet, consectetur  </p>
					<a href="/">see all</a>
				</div>
				<div className="box-banner">
					<p className="fw-bold">Lorem ipsum dolor.</p>
					<p className="fw-light">Lorem ipsum dolor sit amet, consectetur  </p>
					<a href="/">see all</a>
				</div>
			</div>
		</div>
	)
}

export default Banner