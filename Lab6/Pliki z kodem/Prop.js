import './style.css';
import React from "react"; 

export function FunkcjaWProps(props){
    return(
       <img className="maly-obrazek" src="https://image.flaticon.com/icons/png/512/51/51172.png" alt={props.alt} onClick={props.obroc} />

    )
}