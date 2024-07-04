'use client';
import { useState } from "react";
import Image from "next/image";

type InputFileParam = {
    name: string
}

export default function InputFile({name}: InputFileParam) {
    const [iFile, setFile] = useState('');

    const handleFile = (e:any) => {
        // console.log();
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const renderPreview = () => {
        if(iFile.length !== 0) {
            return <Image src={iFile} alt="" width={500} height={100}/>;
        } else {
            return 'No Image Selected';
        }
    }
    
    return (
            <>
                <input type="file" name={name} id={name} className="mt-[2rem]"  onChange={(e)=>{handleFile(e);}} />
                <div className="">{renderPreview()}</div>
            </>
    );
}