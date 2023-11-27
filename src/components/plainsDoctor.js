import React from "react";
import { useParams } from "react-router-dom";
import {useSelector }from "react-redux"
export default function PlanisDoctor(){
    const params=useParams()
    const doctors=useSelector(store=>store)
    return(
        <h2>sd</h2>
    )
}