import React from "react";

type InputTextProps = {
    className?: String,
    id?: String,
    name: String,
    placeholder: String,
    value?: String,
    onchange?: Function,
    defaultValue?: String,
}
export default function InputText({className="", id, name='', placeholder="placeholder", value, onchange, defaultValue}: InputTextProps) {
    return (<>
        <input type="text" name={name} id={id} className={`input-text ${className}`} placeholder={placeholder} value={value} onChange={onchange} defaultValue={defaultValue}/>
    </>)
}