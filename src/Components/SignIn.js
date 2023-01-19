import React, { useEffect, useState } from "react";
import {auth,provider} from "../Config";
import {signInWithPopup} from "firebase/auth";
import { Link, useNavigate} from 'react-router-dom';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Home from "../Components/Home";

function SignIn(){
    const [value,setValue] = useState('')
    const navigate = useNavigate();
    const handleClick =()=>{
        signInWithPopup(auth,provider).then((data)=>{
            setValue(data.user.email)
            localStorage.setItem("email",data.user.email)
        }).then(()=> navigate("/home"))
      
       
    }

    useEffect(()=>{
        setValue(localStorage.getItem('email'))
    })

return (
    <Box sx={{ '& button': { m: 30 ,} }}>
 
 
        <Button 
    ///  LinkComponent={Link} to={"/home"}
        variant="contained"
         size="large"
         onClick={handleClick}>Sign in With Google
         </Button>
       
    </Box>
);
}
export default SignIn;