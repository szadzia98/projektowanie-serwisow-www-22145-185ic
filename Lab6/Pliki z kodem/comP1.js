import React from "react";
import'./style.css';

export function PoleTekstowe(props){
    return(
        <input type={props.typ} placeholder={props.opis}/> 
    )
}