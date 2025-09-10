import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';

function Register() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();

  const handleRegister = (e)=>{
    e.preventDefault();

    let storedEmail = localStorage.getItem("Email");

    if(email === storedEmail){
      setErr("You have already registered!");
      return ;
    }

    if (!email || !pass || !confirmPass) {
      setErr("Please fill all fields!");
      return ;
    }

    if(pass !== confirmPass){
      setErr("Passwords do not match!");
      return ;
    }

    localStorage.setItem("Email",email);
    localStorage.setItem("Password",pass);
    setErr("Register successful!");
    navigate("/Login");
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
      <main className="form-register bg-white shadow rounded p-4" style={{ maxWidth: "400px", width: "100%" }}>
        <form onSubmit={ handleRegister }>
          <h1 className="h3 mb-3 fw-normal">Register</h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=> setPass(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingConfirmPassword" placeholder="Confirm Password" onChange={(e)=> setConfirmPass(e.target.value)} />
            <label htmlFor="floatingConfirmPassword">Confirm Password</label>
          </div>

          <div className="form-check text-start my-3">
            <input className="form-check-input" type="checkbox" value="agree" id="termsCheck" />
            <label className="form-check-label" htmlFor="termsCheck">
              I agree to the <a href="#">terms & conditions</a>
            </label>
          </div>

          <button className="btn btn-primary w-100 py-2" type="submit" >
            Register
          </button>

          <p className="mt-3 mb-0">
            Already have an account? <Link to="/Login">Login</Link>
          </p>

          {err && <div>{err}</div>}
        </form>
      </main>
    </div>
  );
}

export default Register;