"use client"

import { FaFacebook, FaGoogle, FaTwitter } from "react-icons/fa";
import Link from "next/link";

const Login = () => {
    const handleEmailLogin = () => {
        // Handle email login logic
    };

    const handleGoogleLogin = () => {
        // Handle Google login logic
    };

    const handleFacebookLogin = () => {
        // Handle Facebook login logic
    };

    const handleTwitterLogin = () => {
        // Handle Twitter login logic
    };

    return (
        <div className="login-page">
            <h2>Login</h2>
            <div>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" />
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
            <div>
                <button onClick={handleEmailLogin}>Login</button>
            </div>
            <hr />
            <div className="social-login-buttons">
                <button onClick={handleGoogleLogin}>Login with <FaGoogle /></button>
                <button onClick={handleFacebookLogin}>Login with <FaFacebook /></button>
                <button onClick={handleTwitterLogin}>Login with <FaTwitter /></button>
            </div>
            <div className="register-link">
                <p>New here? <Link href='/signup'>Register now.</Link></p>
            </div>
        </div>
    );
};

export default Login