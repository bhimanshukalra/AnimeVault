import { BASE_URL, PAGE_LIMIT } from "@/utils/constants";
import Image from "next/image";
import React from "react";
import { MotionDiv } from "./MotionDiv";
import { Variants } from "framer-motion";

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

interface AnimeCardProps {
  anime: AnimeProp;
  index: number;
}

const variants: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const AnimeCard = ({
  anime: { image, name, kind, episodes, episodes_aired, score },
  index,
}: AnimeCardProps) => {
  return (
    <MotionDiv
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{
        delay: (index % PAGE_LIMIT) * 0.25,
        ease: "easeInOut",
        duration: 0.5,
      }}
      viewport={{ amount: 0 }}
      className="relative w-full max-w-sm"
    >
      <div className="relative w-full h-[37vh]">
        <Image
          src={`${BASE_URL}/${image.original}`}
          alt={name}
          fill
          className="rounded-xl"
        />
      </div>
      <div className="flex flex-col gap-3 py-4">
        <div className="flex items-center justify-between gap-1">
          <h2 className="w-full text-xl font-bold text-white line-clamp-1">
            {name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-sm font-bold text-white capitalize">{kind}</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <div className="flex flex-row items-center gap-2">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base font-bold text-white">
              {episodes || episodes_aired}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </div>
    </MotionDiv>
  );
};

export default AnimeCard;
