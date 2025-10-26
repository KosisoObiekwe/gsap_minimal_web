'use client'
import {navLinks, navLinks2} from "../../../constants";
import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
    useGSAP(() => {
const navTween = gsap.timeline({
    scrollTrigger: {
        trigger: 'nav',
        start: 'bottom top'
    }
});

navTween.fromTo('nav', {backgroundColor: 'transparent'}, {
    backgroundColor: 'transparent',
    backgroundFilter: 'blur(10px)',
    duration: 1,
    ease: 'power1.inOut'
});
    })
    return (
        <nav className="py-3 px-15">
           <div className="flex items-center justify-between w-full">
               <div className="flex items-center space-x-30">
                   <a href="#home" className="flex ">
                       <p className="font-extrabold text-[23px]">KXSI</p>
                       <p className="font-light absolute top-5 left-32">studios</p>
                   </a>


                   <ul className="flex space-x-9">
                       {navLinks.map((link, index) => (
                           <li key={link.id} className={`text-[18px]`}>
                               <a href={`/${link.id}`}>{link.title}</a>
                           </li>
                       ))}
                   </ul>
               </div>

                   <ul className="flex space-x-9">
                       {navLinks2.map((link, index) => (
                           <li key={link.id} className={`text-[18px]`}>
                               <a href={`/${link.id}`}>{link.title}</a>
                           </li>
                       ))}
                   </ul>

           </div>
        </nav>
    );
}