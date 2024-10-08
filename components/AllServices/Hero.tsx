"use client";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import Image from "next/image";
import React from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const AllServicesHero = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    gsap.fromTo(
      "#heading",
      {
        x: 500,
        duration: 1.5,
        opacity: 0,
        scrollTrigger: {
          trigger: "#heading",
        },
      },
      {
        x: 0,
        opacity: 1,
      }
    );
    gsap.fromTo(
      "#para",
      {
        y: 500,
        duration: 1.6,
        opacity: 0,
        delay: 1,
        scrollTrigger: {
          trigger: "#para",
        },
      },
      {
        y: 0,
        opacity: 1,
      }
    );
  });
  return (
    <>
      <div className="bg-white lg:pt-4">
        <div className="relative w-full h-[60vh] flex items-center justify-center ">
          <Image
            src="/assets/AllServices/service.svg"
            alt="Services Hero"
            style={{ objectFit: "contain" }}
            fill
            id="image"
            className="bg-white"
          />
        </div>
      </div>
      <div className="bg-white mq-400:py-0 lg:py-16 ">
        <div className=" py-8 mq-400:py-4  text-center bg-gray-100 px-8">
          <h1
            id="heading"
            className="text-center font-bold text-4xl mq-400:text-2xl mq-875:text-3xl"
          >
            Our Service
          </h1>
          <p id="para" className="mq-400:text-sm text-xl mq-875:text-lg mt-2">
            Empowering businesses with cutting-edge IT solutions
          </p>
        </div>
      </div>
    </>
  );
};

export default AllServicesHero;
