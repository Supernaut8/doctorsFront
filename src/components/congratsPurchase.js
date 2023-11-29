import { useSelect } from "@mui/base";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import userActions from "../redux/actions/usersActions";


export function Congrats() {
    const params=useParams()
    const user=useSelector(store=>store.storeUser.userReducer.user)
    const idPlan=params.string
    const dispatch = useDispatch(userActions.SuscripcionPlan(idPlan,user))
    return (
        
        <>
            <div>feilicdades por su compra</div>
            <button> volver</button>
        </>

    )
}