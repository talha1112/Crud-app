import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function User() {
    const[users,setUsers]= useState([{name:'Talha', desig: 'SE'}])
    
    useEffect(()=>{
      axios.get('http://localhost:3001')
      .then(result=>setUser(result.data))
      .catch(err=>console.log(err))
    },[])

    const handledelete=(id)=>{
      axios.get('http://localhost:3001/deleteUser/'+id)
      .then(res=>{console.log(res)
      window.location.reload()
    }).catch(err=>console.log(err))
    }
  return (
    <div>
      <div>
       <Link to="/Create" className=''>Add +</Link>
        <table className='table'>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Designation</th>
                    
                </tr>
            </thead>
            <tbody>{
                users.map((user)=>{
                    return<tr>
                    <td>{user.name}</td>
                    <td>{user.desig}</td>
                    <Link to={'/update/${user._id}'} className=''>Update +</Link>
                        <button className=''
                          onClick={(e)=>{handledelete(user._id)}}>delete
                        </button>
                  </tr>
                })
            }
            </tbody>
        </table>
      </div>

    </div>
  )
}

export default User
