'use client'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


export default function Text() {
    useGSAP(() => {
        const textSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        gsap.from(textSplit.chars, {
            xPercent: 500,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        })
    }, []);
  return (
    <main className="">
      <section className="relative">
        <div>
          <p
            className="absolute -top-55 left-55 text-[14px] z-25"

          >
            REMA X KXSI
          </p>
        </div>

        <div>
          <p
            className="title absolute -top-45 left-90 z-20 text-[14px] font-bold leading leading-4"

          >
            SCROLL TO <br /> LOOK THROUGH <br /> THE IMAGES
          </p>
        </div>

        <div>
          <p
            className="font-orbitron absolute right-100 -top-80 transform -rotate-90"

          >
            10 -21
          </p>
        </div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
          <p id="kxsi" className="text-[500px] transform -rotate-8 font-bold" >
            KXSI
          </p>
        </div>
      </section>
    </main>
  );
}
