import React from "react";
import AnimeCard, { AnimeProp } from "./AnimeCard";

interface AnimeCardListProps {
  data: AnimeProp[];
}

const AnimeCardList = ({ data }: AnimeCardListProps) => {
  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
      {data.map((item, index) => (
        <AnimeCard key={item.id} anime={item} index={index} />
      ))}
    </section>
  );
};

export default AnimeCardList;
