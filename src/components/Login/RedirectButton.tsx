import React from "react";
import { Link } from "react-router-dom";
import { redirectStyle } from "./RedirectStyle";

export default function RedirectButton(props: any){
    return(
        <Link className={redirectStyle({bordered: props.bordered })} to={props.linkToRedirect} >{props.text}</Link>
    )
}