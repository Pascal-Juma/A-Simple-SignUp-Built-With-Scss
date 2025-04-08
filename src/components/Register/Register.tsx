import './Register.css'

function Register() {
  return (
    <>
    <div className="register-container">
      <h3 className="register-heading">
        Sign Up
      </h3>
      <form className="register-form">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email Address" />
        <input type="password" placeholder="Password" />
        <button type="button" className="submit-btn">Sign Up</button>
      </form>
      <p>or</p>
      <div className="button-wrapper">
        <button type="button">G Signin with Google</button>
        <button type="button">F Signin with Facebook</button>
      </div>
      <h5>Already have an account? <a href="#" rel="noopener noreferer">Sign in</a>
      </h5>
    </div>
    </>
  )
}

export default Register
