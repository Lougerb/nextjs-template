'use client'
import React from "react";

type InputCheckBoxProps = {
    className?: String,
    choices: any[],
}
export default function InputCheckBox({className='', choices=[]}: InputCheckBoxProps){
    const renderChoices = (arr:any) => {
        return arr.map((val:any, index:any)=> {
            return  <React.Fragment key={index}>
                <label htmlFor={val} className={`input-checkbox__wrapper ${className}-input-checkbox__wrapper`}>
                    <input type="checkbox" name={val} id={val} className={`input-checkbox__radio ${className}-input-checkbox__radio`} />
                    <span className={`input-checkbox__text ${className}-input-checkbox__text`}>{val}</span>
                </label>
            </React.Fragment>;
        });
    }
    return (<>
        <div className={`input-checkbox ${className}-input-checkbox`}>
            {renderChoices(choices)}
        </div>
    </>)
}