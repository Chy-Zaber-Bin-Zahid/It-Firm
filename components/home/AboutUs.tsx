"use client";

import { companyName } from "@/constant/CompanyName";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

function AboutUs() {
  useGSAP(() => {
    gsap.fromTo(
      "#aboutUs-component",
      { opacity: 0, x: "100%" },
      {
        duration: 1.5,
        opacity: 1,
        x: 0,
        delay: 0,
        scrollTrigger: {
          trigger: "#aboutUs-component",
        },
      }
    );
  });

  return (
    <section
      id="about"
      className="w-full mq-1300:flex justify-center items-center bg-gray-100 scroll-mt-scroll-1300 mq-765:scroll-mt-scroll-765"
    >
      <div id="aboutUs-component" className="w-full px-3 my-16">
        <div className="mx-auto max-w-big-screen w-full flex flex-col lg:flex-row gap-4 justify-between items-center">
          <div className="flex flex-col gap-4 mx-2 justify-center items-center lg:items-start w-full lg:w-[55%]">
            <h1 className="font-bold text-4xl mq-400:text-2xl mq-875:text-3xl">
              About
              <span className="text-primaryText "> {companyName}</span>
            </h1>
            <div className="flex flex-col gap-3 justify-center items-start w-full">
              <p className="text-gray-500 mq-400:text-sm text-2xl mq-875:text-lg">
                <span className="text-black font-bold">{companyName}</span> we
                are committed to empowering businesses through advanced
                technological solutions. Our expertise spans intelligent
                automation, creative visual design, and streamlined digital
                commerce to meet contemporary needs. We excel in developing
                versatile applications and crafting engaging online experiences
                with a focus on user-centric design. From bespoke software to
                impactful digital interfaces, we drive results that align with
                your business goals. Collaborate with us to elevate your
                operations with innovative, tailored tech solutions.
              </p>
            </div>
          </div>
          <div className="w-full h-64  md:h-96  lg:w-[45%]  lg:pl-[81px] relative">
            <Image
              src="/assets/home/aboutus.svg"
              alt="Introduction of IT"
              className="absolute inset-0"
              blurDataURL="data:..."
              placeholder="blur"
              fill
              style={{ objectFit: "contain" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
