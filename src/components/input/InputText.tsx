import React from "react";

type InputTextProps = {
    className?: string,
    id?: string,
    name?: string,
    placeholder: string,
    value?: string,
    onchange?: any,
    defaultValue?: string,
}
export default function InputText({className="", id, name='', placeholder="placeholder", value, onchange, defaultValue}: InputTextProps) {
    return (<>
        <input type="text" name={name} id={id} className={`input-text ${className}`} placeholder={placeholder} value={value} onChange={onchange} defaultValue={defaultValue}/>
    </>)
}