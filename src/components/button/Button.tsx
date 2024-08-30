'use client'

import React from "react";

type ButtonProps = {
    className?: String,
    text: String,
    onClick?: React.MouseEventHandler
}

export default function Button({className="", text, onClick}: ButtonProps){
    return(<>
        <button className={`button-link ${className}`} onClick={onClick} >{text}</button>
    </>);
}