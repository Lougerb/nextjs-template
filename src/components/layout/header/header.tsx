import Image from 'next/image';
import React from 'react';
import { base } from 'lib/globalFunc';

export default function Header(){
    return (<>
        <header className="header">
            <h1 className="head1">
                <a href="/" className="header-logo">
                    <Image src={`${base}/assets/img/common/logo.svg`} height={60} width={119} alt='logo'/>
                </a>
            </h1>
        </header>
    </>)
}