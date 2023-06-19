import React from 'react'
import {useEffect,useState} from 'react'
import { useNavigate, useParams } from "react-router-dom";
import axios from 'axios'

function UpdateUser() {
  const {id}=useParams()
  const[name,setname] = useState()
 const[desig,setdesig] = useState()
 const navigate = useNavigate()
  
  useEffect(()=>{
    axios.get('http://localhost:3001/getemp'+id)
    .then(result=>{
      console.log(result)
      setname(result.data.name)
      setdesig(result.data.desig)
    })
    .catch(err=>console.log(err))
  },[])

  const update =(e)=>{
    e.preventDefault();
    axios.post("http://localhost:3001/updateUser",{ crossDomain: true },{name,desig})
    .then(r=>{
      console.log(r)
      navigate('/')
  })
  .catch(err=>console.log(err))
  }
  
  return (
    <div>
      <form>
        <h2>Upadate Employee Data</h2>
      <label>Employee name:
        <input type="text" value={name} onChange={(e)=> setname(e.target.value)} />
      </label>
      <label>Designation:
        <input type="text" value={desig} onChange={(e)=> setdesig(e.target.value)} />
      </label>
      <button>Update</button>
    </form>
    </div>
  )
}

export default UpdateUser
