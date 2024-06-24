import React from "react";
type SubmitButton = {
    className: String,
    text: String
}
export default function SubmitButton({className="customClass", text}: SubmitButton){
    return(<>
        <button type="submit" className={`button-submit ${className}`}>
            <span className={`button-submit__text`}>{text}</span>
        </button>
    </>);
}