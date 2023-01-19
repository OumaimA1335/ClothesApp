import React, { useState } from 'react'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material';
import CheckroomIcon from '@mui/icons-material/Checkroom';
import { NavLink } from 'react-router-dom';

const Header = () => {
    const [num, setNum] = useState();
    const user = localStorage.getItem("email");
    const logout =()=>{
        localStorage.clear()
        window.location ="/signIN"
    }
   
    return (
        <div>
            <AppBar sx={{ backgroundColor: "#232F3D" }} position="sticky">
                <Toolbar>
                    <NavLink to="/home" style={{ color: "white" }}>
                        <Typography>
                         <CheckroomIcon/>   Clothes Store
                        </Typography>
                    </NavLink>
                    <Tabs sx={{ ml: "auto" }}
                        textColor='inherit'
                        indicatorColor='primary'
                        value={num}
                        onChange={(e, val) => setNum(val)}>
                    {user &&    <Tab LinkComponent={NavLink} to="/Add" label='Add clothes' />}
                    {user &&    <Tab LinkComponent={NavLink} to="/clothes" label='clothes' />}
                     {user &&    <Tab onClick ={logout}  label='LogOut' />}
                      

                    </Tabs>

                </Toolbar>

            </AppBar>


        </div>
    )
}

export default Header