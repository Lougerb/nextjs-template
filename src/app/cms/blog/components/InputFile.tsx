'use client';
import { useState } from "react";
import Image from "next/image";

type InputFileParam = {
    name: string,
    fileName: string,
    id?: number,
    defaultValue?: string
}

export default function InputFile({name, fileName, id, defaultValue}: InputFileParam) {
    const [iFile, setFile] = useState('');

    const handleFile = (e:any) => {
        setFile(URL.createObjectURL(e.target.files[0]));
    }

    const renderPreview = () => {
        if(iFile.length !== 0) {
            return <>
                <div className="wrapper relative overflow-hidden block w-[100%] h-[100%] bg-black z-0">
                    <Image src={iFile} alt={`${fileName}`} width={'500'} height={'500'} className="block w-[100%] h-[100%] object-cover object-center absolute z-0 blur-xl"  quality={100} />
                    <Image src={iFile} alt={`${fileName}`} width={'500'} height={'500'} className="block w-[100%] h-[100%] object-contain object-center relative z-10"  quality={100} />
                </div>
            </>
            
        }else if (fileName) {
            return <>
                <div className="wrapper relative overflow-hidden block w-[100%] h-[100%] bg-black z-0">
                    <Image src={`/uploads/blog/${id}/${fileName}`} alt={`${fileName}`} width={'500'} height={'500'} className="block w-[100%] h-[100%] object-cover object-center absolute z-0 blur-xl"  quality={100} />
                    <Image src={`/uploads/blog/${id}/${fileName}`} alt={`${fileName}`} width={'500'} height={'500'} className="block w-[100%] h-[100%] object-contain object-center relative z-10"  quality={100} />
                </div>
            </>
        } else {
            return 'No Image Selected';
        }
    }
    
    return (
            <>
                <label className="figure block relative w-[50rem] h-[50rem] mt-[2rem]  z-10">
                    {renderPreview()}
                    <input type="file" name={name} id={name} className="mt-[2rem] hidden"  onChange={(e)=>{handleFile(e);}} />
                    <input type="hidden" name="currentFile" id="currentFile" className="hidden" defaultValue={`${fileName ? fileName : ''}`}/>
                    <div className="w-[50rem] h-[50rem] flex items-center justify-center bg-gray-300/0 
                                    cursor-pointer text-[#fff] absolute inset-0 m-auto 
                                    hover:bg-zinc-300/50 z-10">Change Image</div>
                </label>
            </>
    );
}