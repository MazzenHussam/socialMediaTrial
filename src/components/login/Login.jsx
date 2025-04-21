import './login.css'

function Login() {
return (
    <div className='login'>
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className='loginLogo'>CairoSocial</h3>
                <span className="loginDesc">
                    Connect with friends and the world around you on CairoSocial.
                </span>
            </div>
            <div className="loginRight">
                <form className="loginBox">
                    <input type="text" className="loginInput" placeholder="Email or Phone"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">Create a new account</button>
                </form>
            </div>
        </div>
    </div>
)
}


export default Login;
