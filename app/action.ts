"use server";

import { AnimeProp } from "@/components/AnimeCard";
import { BASE_URL, PAGE_LIMIT } from "@/utils/constants";

const order = "popularity";

export const fetchAnime = async (page: number) => {
  try {
    const response = await fetch(
      `${BASE_URL}/api/animes?page=${page}&limit=${PAGE_LIMIT}&order=${order}`
    );

    const data = await response.json();

    return data as AnimeProp[];
  } catch (error) {
    console.log("error", error);
    return [];
  }
};
