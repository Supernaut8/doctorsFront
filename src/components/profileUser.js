import React from "react";
import { useSelector } from "react-redux";
import { Avatar, Grid } from "@mui/material";
import { MenuItem } from "@mui/base";
export function Profile() {
    const user = useSelector(store => store.storeUser.userReducer.user)
    console.log("user de profile: ", user)
    return (
        <Grid container maxWidth="lg"

            direction="row"
            justifyContent="center"
            alignItems="center"
        >
            <Grid item xs={4} md={5}>
                <Avatar />
            </Grid>
            <Grid item xs={4} md={5}>
                nombre
            </Grid>
            <Grid item xs={4} md={5}>
                plains suscribed
            </Grid>

        </Grid>)


}