import axios from 'axios'
import React, { useEffect, useRef, useState } from 'react'
import style from "./homePage.module.css"
import { Link} from 'react-router-dom'

const Users = () => {
  let [p,setP]=useState([])
  let idRef=useRef()
  useEffect(()=>{

    axios.get("http://localhost:3000/employees")
    .then((res)=>{
      setP(res.data)
    })
    .catch(()=>{
      console.log("ERROR");
    })
  },[])
  let deleteUser=()=>{
    let val=idRef.current.innerText
    axios.delete(`http://localhost:3000/employees/${val}`)
    window.location.assign("/users")
  }
    return (
    <div id={style.out}>{p.map((x)=>{
      return(
        <div id={style.card}>
          <center ref={idRef}>{x.id}</center>
          
          <p><span> NAME </span> :  {x.name}
          <br />
          <span> SALARY  </span> :  {x.salary}
          <br />
          <span> COMPANY </span> :  {x.company}
          </p>
          <Link to={`/edit-user/${x.id}`} >EDIT</Link>
          <button onClick={deleteUser}>DELETE</button>
          
        </div>
      )
    })}</div>
  )
  }

export default Users


//let deleteData=(id)=>{
  // axios.delete(`http://localhost:3000/employees/${id}`)
  // window.location.reload()
// }

// {/* <button onclick={()=>{deleteData(x.id)}}>DELETE</button> */}