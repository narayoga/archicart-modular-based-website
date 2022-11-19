import content from "../images/arch-content.jpg"

const Content = () => {
	return (
		<div className="container d-flex justify-content-center mb-5">
			<div className="text-black mx-5 " style={{ width: "30%", paddingTop: "15em" }}>
				<p className="fs-2 monseraat" >
					CELINE’s Revitalized Site La Manufacture
				</p>
				<p className="fw-light lh-lg">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem mollitia totam sunt ab quaerat nemo, dolorum eum minima incidunt
					mollitia totam sunt ab quaerat nemo, dolorum eum minima incidunt
				</p>
				<button className="btn btn-danger ">
					see all
				</button>
			</div>
			<div>
				<div className="mx-5">
					<div className="square" >
					</div>
					<img className="animated fadeOutUp my-5" style={{ width: "400px", borderRadius: "8px"}} alt="content" src={content} />
				</div>
			</div>
		</div>
	)
}

export default Content