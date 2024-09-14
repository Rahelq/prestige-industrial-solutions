// import React from "react";
// import styled from "styled-components";
// import { Link } from "react-scroll";
// // Assets
// import LogoImg from "../../assets/svg/Logo";
// import img from "../../assets/img/projects/logo(1).png";
// export default function Contact() {

//   const getCurrentYear = () => {
//     return new Date().getFullYear();
//   }

//   return (
//     <Wrapper>
//       <div className="darkBg">
//         <div className="container">
//           <InnerWrapper className="flexSpaceCenter" style={{ padding: "30px 0" }}>
//             <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
//               {/* <LogoImg /> */}
//               <h1 className="font15 extraBold whiteColor" style={{ marginLeft: "15px" }}>
//               <img src={img} alt=""  style={{width:80}}/>
//               </h1>
//             </Link>
//             <StyleP className="whiteColor font13">
//               © {getCurrentYear()} - <span className="purpleColor font13">Prestige Industrial & Engineering Solutions.</span> All Right Reserved
//             </StyleP>

//             <Link className="whiteColor animate pointer font13" to="home" smooth={true} offset={-80}>
//               Back to top
//             </Link>
//           </InnerWrapper>
//         </div>
//       </div>
//     </Wrapper>
//   );
// }

// const Wrapper = styled.div`
//   width: 100%;
// `;
// const InnerWrapper = styled.div`
//   @media (max-width: 550px) {
//     flex-direction: column;
//   }
// `;
// const StyleP = styled.p`
//   @media (max-width: 550px) {
//     margin: 20px 0;
//   }
// `;

import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
	faFacebook,
	faTwitter,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import {
	faEnvelope,
	faMapMarkerAlt,
	faPhone,
} from "@fortawesome/free-solid-svg-icons";

// Assets
import img from "../../assets/img/projects/logo(1).png";

export default function Footer() {
	const getCurrentYear = () => {
		return new Date().getFullYear();
	};

	return (
		<Wrapper>
			<div className="darkBg">
				<div className="container">
					<InnerWrapper
						className="flexSpaceBetween"
						style={{ padding: "30px 0" }}
					>
						{/* <FooterSection>
              <Link className="flexCenter animate pointer" to="home" smooth={true} offset={-80}>
                <img src={img} alt="Logo" style={{ width: 80 }} />
              </Link>
              <StyleP className="whiteColor font13">
                © {getCurrentYear()} - <span className="purpleColor font13">Prestige Industrial & Engineering Solutions.</span> All Rights Reserved
              </StyleP>
            </FooterSection> */}
						<ContactInfo>
							<ContactItem>
								<FontAwesomeIcon icon={faMapMarkerAlt} /> Addis Ababa, Near Bole
								Medhanialem Church, Cameron Street
							</ContactItem>
							<ContactItem>
								<FontAwesomeIcon icon={faPhone} /> +251911058649/ +251935363635
							</ContactItem>
							<ContactItem>
								<FontAwesomeIcon icon={faEnvelope} /> prestigeies23@gmail.com
							</ContactItem>
						</ContactInfo>
						{/* <FooterSection>
              <h3 className="font15 extraBold whiteColor">Company Information</h3>
              <p className="font13 whiteColor">
                Prestige Industrial & Engineering Solutions
                <br />
                Address: Addis Ababa, Near Bole Medhanialem Church, Cameron Street
                <br />
                Phone: +251911058649/ +251935363635
                <br />
                Email: prestigeies23@gmail.com
              </p>
            </FooterSection> */}

						<FooterSection style={{ paddingLeft: "10%" }}>
							<h3 className="font15 extraBold whiteColor">Quick Links</h3>
							<ul>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="home"
										smooth={true}
										offset={-80}
									>
										Home
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="services"
										smooth={true}
										offset={-80}
									>
										Services
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="about"
										smooth={true}
										offset={-80}
									>
										About Us
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="projects"
										smooth={true}
										offset={-80}
									>
										Projects
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="members"
										smooth={true}
										offset={-80}
									>
										Key Personnel
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="methodology"
										smooth={true}
										offset={-80}
									>
										Methodology
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="contact"
										smooth={true}
										offset={-80}
									>
										Contact Us
									</Link>
								</li>
								{/* <li><Link className="whiteColor animate pointer font13" to="admin-login" smooth={true} offset={-80}>Admin Login</Link></li> */}
							</ul>
						</FooterSection>

						<FooterSection>
							<h3 className="font15 extraBold whiteColor">Follow Us</h3>
							<SocialIcons>
								<a
									href="[Insert LinkedIn URL]"
									className="whiteColor animate pointer"
								>
									<FontAwesomeIcon icon={faLinkedin} />
								</a>
								<a
									href="[Insert Twitter URL]"
									className="whiteColor animate pointer"
								>
									<FontAwesomeIcon icon={faTwitter} />
								</a>
								<a
									href="[Insert Facebook URL]"
									className="whiteColor animate pointer"
								>
									<FontAwesomeIcon icon={faFacebook} />
								</a>
								{/* <a href="mailto:prestigeies23@gmail.com" className="whiteColor animate pointer"><FontAwesomeIcon icon={faEnvelope} /></a> */}
								<a
									href="https://mail.google.com/mail/?view=cm&fs=1&to=prestigeies23@gmail.com"
									target="_blank"
									rel="noopener noreferrer"
									className="whiteColor animate pointer"
								>
									<FontAwesomeIcon icon={faEnvelope} />
								</a>
							</SocialIcons>
						</FooterSection>

						{/* <FooterSection>
              <h3 className="font15 extraBold whiteColor">Newsletter</h3>
              <p className="font13 whiteColor">Sign up for our newsletter to stay updated with our latest news and services.</p>
              <form>
                <Input type="email" placeholder="Enter your email" />
                <SubmitButton type="submit">Subscribe</SubmitButton>
              </form>
            </FooterSection> */}

						<FooterSection>
							<h3 className="font15 extraBold whiteColor">Legal</h3>
							<ul>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="privacy-policy"
										smooth={true}
										offset={-80}
									>
										Privacy Policy
									</Link>
								</li>
								<li>
									<Link
										className="whiteColor animate pointer font13"
										to="terms-of-service"
										smooth={true}
										offset={-80}
									>
										Terms of Service
									</Link>
								</li>
							</ul>
						</FooterSection>
					</InnerWrapper>
				</div>
				<div className="container">
					<InnerWrapper
						className="flexSpaceCenter"
						style={{ padding: "30px 0" }}
					>
						<Link
							className="flexCenter animate pointer"
							to="home"
							smooth={true}
							offset={-80}
						>
							{/* <LogoImg /> */}{" "}
							<h1
								className="font15 extraBold whiteColor"
								style={{ marginLeft: "15px" }}
							>
								<img src={img} alt="" style={{ width: 80 }} />
							</h1>
						</Link>
						<StyleP className="whiteColor font13">
							© {getCurrentYear()} -{" "}
							<span className="purpleColor font13">
								Prestige Industrial & Engineering Solutions.
							</span>{" "}
							All Right Reserved
						</StyleP>

						<Link
							className="whiteColor animate pointer font13"
							to="home"
							smooth={true}
							offset={-80}
						>
							Back to top
						</Link>
					</InnerWrapper>
				</div>
			</div>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 100%;
	background-color: #000; /* Dark background */
`;

const InnerWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-between;
`;
const ContactInfo = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	color: #ffffff;
	font-size: 14px;
`;

const ContactItem = styled.div`
	margin-bottom: 10px;
	display: flex;
	align-items: center;
	svg {
		margin-right: 10px;
	}
`;
const FooterSection = styled.div`
	flex: 1;
	min-width: 200px;
	margin-bottom: 20px;
`;

const StyleP = styled.p`
	@media (max-width: 550px) {
		margin: 20px 0;
	}
`;

const SocialIcons = styled.div`
	display: flex;
	gap: 10px;
	margin-top: 10px;

	a {
		color: #fff;
		font-size: 24px;
	}
`;

const Input = styled.input`
	padding: 10px;
	margin-top: 10px;
	border-radius: 5px;
	border: 1px solid #ccc;
	width: 100%;
`;

const SubmitButton = styled.button`
	padding: 10px 20px;
	margin-top: 10px;
	background-color: #4cd5c5;
	color: #fff;
	border: none;
	border-radius: 5px;
	cursor: pointer;
	width: 100%;
	font-weight: bold;

	&:hover {
		background-color: #3bbba7;
	}
`;
