import React,{useState} from 'react'
import {
  Button,

  FormLabel,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
function AddClothes() {
  const history = useNavigate();
  const [inputs, setInputs]=useState ({
    name:'',
    description :'',
    gender :'',
    price :'',
    image:''

  });
 
  const handleChange = (e)=>
  {
    setInputs((prevState)=>
    ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
    console.log(e.target.name, "Value", e.target.value);
  }
  const sendRequest= async()=>
  {
    await axios.post("http://localhost:7000/Clothes/",{
    name :String(inputs.name),
    description :String(inputs.description),
    gender :String(inputs.gender),
    price: Number (inputs.price),
    image :String (inputs.image),
   
  }).then(res=> res.data);

  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(() => history("/clothes"));
  };
  return (
    <form onSubmit={handleSubmit}>
      <Box
        display="flex"
        flexDirection="column"
        justifyContent={"center"}
        maxWidth={700}
        alignContent={"center"}
        alignSelf="center"
        marginLeft={"auto"}
        marginRight="auto"
        marginTop={10}
      >
        <FormLabel>Name</FormLabel>
        <TextField
          value={inputs.name}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="name"
        />
      
        <FormLabel>Description</FormLabel>
        <TextField
          value={inputs.description}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="description"
        />
          <FormLabel>Gender</FormLabel>
          <TextField
          value={inputs.gender}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="gender"
        />
        <FormLabel>Price</FormLabel>
        <TextField
          value={inputs.price}
          onChange={handleChange}
          type="number"
          margin="normal"
          fullWidth
          variant="outlined"
          name="price"
        />
        <FormLabel>Image</FormLabel>
        <TextField
          value={inputs.image}
          onChange={handleChange}
          margin="normal"
          fullWidth
          variant="outlined"
          name="image"
        />
       

        <Button variant="contained" type="submit">
          Add Item
        </Button>
      </Box>
    </form>
  )
}

export default AddClothes