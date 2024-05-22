export default function InputText({className="", id, name='', placeholder="placeholder"}) {
    return (<>
        <input type="text" name={name} id={id} className={`input-text ${className}`} placeholder={placeholder}/>
    </>)
}