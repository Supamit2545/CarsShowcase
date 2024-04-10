import React  from 'react'
import {Link} from 'react-router-dom'
function Topbar() {
  return (
    <div className='flex justify-between bg-slate-700 py-5 text-white'>
        <div className='ml-10'>Logo</div>
        <div className=''>
            <ul className='flex mx-5 space-x-10 mr-10'>
                <li>Home</li>
                <li>About</li>
                <li><Link className='border-2 border-black rounded-md text-2xl bg-green-700 px-5 py-2' to="/Register">Register</Link></li>
                <li><Link className='border-2 border-black rounded-md text-2xl bg-green-700 px-5 py-2' to="/Login">Login</Link></li> 
            </ul>
        </div>
    </div>
  )
}

export default Topbar