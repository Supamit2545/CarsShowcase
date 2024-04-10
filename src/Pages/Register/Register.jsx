import { Axios } from 'axios'
import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios';


function Register() {
  const [values, setValues] = useState({
    name:"",
    email:"",
    password:""
    
  })
  const handleInput  = (event) =>{
   setValues(prev => ({...prev,[event.target.name]:[event.target.value]}))
  }
  const handleSubmit = async (event) =>{
    event.preventDefault();
    axios.post('http://localhost:3001/signup', values)
    .then(res => console.log("Registerd"))
    .catch(err => console.log(err));
  }
  return (
    <div className="text-center flex justify-center mt-40">
      <div className="border-2 border-black rounded-md px-20 py-10 gap-5">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="text-3xl font-bold">Sign Up!</div>
          <div className="text-left">
            <div className="font-bold">Email</div>
            <input
              className="border-2 border-black rounded-full p-2 px-10"
              type="email"
              name="email"
              id="email"
              placeholder="Enter Email"
              required
              onChange={handleInput}
            />
          </div>
          <div className="text-left">
            <div className="font-bold">Username</div>
            <input
              className="border-2 border-black rounded-full p-2 px-10"
              type="text"
              name="username"
              id="username"
              placeholder="Username"
              required
              onChange={handleInput}
            />
          </div>
          <div className="text-left">
            <div className="font-bold">Password</div>
            <input
              className="border-2 border-black rounded-full py-2 px-10"
              type="password" // Use type="password" for password masking
              name="password"
              id="password"
              placeholder="Password"
              required
              onChange={handleInput}
            />
          </div>
          <div className="space-x-10">
            <button type="submit" className="mx-auto px-10 py-2 rounded-md border-2 border-black bg-green-700">
              Login
            </button>
          </div>
        </form>
        <button className="mx-auto px-10 py-2 rounded-md border-2 border-black bg-red-700">
              <Link to="/">Back</Link>
            </button>
      </div>
    </div>
    
  )
}

export default Register