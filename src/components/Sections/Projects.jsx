import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/spare1.png";
import ProjectImg2 from "../../assets/img/projects/metalindustryjpg.jpg";
import ProjectImg3 from "../../assets/img/projects//medical-masks.jpg";
import ProjectImg4 from "../../assets/img/projects/beer-bottles.jpg";
import ProjectImg5 from "../../assets/img/projects/carassembly.jpg";
import ProjectImg6 from "../../assets/img/projects/automation.jpg";
import AddImage2 from "../../assets/img/add/add2.png";
import { Link } from "react-scroll";

export default function Projects() {
	return (
		<Wrapper id="projects">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Awesome Projects</h1>
						{/* <p className="font13">
							
							<br />
						
						</p> */}
					</HeaderInfo>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg1}
								title="Spare Parts Supply"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								action={() => alert("clicked")}
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg2}
								title="Metal Fabrication"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								action={() => alert("clicked")}
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg3}
								title="Medical Textile Manufacturing"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								action={() => alert("clicked")}
							/>
						</div>
					</div>
					<div className="row textCenter">
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg4}
								title="Beverage Production"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								action={() => alert("clicked")}
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg5}
								title="Car Assembly"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								action={() => alert("clicked")}
							/>
						</div>
						<div className="col-xs-12 col-sm-4 col-md-4 col-lg-4">
							<ProjectBox
								img={ProjectImg6}
								title="Automation Solutions"
								text="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor."
								action={() => alert("clicked")}
							/>
						</div>
					</div>
					<div className="row flexCenter">
						<div style={{ margin: "50px 0", width: "200px" }}>
							<FullButton title="Load More" action={() => alert("clicked")} />
						</div>
					</div>
				</div>
			</div>
			<div className="lightBg">
				<div className="container">
					<Advertising className="flexSpaceCenter">
						<AddLeft>
							<AddLeftInner>
								<ImgWrapper className="flexCenter">
									<img className="radius8" src={AddImage2} alt="add" />
								</ImgWrapper>
							</AddLeftInner>
						</AddLeft>
						<AddRight>
							<h4 className="font15 semiBold">Get to Know Us</h4>
							<h2 className="font40 extraBold">Our Guiding Principles</h2>
							<p className="font12">
								<b>Mission:</b> To revolutionize manufacturing by developing
								innovative, automated solutions that set new industry standards,
								leveraging a universal approach to industrialization for global
								impact.
								<br /> <br />
								<b>Vision:</b> To be the leading provider of customer-centric
								services, fostering exceptional experiences and unwavering
								loyalty through continuous innovation and excellence in every
								interaction. <br /> <br />
								<b>Core Values:</b> We have collected talented young professionals in
								these industries which help our clients to deal directly with.
								We are well known with a new strategist hub which can provide
								all innovation in every need that makes us unique in the
								country. Our Education and Training department has given various
								personal and professional development trainings for the
								community for FREE. We mainly focus on manufacturing and
								business consultancy, beverage industry, car assembly, medical
								textile, and metal industry with demonstrating in full capacity.
							</p>
							<ButtonsRow
								className="flexNullCenter"
								style={{ margin: "30px 0" }}
							>
								<div style={{ width: "190px" }}>
								<Link to="contact">
										 <FullButton
											//title="Get Started"
											title="Contact Us"
											action={() => {
												window.location.hash = 'contact';
											}}
										 />
										</Link>
								</div>
								{/* <div style={{ width: "190px", marginLeft: "15px" }}>
									<FullButton
										title="Contact Us"
										action={() => alert("clicked")}
										border
									/>
								</div> */}
							</ButtonsRow>
						</AddRight>
					</Advertising>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	padding: 100px 0;
	margin: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 60px 0 40px 0;
	}
	@media (max-width: 860px) {
		flex-direction: column;
		padding: 0 0 30px 0;
		margin: 80px 0 0px 0;
	}
`;
const ButtonsRow = styled.div`
	@media (max-width: 860px) {
		justify-content: space-between;
	}
`;
const AddLeft = styled.div`
	position: relative;
	width: 50%;
	p {
		max-width: 475px;
	}
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
		text-align: center;
		h2 {
			line-height: 3rem;
			margin: 15px 0;
		}
		p {
			margin: 0 auto;
		}
	}
`;
const AddRight = styled.div`
	width: 50%;
	@media (max-width: 860px) {
		width: 80%;
		order: 2;
	}
`;
const AddLeftInner = styled.div`
	width: 100%;
	position: absolute;
	top: -300px;
	left: 0;
	@media (max-width: 1190px) {
		top: -250px;
	}
	@media (max-width: 920px) {
		top: -200px;
	}
	@media (max-width: 860px) {
		order: 1;
		position: relative;
		top: -60px;
		left: 0;
	}
`;
const ImgWrapper = styled.div`
	width: 100%;
	padding: 0 15%;
	img {
		width: 100%;
		height: auto;
	}
	@media (max-width: 400px) {
		padding: 0;
	}
`;
