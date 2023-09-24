import React, { useEffect, useRef, useState } from 'react'
import style from "./homePage.module.css"
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Create = () => {
  let [name,setName]=useState("")
  let [sal,setSal]=useState("")
  let [com,setCom]=useState("")
  
  const namRef=useRef(null)
  const salRef=useRef(null)
  const comRef=useRef(null)
  const subRef=useRef(null)

  let navigate=useNavigate()
  useEffect(()=>{
    namRef.current.focus()
  },[])
  function keyn(e){
    if(e.keyCode===13){
        salRef.current.focus()
        e.preventDefault()
    }
  }
  function keys(e){
    if(e.keyCode===13){
        comRef.current.focus()
        e.preventDefault()
    }
  }
  function keyc(e){
    if(e.keyCode===13){
        subRef.current.focus()
        e.preventDefault()
    }
  }
  function nam(e){
    setName(e.target.value)
    e.preventDefault()
  }
  function salary(e){
    setSal(e.target.value)
    e.preventDefault()
  }
  function company(e){
    setCom(e.target.value)
    e.preventDefault()
  }
  function click(e){
    e.preventDefault()
//     console.log(`Name :${name}
// Salary :${sal}
// Company :${com}`);
namRef.current.focus()
let person={
  name:name,
  salary:sal,
  company:com
}
axios.post("http://localhost:3000/employees",person)
.then(()=>{
  console.log("DATA HAS BEEN POSTED SUCCESSFULLY");
})
.catch(()=>{
  console.log("SOMETHING WENT WRONG");
})
setCom('')
setName('')
setSal('')

navigate("/users")
  }
  return (
    <div id={style.createBlock}>
      <div className={style.box}>
        <form action="">
      <h3>CREATE USER</h3>
          <label htmlFor="" >NAME</label>
          <input type="text" value={name} ref={namRef} onChange={nam} onKeyDown={keyn}/>
          <br />
          <label htmlFor="">SALARY</label>
          <input type="text" value={sal} ref={salRef} onChange={salary} onKeyDown={keys}/>
          <br />
          <label htmlFor="">COMPANY</label>
          <input type="text" value={com} ref={comRef} onChange={company} onKeyDown={keyc}/>
          <br />
          <button onClick={click} ref={subRef}>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Create