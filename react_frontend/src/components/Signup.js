import { useRef, useState } from "react"
import "../styles/signup.css";

const Signup=({setCurrUser, setShow})=>{
    const formRef = useRef()
    
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleFirstNameChange = (e) => {
        setFirstName(e.target.value);
    };

    const handleLastNameChange = (e) => {
        setLastName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
       setConfirmPassword(e.target.value);
    };

    const signup = async (userInfo, setCurrUser) => {
        const url = "http://localhost:3000/signup"

        try{
            const response = await fetch(url, {
                method: 'post',
                headers: {
                    "content-type": 'application/json',
                    "accept": "application/json"
                },
                body: JSON.stringify(userInfo)
            }) 

            const data = await response.json()

            if(!response.ok) throw data.error

            localStorage.setItem('token', response.headers.get("Authorization"))
            setCurrUser(data)
        } catch (error) {
            console.log("error", error)
        }
    }
    const handleSubmit = e => {
        e.preventDefault()
        const formData = new FormData(formRef.current)
        const data = Object.fromEntries(formData)
        const userInfo = {
            user: {
                first_name: first_name,
                last_name: last_name,
                email: data.email,
                password: data.password
            }
        }
        signup(userInfo, setCurrUser)
        e.target.reset()
    }

    const handleClick = e => {
        e.preventDefault()
        setShow(true)
    }

    return(
        <div className="container">
        <h1 className="title">Moisey's Meals</h1>
        <form ref={formRef} className="form" onSubmit={handleSubmit}>       
            <h2 className="form-title">Sign Up</h2>
            <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
                type="text"
                id="first_name"
                value={first_name}
                placeholder="John"
                onChange={handleFirstNameChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="lastName">Last Name:</label>
            <input
                type="text"
                id="last_name"
                value={last_name}
                placeholder="Doe"
                onChange={handleLastNameChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
                type="email"
                id="email"
                name='email'
                placeholder="johndoe@example.com"
                value={email}
                onChange={handleEmailChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
                type="password"
                id="password"
                name='password'
                placeholder="password"
                value={password}
                onChange={handlePasswordChange}
            />
            </div>
            <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
                type="password"
                id="confirm_password"
                placeholder="password"
                value={confirmPassword}
                onChange={handleConfirmPasswordChange}
            />
            </div>
            <button className="submit-button" type="submit">
            Sign Up
            </button>

            <div>Already registered? <a href="#login" onClick={handleClick} >Login</a> here.</div>
        </form>
    </div>
    )
}
export default Signup
