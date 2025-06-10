'use client';

import React, { useState } from "react";

type InputPassProps = {
    className?: string,
    id?: string,
    name?: string,
    placeholder: string,
    value?: string,
    defaultValue?: string,
}
export default function InputPassword({className="", id, name='', placeholder="placeholder", value='', defaultValue}: InputPassProps) {
    const [text, setText] = useState(value);
    const handleChange = (e:any)=>{
        setText(e.target.value);
    }
    return (<>
        <input type="password" name={name} id={id} className={`input-text ${className}`} placeholder={placeholder} value={text} onChange={handleChange} defaultValue={defaultValue}/>
    </>)
}