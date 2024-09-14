import React from "react";
import styled from "styled-components";
// Components
import ProjectBox from "../Elements/ProjectBox";
import FullButton from "../Buttons/FullButton";
// Assets
import ProjectImg1 from "../../assets/img/projects/1.png";
import ProjectImg2 from "../../assets/img/projects/2.png";
import ProjectImg3 from "../../assets/img/projects/3.png";
import ProjectImg4 from "../../assets/img/projects/4.png";
import ProjectImg5 from "../../assets/img/projects/5.png";
import ProjectImg6 from "../../assets/img/projects/6.png";
import AddImage2 from "../../assets/img/add/add2.png";

export default function Projects() {
	return (
		<Wrapper id="members">
			<div className="whiteBg">
				<div className="container">
					<HeaderInfo>
						<h1 className="font40 extraBold">KEY PERSONNELS</h1>
						<p className="font13"></p>
					</HeaderInfo>
					<div
						className="row textCenter"
						style={{
							display: "flex",
							flexWrap: "wrap",
						}}
					>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<ProjectBox
								img={ProjectImg1}
								title="MINYAHIL DEBEBE"
								role="Founder, Managing Director   "
								// action={() => alert("clicked")}
								detail="BA degree in Manufacturing Engineering MSc in Project Management TRACK"
								record="RECORD: 15 years of experience"
							/>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<ProjectBox
								img={ProjectImg2}
								title="BETHLEHEM ESHETU"
								role="Finance Director"
								// action={() => alert("clicked")}
								record="TRACK RECORD: Experience +3 years"
							/>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<ProjectBox
								img={ProjectImg3}
								title="SOLOMON DEMISSIEW"
								role="Logistics Director"
								record="TRACK RECORD: Experience +3 years"
								// action={() => alert("clicked")}
							/>
						</div>
						<div className="col-xs-12 col-sm-3 col-md-3 col-lg-3">
							<ProjectBox
								img={ProjectImg4}
								title="WOINSHET SHELENGI"
								role="BA in Software Engineering MSc in MIS"
								// action={() => alert("clicked")}
								record="TRACK RECORD: 15 Years Experience"
							/>
						</div>
					</div>
					{/* <div className="row flexCenter">
            <div style={{ margin: "50px 0", width: "200px" }}>
              <FullButton title="Load More" action={() => alert("clicked")} />
            </div>
          </div> */}
					<br />
					<br />
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
