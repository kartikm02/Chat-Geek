import "./signupForm.css";
import { useState } from "react";


const SignupForm = () => {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPassword, setConfPassword] = useState('');

    const passwordHandler = (event) => {
        setPassword(event.target.value);
        // console.log(event.target.value)
    }

    const emailHandler = (event) => {
        setEmail(event.target.value);
        // console.log(event.target.value)
    }


    const usernameHandler = (event) => {
        setUsername(event.target.value);
        // console.log(event.target.value)
    }

    const confPasswordHandler = (event) => {
        setConfPassword(event.target.value);
        // console.log(event.target.value)
    }

    let submitHandler = (event) => {
        event.preventDefault();

        console.log("username: " + username);
        console.log("Email: " + email);
        console.log("Password: " + password);
        console.log("Confirm Password: " + confPassword);


        setUsername('');
        setEmail('');
        setPassword('');
        setConfPassword('');
    }

    const Link = "www.google.com";
    return (
        <div className="innerBox">
        <h1 className="startText">
                WELCOME BACK
            </h1>
        <form onSubmit={submitHandler}>
            
            <label htmlFor="username">Username</label>
            <input type="text" id="username" name="username" value={username} onChange={usernameHandler} />

            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" value={email} onChange={emailHandler} />

            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" value={password} onChange={passwordHandler} />

            <label htmlFor="conPassword">Confirm Password</label>
            <input type="password" id="conPassword" name="conPassword" value={confPassword} onChange={confPasswordHandler} />

            <button className="submit">Signup</button>
            
        </form>
        <h1 className="endText">Already have an Account? <a href={Link}>Login</a></h1>
    </div>
    )
}

export default SignupForm;