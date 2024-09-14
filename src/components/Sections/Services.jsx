import React from "react";
import styled from "styled-components";
// Components
import ClientSlider from "../Elements/ClientSlider";
import ServiceBox from "../Elements/ServiceBox";
import FullButton from "../Buttons/FullButton";
// Assets

import automobile from "../../assets/img/add/automobile-production-line-welding-car-body-modern-car-assembly-plant.jpg";
import beverage from "../../assets/img/add/beverage.jpg";
import metal from "../../assets/img/gettyimages-4.jpg";
import textile from "../../assets/img/pexels-kseniachernaya-3965557 (1).jpg";
import { Link } from "react-scroll";
export default function Services() {
	return (
		<Wrapper id="services">
			<div className="lightBg" style={{ padding: "50px 0" }}>
				<div className="container">
					<ClientSlider />
				</div>
			</div>
			<div className="whiteBg" style={{ padding: "60px 0" }}>
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">Our Awesome Services</h1>
						{/* <p className="font13">
							
						</p> */}
					</HeaderInfo>
					<ServiceBoxRow
						className="flex"
						style={{
							display: "flex",
							flexWrap: "wrap",
							justifyContent: "space-between",
						}}
					>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="roller"
								title="Business Proposals"
								subtitle="We craft compelling business proposals that clearly present your project’s goals and benefits, helping you secure contracts, partnerships, or investments."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="monitor"
								title="Feasibility Study"
								subtitle="Our feasibility studies evaluate the technical, financial, and operational aspects of your project, ensuring it’s viable and worth pursuing."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="browser"
								title="Training"
								subtitle="We offer tailored training programs to equip your team with the skills needed to operate machinery efficiently and stay updated with industry practices."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="printer"
								title="Machine Supply"
								subtitle="We provide high-quality machinery, from sourcing to installation, with ongoing support to ensure seamless integration into your operations."
							/>
						</ServiceBoxWrapper>

						<ServiceBoxWrapper>
							<ServiceBox
								icon="vehicle"
								title="Industrial & vehicle spare parts"
								subtitle="Provides reliable replacement parts for machinery and vehicles to ensure smooth operation and minimal downtime."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="installation"
								title="Machine Installation"
								subtitle=" Professional setup and assembly of machinery, ensuring correct installation and functionality."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="automation"
								title="Industrial automation"
								subtitle="Implements automated systems to streamline processes, enhance productivity, and reduce manual intervention."
							/>
						</ServiceBoxWrapper>
						<ServiceBoxWrapper>
							<ServiceBox
								icon="commission"
								title="Industrial machine installation and commissioning"
								subtitle="Installs and tests industrial machines to ensure they are correctly set up and fully operational."
							/>
						</ServiceBoxWrapper>
					</ServiceBoxRow>
				</div>
				<div className="lightBg" id="about">
					<div className="container">
						<Advertising className="flexSpaceCenter">
							<AddLeft>
								<h4 className="font15 semiBold">
									A Few Words About Our Company
								</h4>
								<h2 className="font40 extraBold">ABOUT US</h2>
								<p className="font12">
									At Prestige Industrial and Engineering Solution, we specialize
									in manufacturing and business consultancy with a particular
									focus on the beverage industry, car assembly, medical
									textiles, and the metal industry. Our expertise lies in
									improving operational efficiency, implementing innovative
									solutions, and driving business growth within these sectors.
									<br />
									We are committed to discovering more effective ways to align
									our experience with our clients' business objectives. This
									involves continuously exploring, learning, and experimenting
									with alternative solutions. We are dedicated to executing the
									tasks necessary to promote our clients' values, projects, and
									businesses through their products and services.
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
							</AddLeft>
							<AddRight>
								<AddRightInner>
									<div className="flexNullCenter">
										<AddImgWrapp1 className="flexCenter">
											<img src={metal} alt="office" />
										</AddImgWrapp1>
										<AddImgWrapp2>
											<img src={textile} alt="office" />
										</AddImgWrapp2>
									</div>
									<div className="flexNullCenter">
										<AddImgWrapp3>
											<img src={beverage} alt="office" />
										</AddImgWrapp3>
										<AddImgWrapp4>
											<img src={automobile} alt="office" />
										</AddImgWrapp4>
									</div>
								</AddRightInner>
							</AddRight>
						</Advertising>
					</div>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.section`
	width: 100%;
`;
const ServiceBoxRow = styled.div`
	@media (max-width: 860px) {
		flex-direction: column;
	}
`;
const ServiceBoxWrapper = styled.div`
	width: 20%;
	margin-right: 5%;
	padding: 60px 0;
	padding-left: 30px;
	@media (max-width: 860px) {
		width: 100%;
		text-align: center;
		padding: 40px 0;
	}
`;
const HeaderInfo = styled.div`
	@media (max-width: 860px) {
		text-align: center;
	}
`;
const Advertising = styled.div`
	margin: 80px 0;
	padding: 100px 0;
	position: relative;
	@media (max-width: 1160px) {
		padding: 100px 0 40px 0;
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
	position: absolute;
	top: -70px;
	right: 0;
	@media (max-width: 860px) {
		width: 80%;
		position: relative;
		order: 1;
		top: -40px;
	}
`;
const AddRightInner = styled.div`
	width: 100%;
`;
const AddImgWrapp1 = styled.div`
	width: 48%;
	margin: 0 6% 10px 6%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp2 = styled.div`
	width: 30%;
	margin: 0 5% 10px 5%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp3 = styled.div`
	width: 20%;
	margin-left: 40%;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
const AddImgWrapp4 = styled.div`
	width: 30%;
	margin: 0 5%auto;
	img {
		width: 100%;
		height: auto;
		border-radius: 1rem;
		box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-webkit-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
		-moz-box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
	}
`;
