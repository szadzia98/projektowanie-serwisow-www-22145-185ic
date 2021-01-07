import React from "react";
import'./style.css';

export function Obrazek(props){
    return(
        <img src={props.zrodlo} alt={props.blad_wczytania} />
    )
}