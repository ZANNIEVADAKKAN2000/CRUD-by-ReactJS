import React, { useEffect, useState } from 'react'
import style from "./homePage.module.css"
import {  useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Edit = () => {
  let [name,setName]=useState("")
  let [salary,setSalary]=useState("")
  let [company,setCompany]=useState("")
  let {id}=useParams()
  let navigate=useNavigate()
    useEffect(()=>{
        axios.get(`http://localhost:3000/employees/${id}`)
        .then((res)=>{
            console.log(res.data);
            setName(res.data.name)
            setSalary(res.data.salary)
            setCompany(res.data.company)
        })
        .catch(()=>{
            console.log("ERROR");
        })
    },[])
    let changeName=(e)=>{
      setName(e.target.value)
    }
    let changeSalary=(e)=>{
      setSalary(e.target.value)
    }
    let changeCompany=(e)=>{
      setCompany(e.target.value)
    }
    let formHandler=(e)=>{
      e.preventDefault()
      let person={
        name:name,
        salary:salary,
        company:company
      }
      axios.put(`http://localhost:3000/employees/${id}`,person)
      .then(()=>{
        console.log("SUCCESSFULLY UPDATED");
      })
      .catch(()=>{
        console.log("FAILED TO UPDATE");
      })
      navigate("/users")
    }
  return (
    <div id={style.createBlock}>
      <div className={style.box}>
        <form action="">
        <h3>EDIT USER</h3>
          <label htmlFor="" >NAME</label>
          <input type="text" value={name} onChange={changeName} />
          <br />
          <label htmlFor="">SALARY</label>
          <input type="text" value={salary} onChange={changeSalary}/>
          <br />
          <label htmlFor="">COMPANY</label>
          <input type="text" value={company} onChange={changeCompany} />
          <br />
          <button onClick={formHandler}>SUBMIT</button>
        </form>
      </div>
    </div>
  )
}

export default Edit






//tuesday 4.30pm