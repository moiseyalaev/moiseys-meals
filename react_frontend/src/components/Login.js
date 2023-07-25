import "../styles/login.css";
// import axios from 'axios'; 
import { useRef } from "react"

const Login = ({setCurrUser, setShow}) => {
  const formRef = useRef()

  const login = async (userInfo, setCurrUser) => {
    const url = "http://localhost:3000/login"

    try {
        const response = await fetch(url, {
            method: "post",
            headers: {
                'content-type': 'application/json',
                'accept': 'application/json'
            },
            body: JSON.stringify(userInfo)
        })

        const data = await response.json()

        if(!response.ok) throw data.error

        localStorage.setItem("token", response.headers.get("Authorization"))
        setCurrUser(data)        
    } catch(error) {
       console.log("error", error)
    }
}

  const handleSubmit = e => {
    e.preventDefault()
      const formData = new FormData(formRef.current)
      const data = Object.fromEntries(formData)
      const userInfo = {
        "user" : { email: data.email, password: data.password }
      }
      login(userInfo, setCurrUser)
      e.target.reset()
  }

  const handleClick = e => {
    e.preventDefault()
    setShow(false)
  }

  return(
    <div className="container">
      <h1 className="title">Moisey's Meals</h1>
      <form className="form" ref={formRef} onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name='email'
            placeholder="johndoe@example.com"
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            id="password"
            type="password"
            name="password"
            placeholder="password"
          />
        </div>
        <button className="submit-button" type="submit">
          Login
        </button>
        {/* <br></br> */}
        <div className="signup-link">Not registered yet, <a href="#signup" onClick={handleClick} >Signup</a> </div>
      </form>
    </div>
  )
}

export default Login
