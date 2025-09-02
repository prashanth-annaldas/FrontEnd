import { useState } from "react";


function Register({ setUser }){
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = ()=>{
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const userExists = users.find((u)=>u.email === email);

        if(userExists){
            setMessage("User already registered. Please login!");
        }
        else{
            const newUser = {email, pass};
            users.push(newUser);
            localStorage.setItem('users', JSON.stringify(users));
            setMessage("Registration successful! You can now login.");
            setEmail("");
            setPass("");
        }
    }

    return <div>
        <input type="email" placeholder="Enter valid email.." value = { email } onChange={(e)=> setEmail(e.target.value)} /> <br />
        <input type="password" placeholder="Enter valid password.." value={ pass } onChange={(e)=> setPass(e.target.value)} /> <br />
        <button onClick={ handleRegister }>Register</button> <br />
        <p>{message}</p>
    </div>
}

export default Register;