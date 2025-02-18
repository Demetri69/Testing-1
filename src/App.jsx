import InputField from "./componets/InputField"
import SocialLogin from "./componets/SocialLogin"

const App = () =>{
  return(
    <div className="login-container">
      <h2 className="form-title">Log in with</h2>
     <SocialLogin />

    <p className="separator"><span>or</span></p>

        <form action="" className="login-form">
        <InputField type="email" placeholder="Email address" icon="mail"/>
        <InputField type="password" placeholder="Password" icon="lock"/>
        <a href="#" className="forgot-password-link">Forgot Password</a>

        <a href="http://localhost:5173/">
          <button className="login-button">Log In</button>
        </a>

      </form>

      <p className="signup-text">Don&apos;t have an account?<a href="#">Signup now</a></p>
    </div>
  )

}

export default App