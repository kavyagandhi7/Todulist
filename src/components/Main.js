import axios from 'axios'
import React from 'react'
import {Link} from 'react-router-dom'
import { useEffect } from 'react'
import { useState } from 'react'
function Main() {
 const getData = () => {
     axios.get('http://localhost:3002/posts').then((getData) => {
         setApidata(getData.data)

 })
 }
 const onDelete = (id) => {
     axios.delete(`http://localhost:3002/posts/${id}`).then(()=>{
         getData()     })

 }
const setTolocalstorage = (id, Name, Number, Email, Cource) => {

    localStorage.setItem('id',id)
    localStorage.setItem('Name',Name)
    localStorage.setItem('Number',Number)
    localStorage.setItem('Email',Email)
    localStorage.setItem('Cource',Cource)



}

    
    useEffect(() => {
      axios.get('http://localhost:3002/posts').then((getData) => {
        setApidata(getData.data)

      })
    }) 
    const [apidata, setApidata] = useState([])
    const setId = (id) => {
        console.log(id)
        localStorage.setItem('id',id)
    }

  return (
<>
<table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
      <th scope="col">Handle</th>
      <th scope="col">Action</th>

    </tr>
  </thead>
 
    {apidata.map((data) =>{
        return(
            <tbody>
            <tr>
            <th scope="row">{data.id}</th>
            <td>{data.Name}</td>
            <td>{data.Email}</td>
            <td>{data.Number}</td>
            <td>{data.Cource}</td>
            <td><button className='btn btn-danger' onClick={() => onDelete(data.id)}>Delete</button>
           <Link to= {`/update/${data.id}`}><button className='btn btn-info' onClick={() => setTolocalstorage(data.id,
           data.Name,
           data.Number,
           data.Email,
           data.Cource)}>Update</button></Link></td></tr>  </tbody>
          

         



        )
    })}

</table>



</>
  )
}

export default Main