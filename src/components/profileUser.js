import React from "react";
import { useSelector } from "react-redux";
export function Profile(){
    const user=useSelector(store=>store.storeUser.userReducer.user)    
    console.log("user de profile: ",user)
    return  <div>
        
    <h1>Username {user.fullName}</h1>
    <h2 >Contact, {user.email}</h2>
    </div>
}