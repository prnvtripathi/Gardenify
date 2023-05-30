"use client"

import Link from "next/link";
import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";

const SignupPage = () => {
    const handleSignup = () => {
        // Handle signup logic
    };

    const handleGoogleSignup = () => {
        // Handle Google signup logic
    };

    const handleFacebookSignup = () => {
        // Handle Facebook signup logic
    };

    const handleTwitterSignup = () => {
        // Handle Twitter signup logic
    };

    return (
        <div className="signup-page">
            <h2>Register</h2>
            <div>
                <label htmlFor="fullname">Full Name:</label>
                <input type="text" id="fullname" />

                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />

                <label htmlFor="dob">Date of Birth:</label>
                <input type="date" id="dob" />

                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />

                <label htmlFor="password">Confirm Password:</label>
                <input type="password" id="password" />

                <button onClick={handleSignup}>Register</button>
            </div>
            <hr />
            <div className="social-signup-buttons">
                <button onClick={handleGoogleSignup}>Signup with <FaGoogle /></button>
                <button onClick={handleFacebookSignup}>Signup with <FaFacebook /></button>
                <button onClick={handleTwitterSignup}>Signup with <FaTwitter /></button>
            </div>
            <div className="login-link">
                <p>Already have an account? <Link href="/login">Login</Link></p>
            </div>
        </div>
    );
};

export default SignupPage;
