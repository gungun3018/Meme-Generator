import React from "react";
import Logo from "../assets/new-logo.png" ;

export default function Header(){
    return(
        <div className="header">
            <img src= {Logo} className="logo" />
            <button type="button" className="date-header">Feb 2024</button>
        </div>
    )
} 