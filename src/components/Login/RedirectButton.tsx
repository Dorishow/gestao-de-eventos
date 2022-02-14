import React from "react";
import { Link } from "react-router-dom";
import { redirectStyle } from "./RedirectStyle";

export default function RedirectButton(props: any){
    return(
        <a className={redirectStyle({bordered: props.bordered })} href={"/"+props.linkToRedirect} >{props.text}</a>
    )
}