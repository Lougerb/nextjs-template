import { useEffect, useRef } from "react";

export default function Card({f_color, s_color}:any) {
    const prevCard:any = useRef();

    const hoverCard = (e:any) => {
        // Mouse position on current viewport
        const mPosY = e.clientY;
        const mPosX = e.clientX;

        // Browser's width and height
        const winWidth = window.innerWidth;
        const winHeight = window.innerHeight;

        // card's width and height
        const cardWidth = prevCard.current.offsetWidth;
        const cardHeight = prevCard.current.offsetHeight;

        // calculated card position when touched on edge
        const cardPosY = ((mPosY + cardHeight) < winHeight) ? mPosY : Math.abs(cardHeight - mPosY);
        const cardPosX = ((mPosX + cardWidth) < winWidth) ? mPosX : Math.abs(cardWidth - mPosX);
        
        prevCard.current.setAttribute('style', `top: ${cardPosY}px; left: ${cardPosX}px; display:block;`);
    }

    const noHover = () => {
        prevCard.current.setAttribute('style', `display:none;`);
    }



    return <>
            <div className={`block w-[100%] h-[40rem] sbox-card relative ${f_color} cursor-pointer`} onMouseMove={hoverCard} onMouseLeave={noHover}>
                <div ref={prevCard} className={`sbox-card__prev w-[96rem] h-[54rem] hidden z-10 transition-all fixed  select-none pointer-events-none ${s_color}`}></div>
            </div>
    </>        
}