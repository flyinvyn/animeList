import { getAnimeResponse } from "@/libs/api-libs";
import AnimeList from "@/components/AnimeList";
import Header from "@/components/AnimeList/Header";

const Page = async ({params}) => {
  const {keyword} = params

  const decodeKey = decodeURI(keyword)

  // const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/anime?q=${decodeKey}`)
  // const searchAnime = await response.json()

  const searchAnime = await getAnimeResponse("anime", `q=${decodeKey}`)

  return (
    <>
      <section>
        <Header title={`pencarian untuk ${decodeKey}`} />
        <AnimeList api={searchAnime} />
      </section>
    </>
  )
}

export default Page