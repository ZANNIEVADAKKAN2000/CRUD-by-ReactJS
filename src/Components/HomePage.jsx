import React from 'react'
import style from "./homePage.module.css"
import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <div id={style.nav} >
        <Link to="/">CREATE USER</Link>
        <Link to="/users">USERS</Link>
        
    </div>
  )
}

export default HomePage