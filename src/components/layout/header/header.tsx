import Image from 'next/image';
import React from 'react';

export default function Header(){
    return (<>
        <header className="header">
            <h1 className="head1">
                <a href="/" className="header-logo">
                    <Image src={`/assets/img/common/logo.svg`} height={60} width={119} alt='logo'/>
                </a>
            </h1>
        </header>
    </>)
}