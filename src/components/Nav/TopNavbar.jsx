import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Link } from "react-scroll";

// Components
import Sidebar from "../Nav/Sidebar";
import Backdrop from "../Elements/Backdrop";
// Assets
import LogoIcon from "../../assets/svg/Logo";
import BurgerIcon from "../../assets/svg/BurgerIcon";
import img from "../../assets/img/projects/logo.png";
import { useNavigate } from "react-router-dom";
export default function TopNavbar() {
	const [y, setY] = useState(window.scrollY);
	const [sidebarOpen, toggleSidebar] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(false);
	const navigate = useNavigate();
	useEffect(() => {
		window.addEventListener("scroll", () => setY(window.scrollY));
		return () => {
			window.removeEventListener("scroll", () => setY(window.scrollY));
		};
	}, [y]);
	useEffect(() => {
		// Check if user is authenticated by looking for a token in localStorage
		const token = localStorage.getItem("token");
		setIsAuthenticated(!!token);
	}, []);

	const handleSignOut = () => {
		// Clear the token or any authentication state
		localStorage.removeItem("token");
		// Update authentication state
		setIsAuthenticated(false);
		// Navigate to the login page
		navigate("/");
	};

	const handleSignIn = () => {
		// Navigate to the login page
		navigate("/login");
	};

	// Function to navigate to home page
	const goToHome = () => {
		navigate("/"); // Navigate to home page if on a different route
	};

	return (
		<>
			<Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
			{sidebarOpen && <Backdrop toggleSidebar={toggleSidebar} />}
			<Wrapper
				className="flexCenter animate whiteBg"
				style={y > 100 ? { height: "60px" } : { height: "80px" }}
			>
				<NavInner className="container flexSpaceCenter">
					<Link className="pointer flexNullCenter" to="home" smooth={true} onClick={goToHome}>
						{/* <LogoIcon /> */}
						<h1 style={{ marginLeft: "15px" }} className="font20 extraBold">
							<img src={img} alt="" style={{ width: 80 }} />
						</h1>
					</Link>
					<BurderWrapper
						className="pointer"
						onClick={() => toggleSidebar(!sidebarOpen)}
					>
						<BurgerIcon />
					</BurderWrapper>
					<UlWrapper className="flexNullCenter" style={{ color: "#fff" }}>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="home"
								spy={true}
								smooth={true}
								offset={-80}
								onClick={goToHome}
							>
								Home
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="services"
								spy={true}
								smooth={true}
								offset={-80}
								onClick={goToHome}
							>
								Services
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="projects"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Projects
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="blog"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Blog
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="members"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Members
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="methodology"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Methodology
							</Link>
						</li>
						<li className="semiBold font15 pointer">
							<Link
								activeClass="active"
								style={{ padding: "10px 15px" }}
								to="contact"
								spy={true}
								smooth={true}
								offset={-80}
							>
								Contact
							</Link>
						</li>
					</UlWrapper>
					<UlWrapperRight className="flexNullCenter">
						<li
							className="semiBold font15 pointer radius8 lightBg"
							style={{ padding: "10px 15px" }}
						>
							{/* <a href="/" style={{ padding: "10px 30px 10px 0" }}>
								Log in
							</a> */}
							{isAuthenticated ? (
                <StyledButton onClick={handleSignOut}>Log Out</StyledButton>
              ) : (
                <StyledButton onClick={handleSignIn}>Log In</StyledButton>
              )}
						</li>
						{/* <li className="semiBold font15 pointer flexCenter">
              <a href="/" className="radius8 lightBg" style={{ padding: "10px 15px" }}>
                Get Started
              </a>
            </li> */}
					</UlWrapperRight>
				</NavInner>
			</Wrapper>
		</>
	);
}

const Wrapper = styled.nav`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 999;
`;
const NavInner = styled.div`
	position: relative;
	height: 100%;
`;
const BurderWrapper = styled.button`
	outline: none;
	border: 0px;
	background-color: transparent;

	height: 100%;
	padding: 0 15px;
	display: none;
	@media (max-width: 760px) {
		display: block;
	}
`;
const UlWrapper = styled.ul`
	display: flex;
	@media (max-width: 760px) {
		display: none;
	}
`;
const UlWrapperRight = styled.ul`
	@media (max-width: 760px) {
		display: none;
	}
`;


const StyledButton = styled.button`
//   padding: 10px 30px;
  border: none;
  background-color: transparent;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  color: #000; // Default color

  &:hover {
    color: #c19153; // Change text color on hover
  }
`;