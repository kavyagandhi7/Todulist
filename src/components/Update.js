import React from 'react'
import { useEffect } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Update() {
    const [id, setID] = useState(0)
    const [Name, setName] = useState('')
    const [Number, setNumber] = useState()
    const [Email, setEmail] = useState('')
    const [Cource, setCource] = useState('')

console.log(Name)

const handleUpdate = () => {
    axios.put(`http://localhost:3002/posts/${id}`, {
        Name: Name,
        Email: Email,
        Number : Number,
        Cource: Cource 
    } ).then(() => {
        Navigate('../')
    })
}
    const senddatatoapi = () => {
        axios.post('http://localhost:3002/posts' , {
          Name,
          Email,
          Number,
          Cource
        })
    }


    useEffect(() => {
       
setID(localStorage.getItem('id'))
setName(localStorage.getItem('Name'))
setNumber(localStorage.getItem('Number'))
setEmail(localStorage.getItem('Email'))
setCource(localStorage.getItem('Cource'))


    }, [])



  return (
    <>
    <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" value={Name}    onChange={(e) => setName(e.target.value)}/>

  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Number</label>
    <input type="Number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Number}    onChange={e => setNumber(e.target.value)}/>

  </div>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={Email}     onChange={e => setEmail(e.target.value)}/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Course </label>
    <input type="text" class="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" value={Cource}    onChange={e => setCource(e.target.value)}/>
    

  </div>

 <Link to = '/'><button type="submit" class="btn btn-primary" onClick={handleUpdate}>Update</button></Link> 
</form>
    
    
    </>
  )
}

export default Update