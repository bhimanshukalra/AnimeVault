import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <header className="flex justify-center w-full gap-0 px-8 py-16 bg-center bg-no-repeat bg-cover bg-hero sm:p-16 lg:items-center max-lg:flex-col sm:gap-16">
      <div className="flex flex-col flex-1 gap-10">
        <Image
          src="./logo.svg"
          alt="logo"
          width={101}
          height={96}
          className="object-contain"
        />
        <h1 className="sm:text-6xl text-5xl text-white lg:max-w-lg font-bold leading-[120%]">
          Explore The <span className="red-gradient">Diverse Realms</span> of
          Anime Magic
        </h1>
      </div>
      <div className="lg:flex-1 relative w-full h-[50vh] justify-center">
        <Image src="/anime.png" alt="anime" fill className="object-contain" />
      </div>
    </header>
  );
};

export default Hero;
