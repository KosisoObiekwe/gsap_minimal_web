'use client'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/all';

export default function Image() {
    gsap.registerPlugin(ScrollTrigger);

  return (
    <section className="relative mt-15">
      <div className="image relative z-18 w-110 h-90 overflow-hidden m-auto transform -rotate-5 ">
        <img src="/rema-1.jpg" alt="" />
      </div>
    </section>
  );
}
