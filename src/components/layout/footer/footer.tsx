import Image from 'next/image';
import React from 'react';



function Footer({baseUrl}:any) {
    
    return (
        <footer className="footer">
            <div className="layout">
                <div className="footer-wrapper ">
                    <div className="footer-cont1">
                        <a href="/" className="footer-cont1__logo">
                            <Image src={`/assets/img/common/logo.svg`} width={158} height={80} alt='footer-logo' />
                        </a>
                        <div className="footer-cont1__info">
                            <p className="footer-cont1__info__txt">Address: 123 Street St., Village City</p>
                            <p className="footer-cont1__info__txt">Tel: 1234-567-8901</p>
                            <p className="footer-cont1__info__txt">Fax: 123-456-789</p>
                        </div>
                    </div>
                    <div className="footer-cont2">
                        <ul className="footer-cont2__list">
                            <li className="footer-cont2__item">
                                <a href="/about/" className="footer-cont2__item__anchor">About</a>
                            </li>
                            <li className="footer-cont2__item">
                                <a href="/product/" className="footer-cont2__item__anchor">Product</a>
                            </li>
                            <li className="footer-cont2__item">
                                <a href="/services/" className="footer-cont2__item__anchor">Services</a>
                            </li>
                        </ul>
                        <ul className="footer-cont2__list">
                            <li className="footer-cont2__item">
                                <a href="/sitemap/" className="footer-cont2__item__anchor">Sitemap</a>
                            </li>
                            <li className="footer-cont2__item">
                                <a href="/contact/" className="footer-cont2__item__anchor">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <p className="footer-copyright">(c)202x logo.com.ph</p>
            </div>

        </footer>
    );
}

export default Footer;