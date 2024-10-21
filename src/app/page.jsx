import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";
import { getAnimeResponse, getNestedAnimeRes, reproduce } from "@/libs/api-libs";

const Page = async () => {

  const topAnime = await getAnimeResponse("top/anime", "limit=8")
  let recommendedAnime = await getNestedAnimeRes("recommendations/anime", "entry")
  recommendedAnime = reproduce(recommendedAnime, 8)

  return (
    <>
    {/* Anime terpopuler */}
      <section>
        <Header title={"Paling Populer"} linkHref={"/seeAll"} linkTitle={"Lihat Semua"} />
        <AnimeList api={topAnime} />
      </section>
      <section>
        <Header title={"Rekomendasi"} />
        <AnimeList api={recommendedAnime} />
      </section>
    </>
  )
}

export default Page