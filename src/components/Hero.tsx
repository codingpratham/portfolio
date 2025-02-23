"use client"

import { Button } from "./ui/button";


const Hero = () => {
    return (
      <section className="space-y-4 mb-24 min-h-screen items-center flex flex-col justify-center">
        <p className="text-sm">Hi, my name is</p>
        <h1 className="text-4xl md:text-5xl font-medium text-[#4A9F5A]">pratham koranne.</h1>
        <h2 className="text-2xl md:text-3xl">I build things for the web.</h2>
        <p className="max-w-2xl text-gray-400">
          As a full-stack developer from India, I specialize in turning ideas into fully functional products. Whether
          you need help building a new product from the ground up or improving an existing one, I can help bring your
          vision to life with clean, efficient code.
        </p>
        <Button className="bg-[#4A9F5A] hover:bg-[#4A9F5A]/90 text-black font-medium px-8 rounded-full">Resume</Button>
      </section>
      
    );
  };
  
  export default Hero;
  
