"use client"
import NavBar from "@/components/navbar/page";
import Image from "@/components/image/page";
import Text from "@/components/Text/page";


export default function Home() {

  return (
    <main className="">
      <section className="">
          <NavBar />
          <Image />
          <Text />
          <div className="h-[5000px]"></div>
      </section>
    </main>
  );
}
