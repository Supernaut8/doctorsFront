import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Grid } from "@mui/material";
import {Box, Typography} from "@mui/material"

export function Profile() {
    
    const user = useSelector(store => store.storeUser.userReducer.user)

    return (
            <Grid container 
            direction="row"
            justifyContent="center"
            alignItems="center"
 
            border="solid red"
            height={500}>
                <Box gridColum="span 4" bgcolor={"blue"} height={400}>
                    
                <Avatar/>{user.fullName}
                    {user.email}
                 </Box>
                <Grid item bgcolor={"green"}>
                    telefono
                </Grid>
              
            </Grid>
    );
       

}