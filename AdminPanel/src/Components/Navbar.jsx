import React from 'react'
import {Link} from "react-router-dom"

export default function () {
  return (
    <nav className='w-full flex bg-black text-white'>
        <h1>SmartServiceConnect</h1>
        <ul>
            <li><Link to={"/"}>Dashboard</Link></li>
            <li><Link to={"/contact"}>Contact</Link></li>
            <li><Link to={"/about"}>About</Link></li>
        </ul>

    </nav>
  )
}
