import { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
// import gsap from "gsap";
// import { ScrollTrigger, SplitText } from "gsap/all";
//
// gsap.registerPlugin(ScrollTrigger, SplitText);

const orbitron = localFont({
  src: [
    {
      path: "./fonts/orbitron/orbitron-black.otf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-orbitron",
});

const helvetica = localFont({
  src: [
    {
      // BOLD TEXT
      path: "./fonts/helvetica/HelveticaNeueLTStd-BdEx.otf",
      weight: "700",
      style: "normal",
    },
    {
      // NORMAL TEXT
      path: "./fonts/helvetica/HelveticaNeueLTStd-Roman.otf",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "./fonts/helvetica/HelveticaNeueLTStd-Th.otf",
    //   weight: "700",
    //   style: "normal",
    // },
  ],
  variable: "--font-helvetica",
});

export const metadata: Metadata = {
  title: "First Minimal Web",
  description: "Minimal web design",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${helvetica.className} ${orbitron.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
