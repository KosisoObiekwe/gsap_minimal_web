'use client'
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/all";


export default function Text() {
    useGSAP(() => {
        const textSplit = new SplitText('.title', { type: 'chars, words'});
        const paragraphSplit = new SplitText('.subtitle', { type: 'lines'});

        gsap.from(textSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06
        });

        gsap.from(paragraphSplit.lines, {
            opacity: 0,
            yPercent: 100,
            duration: 1.8,
            ease: 'expo.out',
            stagger: 0.06,
            delay: 1,
        });
    }, []);
  return (
    <main className="">
      <section className="relative">
        <div>
          <p
            className="title absolute -top-55 left-55 text-[14px] z-25"

          >
            REMA X KXSI
          </p>
        </div>

        <div>
          <p
            className="subtitle absolute -top-45 left-90 z-20 text-[14px] font-bold leading leading-4"

          >
            SCROLL TO <br /> LOOK THROUGH <br /> THE IMAGES
          </p>
        </div>

        <div>
          <p
            className="subtitle font-orbitron absolute right-100 -top-80 transform -rotate-90"

          >
            10 -21
          </p>
        </div>

        <div className="absolute top-20 left-1/2 -translate-x-1/2 -translate-y-1/2 z-5">
          <p id="kxsi" className="subtitle text-[500px] transform -rotate-8 font-bold" >
            KXSI
          </p>
        </div>
      </section>
    </main>
  );
}
