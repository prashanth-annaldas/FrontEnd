import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [err, setErr] = useState("");
  const navigate = useNavigate();
  
  const handleLogin = (e)=>{
    e.preventDefault();

    let storedEmail = localStorage.getItem("Email");
    let storedPass = localStorage.getItem("Password");

    if (!email || !pass) {
      setErr("Please fill all fields!");
      return ;
    }

    if(email !== storedEmail){
      setErr("Incorrect Email");
      return ;
    }
    else if(pass !== storedPass){
      setErr("Incorrect Password");
      return ;
    }

    if(email === storedEmail && pass === storedPass){
      setErr("Login successful!");
      navigate("/app");
    }
  }

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light bg">
      <main className="form-register bg-white shadow rounded p-4 bgImgIlogin" style={{ maxWidth: "400px", width: "100%" }}>
        <form onSubmit={ handleLogin }>
          <h1 className="h3 mb-3 fw-normal">Login</h1>

          <div className="form-floating mb-3">
            <input type="email" className="form-control" id="floatingEmail" placeholder="name@example.com" onChange={(e)=> setEmail(e.target.value)} />
            <label htmlFor="floatingEmail">Email address</label>
          </div>

          <div className="form-floating mb-3">
            <input type="password" className="form-control" id="floatingPassword" placeholder="Password" onChange={(e)=> setPass(e.target.value)} />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <button className="btn btn-danger w-100 py-2 " type="submit">
            Login
          </button>

          {err && <div>{err}</div>}
        </form>
      </main>
    </div>
  );
}

export default Login;