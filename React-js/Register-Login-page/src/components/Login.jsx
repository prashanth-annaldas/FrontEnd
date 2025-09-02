import { useState } from "react";


function Login({ setUser }){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [message, setMessage] = useState("");

    const handleLogin = ()=>{
        const users = JSON.parse(localStorage.getItem('users'));
        const user = users.find((u)=>(u.email === email && u.pass === pass));

        if(user){
            setUser(user);
            setMessage("Login successful!");
        }
        else{
            setMessage("Invalid email or password");
        }
    }

    return <div>
        <input type="email" placeholder="Enter valid email..." value={email} onChange={(e)=>setEmail(e.target.value)} /> <br />
        <input type="password" placeholder="Enter valid password..." value={pass} onChange={(e)=>setPass(e.target.value)} /> <br />
        <button onClick={ handleLogin }>Login</button> <br />
        <p>{ message }</p>
    </div>
}

export default Login;