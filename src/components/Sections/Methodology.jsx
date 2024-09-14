import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import AddImage2 from "../../assets/img/add/Designer.jpg";
import { Link } from "react-scroll";

export default function Methodology() {
	return (
		<Wrapper id="methodology">
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
							<h2 className="font40 extraBold">METHODOLOGY</h2>
							<p className="font12">
								<b>FOR INDUSTRIAL CONSULTING:</b>{" "}
								<ul >
									<li>Conducting market analysis and research.</li>
									<li>
										Developing strategies, setting goals, and planning steps to
										achieve them.
									</li>
									<li>
										Optimization and systematization of business processes,
										identifying bottlenecks.
									</li>
									<li>
										Implementing information systems and automating processes.
									</li>
									<li>
										Staff training, planning, and implementing organizational
										changes.
									</li>
								</ul>
								<br /> 
								<b>FOR MANUFACTURING CONSULTING:</b>{" "}
								<ul>
									<li>Optimization of the production cycle time.</li>
									<li>
										Improving the efficiency of using equipment and resources.
									</li>
									<li> Building a production analytics system.</li>
									<li>
										Developing and implementing lean manufacturing and labor
										organization.
									</li>
									<li>
										Implementing quality management systems and certification.
									</li>
								</ul>
								 
								<br /> <br />
								<b>Process::</b> IDEA RESEARCH MEASURE EXECUTE EVALUATE RESULTS
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
