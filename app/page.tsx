import { AnimeCardList, LoadMore } from "@/components";
import { fetchAnime } from "./action";

export default async function Home() {
  const data = await fetchAnime(1);
  return (
    <main className="flex flex-col gap-10 px-8 py-16 sm:p-16">
      <h2 className="text-3xl font-bold text-white ">Explore Anime</h2>
      <AnimeCardList data={data} />
      <LoadMore />
    </main>
  );
}
