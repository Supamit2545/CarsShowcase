import React, { useState } from 'react';
import { useRef, useEffect, useContext } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const navigate = useNavigate();

  const [email , setEmail] = useState("");
  const [password , setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const login = (e) =>{
    e.preventDefault();
    axios.post("http://localhost:3001/login",{
      email: email,
      password: password,
    }).then((response) => {
      console.log(response.data.message);
      window.location.href = '/'
      alert(response.data.message)
    })

    
  }
  return (
    <div className="text-center flex justify-center mt-40">
      <div className="border-2 border-black rounded-md px-20 py-10 gap-5">
        <form className="flex flex-col gap-5">
          <div className="text-3xl font-bold">Sign In!</div>
          <div className="text-left">
            <div className="font-bold">Email</div>
            <input
              className="border-2 border-black rounded-full p-2 px-10"
              type="text"
              name="email"
              id="email"
              placeholder="Enter Your Email"
              onChange={(e) => {setEmail(e.target.value)}}
              required
            />
          </div>
          <div className="text-left">
            <div className="font-bold">Password</div>
            <input
              className="border-2 border-black rounded-full py-2 px-10"
              type="password" // Use type="password" for password masking
              name="password"
              onChange={(e) => {setPassword(e.target.value)}}
              id="password"
              placeholder="Password"
              required
            />
          </div>
          <div className="space-x-10">
            <button onClick={login} type="submit" className="mx-auto px-10 py-2 rounded-md border-2 border-black bg-green-700">
              Login
            </button>
            
          </div>
        </form>
        <button className="mx-auto px-10 py-2 rounded-md border-2 border-black bg-red-700">
              <Link to="/">Back</Link>
            </button>
      </div>
    </div>
  );
}

export default Login