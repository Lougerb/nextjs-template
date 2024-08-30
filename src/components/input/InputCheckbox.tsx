'use client'
import React from "react";

export default function InputCheckBox({className='customClass', choices=[]}){
    const renderChoices = (arr) => {
        return arr.map((val, index)=> {
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