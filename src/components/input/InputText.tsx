'use client';

import React, { useState } from "react";

type InputTextProps = {
    className?: string,
    id?: string,
    name?: string,
    placeholder: string,
    value?: string,
    defaultValue?: string,
}
export default function InputText({className="", id, name='', placeholder="placeholder", value='', defaultValue}: InputTextProps) {
    const [text, setText] = useState(value);
    const handleChange = (e:any)=>{
        setText(e.target.value);
    }
    return (<>
        <input type="text" name={name} id={id} className={`input-text ${className}`} placeholder={placeholder} value={text} onChange={handleChange} defaultValue={defaultValue}/>
    </>)
}