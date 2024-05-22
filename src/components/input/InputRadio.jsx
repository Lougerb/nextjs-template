'use client'
import React from "react";
export default function InputRadio({className='customClass', choices=[], name="choice"}){
    const renderChoices = (arr) => {
        return arr.map((val, index)=> {
            return  <React.Fragment key={index}>
                <label htmlFor={val} className={`input-radio__wrapper ${className}-input-radio__wrapper`}>
                    <input type="radio" name={name} id={val} className={`input-radio__radio ${className}-input-radio__radio`} />
                    <span className={`input-radio__text ${className}-input-radio__text`}>{val}</span>
                </label>
            </React.Fragment>;
        })
    }
    return (<>
        <div className={`input-radio ${className}-input-radio`}>
            {renderChoices(choices)}
        </div>
    </>)
}