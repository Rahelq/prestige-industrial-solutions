import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
// Screens
import Landing from "./screens/Landing.jsx";
import Login from "./components/Sections/LoginPage.jsx";  // Add Login Page
import Register from "./components/Sections/RegisterPage.jsx";  // Add Register Page
import CommentSection from "./components/Sections/CommentSection.jsx";
export default function App() {
  return (
    <>
      <Helmet>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Khula:wght@400;600;800&display=swap" rel="stylesheet" />
      </Helmet>
      <Router>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/login" element={<Login />} />  {/* Login Page */}
          <Route path="/register" element={<Register />} />  {/* Register Page */}
          <Route path="/comments" element={<CommentSection />} />  {/* Comment Section */}
        </Routes>
      </Router>
    </>
  );
}

