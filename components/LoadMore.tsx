"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import { AnimeProp } from "./AnimeCard";
import { fetchAnime } from "@/app/action";
import AnimeCardList from "./AnimeCardList";

const LoadMore = () => {
  const { ref, inView } = useInView();
  const [data, setData] = useState<AnimeProp[]>([]);
  const [pageNum, setPageNum] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const updatePageNum = pageNum + 1;
      const latestAnimes = await fetchAnime(updatePageNum);
      setData([...data, ...latestAnimes]);
      setPageNum(updatePageNum);
    };
    if (inView) {
      fetchData();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <AnimeCardList data={data} />
      <section className="flex items-center justify-center w-full">
        <div ref={ref}>
          <Image
            src="./spinner.svg"
            alt="spinner"
            width={56}
            height={56}
            className="object-contain"
          />
        </div>
      </section>
    </>
  );
};

export default LoadMore;
