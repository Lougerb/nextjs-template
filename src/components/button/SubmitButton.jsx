export default function SubmitButton({className="customClass", text}){
    return(<>
        <button type="submit" className={`button-submit ${className}-button-submit`}>
            <span className={`button-submit__text ${className}-button-submit__text`}>{text}</span>
        </button>
    </>);
}