'use client'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';


export default function Image() {
gsap.registerPlugin(ScrollTrigger);

    useGSAP(() => {
        let tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".zoom-section",
                start: "top top",
                end: "+=200%",   // controls how long the pin lasts
                scrub: true,
                pin: true,       // keeps the section fixed
                markers: true,
            },
        });

        tl.to(".image1", {
            scale: 2,
            opacity: 0,
            ease: "power2.out",
        }).fromTo(".image2",
            { scale: 1, opacity: 0 },
            { scale: 1.2, opacity: 1, ease: "power2.out" },
            "<"
        );
    }, []);
  return (
    <section className="zoom-section relative mt-15">
      <div className="image1 absolute top-0 left-113 z-18 w-110 h-90 overflow-hidden m-auto transform -rotate-5 ">
        <img src="/rema-1.jpg" alt="fuck you" />
      </div>
        <div className="image2 relative z-17 w-110 h-90 overflow-hidden m-auto transform -rotate-8 ">
            <img src="/rema-2.jpg" alt="fuck you" />
        </div>

    </section>
  );
}
