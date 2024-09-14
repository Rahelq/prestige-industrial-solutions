import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Footer from './Footer';
import Nav from '../Nav/TopNavbar'
const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const registerUser = async () => {
    try {
      await axios.post('http://localhost:5500/api/auth/register', { username, email, password });
      navigate('/login');
    } catch (error) {
      setError('Registration failed');
    }
  };

  return (
    <div>
      <div><Nav/></div>
      
    <RegisterContainer>
      <h2 style={{paddingTop: "90px"}}>Register</h2>
      {error && <ErrorMsg>{error}</ErrorMsg>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
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
      <button onClick={registerUser}>Register</button>
      <p>Already have an account? <span onClick={() => navigate('/login')}>Login here</span></p>
    </RegisterContainer>
    <div> <Footer/></div>
    </div>
  );
};

// Styled Components
const RegisterContainer = styled.div`
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
    color: 09689c;
    cursor: pointer;
  }
     span:hover{
    text-decoration: underline;
    }
`;

const ErrorMsg = styled.p`
  color: red;
`;

export default RegisterPage;
