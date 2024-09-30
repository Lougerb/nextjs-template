'use client';

import React from "react";
import { useEffect, useRef } from "react";
import Card from "./Card";

export default function Sandbox() {
    const prevCard:any = useRef([]);

    const hoverCard = () => {
        document.addEventListener('mousemove', function(e){
            console.log(this);
        });
    }
    // useEffect(()=>{
    //     document.addEventListener('mousemove', function(e){
    //         const mPosY = e.pageY;
    //         const mPosX = e.pageX;

    //         const winWidth = window.innerWidth;
    //         const winHeight = window.innerHeight;

    //         const cardWidth = prevCard.current.offsetWidth;
    //         const cardHeight = prevCard.current.offsetHeight;

    //         const cardPosY = prevCard.current.offsetTop + cardHeight < winHeight ? mPosY : mPosY - cardHeight;
    //         const cardPosX = prevCard.current.offsetLeft + cardWidth < winWidth ? mPosX : mPosX - cardWidth;
            
    //         prevCard.current.setAttribute('style', `top: ${cardPosY}px; left: ${cardPosX}px; opacity: 1;`);
    //     });
    // });

    const cards:any = [];
    const cards2:any = [];



    for (let i = 1; i < 10; i++) {
        cards.push(            
            <React.Fragment>
                <Card f_color={`bg-red-${i}00`} s_color={`bg-green-${i}00`}/>
            </React.Fragment>        
        ) 
    }


    return (
        <>  
            <div className="py-[20rem] bg-[#00212A]">
                <div className="grid grid-cols-4 auto-cols-fr gap-[2rem]">
                    {cards.map((val:any, i:any)=>{
                        return <React.Fragment key={i}>
                            {val}
                        </React.Fragment>
                    })}
                </div>
            </div>
        </>
    );
}