import './register.css'

function Register() {
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
                    <input type="text" className="loginInput" placeholder="Username"/>
                    <input type="text" className="loginInput" placeholder="Email"/>
                    <input type="password" className="loginInput" placeholder="Password"/>
                    <input type="password" className="loginInput" placeholder="Password again"/>
                    <button className="loginButton">Sign up</button>
                    
                    <button className="loginRegisterButton">Log into Account</button>
                </form>
            </div>
        </div>
    </div>
)
}


export default Register;
