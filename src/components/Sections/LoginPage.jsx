import React, { useState,useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
// import Nav from '../Nav/Sidebar'
import Nav from '../Nav/TopNavbar'
import Footer from './Footer'
const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  // Determine where to redirect after login; default to home page
  // const redirectTo = location.state?.from || '/';
   // Get redirect location and message from location.state
   const { from, message } = location.state || {};
   const redirectTo = from || '/';

   useEffect(() => {
    // Scroll to top when the component mounts
    window.scrollTo(0, 0);
  }, []);
  // useEffect(() => {
  //   // Scroll to the comment section if 'from' is set in the state
  //   if (from && from === '/#comment') {
  //     window.scrollTo({ top: document.querySelector('#comment-section').offsetTop, behavior: 'smooth' });
  //   }
  // }, [from]);

  const loginUser = async () => {
    try {
      const response = await axios.post('http://localhost:5500/api/auth/login', { email, password });
      localStorage.setItem('token', response.data.token);
      // navigate('/comments');
      navigate(redirectTo); 
    } catch (error) {
      setError('Invalid credentials');
    }
  };
  
  return (
    <div>
      <div><Nav/> </div>
      
    <LoginContainer>
      <h2 style={{paddingTop: "90px"}}>Login</h2>
      {message && <ErrorMsg>{message}</ErrorMsg>}
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={loginUser}>Login</button>
      <p>Don't have an account? <span onClick={() => navigate('/register')} >Register here</span></p>
    </LoginContainer>
    <div><Footer/> </div>
    </div>
  );
};

// Styled Components
const LoginContainer = styled.div`
  padding: 20px;
  max-width: 400px;
  margin: 0 auto;
  text-align: center;

  input {
    width: 100%;
    padding: 10px;
    margin: 10px 0;
    border-radius: 5px;
    border: 1px solid #ccc;
  }

  button {
    padding: 10px;
    background-color: #C19153;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
    width: 100%;
  }

  span {
    color: #09689c;
    cursor: pointer;
  }
    span:hover{
    text-decoration: underline;
    }
`;

const ErrorMsg = styled.p`
  color: red;
`;

export default LoginPage;
