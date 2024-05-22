'use client'
export default function ButtonLink({className="", text, href, target, download}){
    return(<>
        <a href={href} 
            className={`button-link ${className}`} 
            target={target} 
            download={download}>{text}</a>
    </>);
}