import ButtonLink from "@/components/button/ButtonLink";
import React from "react";

export default function Home() {
   return(<>
        <div className="home py-[5rem]">
            <div className="layout">
                <div className="home-cont">
                    <section className="home-cont__sec mb-[4rem]">
                        <div className="home-cont__wrapper">
                            <h2 className="head2 mb-[2rem]">Hi, this is a homepage</h2>
                            <p className="home-cont__p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur error neque, saepe tempora quia dolore obcaecati quo facere itaque corporis animi iure quidem dolorum dolorem voluptates magnam doloremque incidunt accusamus explicabo aperiam est. Sequi dolores id quae dolorum voluptate, consequuntur iure quas dolor ullam fugiat voluptatum quis labore ratione, necessitatibus est rem! Consequatur molestiae dolores optio quis, explicabo sequi facilis laudantium doloribus eum. Facilis perferendis perspiciatis laboriosam quam magni totam optio quisquam ut, culpa maiores aspernatur voluptatibus, earum quos soluta omnis animi error, temporibus accusantium illo nisi et assumenda vitae corrupti vel. Laboriosam ullam pariatur vel sequi facilis voluptas voluptate?</p>
                        </div>
                    </section>
                    <div className="flex justify-center gap-[2rem] mx-auto">
                        <ButtonLink className="" href={'subpage'} text={'Go to Subpage'}></ButtonLink>
                        <ButtonLink className="" href={'cms/blog'} text={'CMS Page'}></ButtonLink>
                    </div>
                    

                </div>
            </div>
        </div>
      </>
   ); 
}