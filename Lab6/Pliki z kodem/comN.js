import React from "react";
import'./style.css';
import {PoleTekstowe} from './comP1';
import {Obrazek} from './comP2';

export function Nadrzedny(){
    return(
        <div className="wnetrze pod-soba">
            Komponent nadrzędny
            <PoleTekstowe typ="text" opis="Wpisz coś" />
            <Obrazek blad_wczytania="problem z wczytaniem" zrodlo="https://cdn.pixabay.com/photo/2020/06/26/16/00/kitten-5343197_960_720.jpg"/>
        </div>

    )
}