'use client'

import React from "react";

type ButtonLinkProps = {
    className?: String,
    text: String,
    href: String,
    target?: String,
    download?: String,
    onClick?: React.MouseEventHandler
}

export default function ButtonLink({className="", text, href, target, onClick}: ButtonLinkProps){
    return(<>
        <a href={href} 
            className={`button-link ${className}`} 
            target={target} 
            onClick={onClick}
            >{text}</a>
    </>);
}