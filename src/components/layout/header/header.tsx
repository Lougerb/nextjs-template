import Image from 'next/image';
import logo from '@/assets/img/common/logo.svg';
import React from 'react';

export default function Header(){
    return (<>
        <header className="header">
            <h1 className="head1">
                <a href="/" className="header-logo">
                    <Image src={logo} height={60} alt='logo'/>
                </a>
            </h1>
        </header>
    </>)
}