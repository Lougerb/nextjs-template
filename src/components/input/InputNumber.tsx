'use client';

import React, { useState } from "react";

type InputNumberProps = {
    className?: string,
    id?: string,
    name?: string,
    placeholder: string,
    value?: number,
    defaultValue?: number,
}
export default function InputNumber({className="", id, name='', placeholder="placeholder", value=0, defaultValue}: InputNumberProps) {
    const [num, setNum] = useState(value);
    const handleChange = (e:any)=>{
        setNum(e.target.value);
    }
    
    return (<>
        <input type="number" name={name} id={id} className={`input-text ${className}`} placeholder={placeholder} value={num} onChange={handleChange} defaultValue={defaultValue}/>
    </>)
}