import { Button } from '@mui/material'
import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import "./clothes.css";
import axios from 'axios';

function Item(props) {
  const history = useNavigate();
    const {_id,name,description, gender ,price , image }= props.item;
    const deleteHandler = async ()=>
    {
    await  axios.delete(`http://localhost:7000/Clothes/${_id}`)
          .then(res=> res.data)
          .then(()=> history("/"))
          .then(()=> history("/clothes"));

    }

  return (
    <div className="card">
    <img src={image} alt={name} />
    <h3>{name}</h3>
    <p>{description}</p>
    <article>For {gender}</article>
    <h3>Rs {price}</h3>
    <Button LinkComponent={Link} to={`/updateclothes/${_id}`} sx={{ mt: "auto" }}> Update</Button>
    <Button onClick ={deleteHandler} color="error" sx={{ mt: "auto" }}> Delete</Button>
    </div>
  )
}

export default Item