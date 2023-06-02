import React from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import { useState } from 'react'
function Add() {
    const [Name, setName] = useState('')
    const [Email, setEmail] = useState('')
    const [Number, setNumber] = useState()
    const [Cource, setCource] = useState('')


    const senddatatoapi = () => {
        axios.post('http://localhost:3002/posts' , {
          Name,
          Email,
          Number,
          Cource
        })
    }
  return (
    <>
    <nav class="navbar navbar-dark bg-primary">
 
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Crud</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <a class="nav-link active" aria-current="page" href="#">Home</a>
        <a class="nav-link" href="#">Features</a>
        <a class="nav-link" href="#">Pricing</a>
        <a class="nav-link disabled">Disabled</a>
      </div>
    </div>
  </div>

</nav>
<form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => setName(e.target.value)} aria-describedby="emailHelp"/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setEmail(e.target.value)}/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Number</label>
    <input type="number" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" onChange={(e) => setNumber(e.target.value)}/>

  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Course </label>
    <input type="text" class="form-control" id="exampleInputEmail1" onChange={(e) => setCource(e.target.value)} aria-describedby="emailHelp"/>
    

  </div>

<Link to= '/'><button type="submit" class="btn btn-primary" onClick={senddatatoapi}>Submit</button></Link>
</form>
    
    </>
  )
}

export default Add