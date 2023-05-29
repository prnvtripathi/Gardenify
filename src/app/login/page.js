"use client"

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
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input type="password" id="password" />
            </div>
            <div>
                <button onClick={handleEmailLogin}>Login</button>
            </div>
            <div>
                <button onClick={handleGoogleLogin}>Login with Google</button>
                <button onClick={handleFacebookLogin}>Login with Facebook</button>
                <button onClick={handleTwitterLogin}>Login with Twitter</button>
            </div>
        </div>
    );
};

export default Login