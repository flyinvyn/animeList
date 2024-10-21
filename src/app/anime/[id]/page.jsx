import { getAnimeResponse } from "@/libs/api-libs"
import VideoPlayer from "@/components/Utilities/VideoPlayer"
import Image from "next/image"
import CollectionButton from "@/components/AnimeList/CollectionButton"
import { userAuthSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import CommentInput from "@/components/AnimeList/CommentInput"
import CommentBox from "@/components/AnimeList/CommentBox"

const Page = async ({ params: { id } }) => {
    const anime = await getAnimeResponse(`anime/${id}`)
    const user = await userAuthSession()
    const collection = await prisma.collection.findFirst({
        where: { user_email: user?.email, anime_mal_id: id }
    })
    return (
        <>
            <div className="pt-3 px-4">
                <h1 className="text-color-primary text-2xl">{anime.data.title} - {anime.data.year}</h1>
                {
                    !collection && user && <CollectionButton
                        anime_mal_id={id}
                        user_email={user?.email}
                        anime_image={anime.data.images.webp.image_url}
                        anime_title={anime.data.title} />
                }
            </div>
            <div className="pt-4 px-4 flex gap-2 text-color-primary overflow-x-auto">
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Peringkat</h3>
                    <p>{anime.data.rank}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Score</h3>
                    <p>{anime.data.score}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Rating</h3>
                    <p>{anime.data.rating}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Durasi</h3>
                    <p>{anime.data.duration}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Status</h3>
                    <p>{anime.data.status}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Member</h3>
                    <p>{anime.data.members}</p>
                </div>
                <div className="w-36 flex flex-col justify-center items-center rounded border
                border-color-primary p-2 ">
                    <h3>Episode</h3>
                    <p>{anime.data.episodes}</p>
                </div>
            </div>
            <div className="pt-4 flex sm:flex-nowrap flex-wrap gap-2 text-color-primary">
                <Image
                    src={anime.data.images.webp.image_url}
                    alt={anime.data.images.jpg.image_url}
                    width={250}
                    height={250}
                    className="w-full rounded object-cover"
                />
                <p className="text-justify text-xl">{anime.data.synopsis}</p>
            </div>
            <div>
                <div className="p-4">
                    <h2 className="text-2xl mb-4 text-color-primary">Komentar</h2>
                    <CommentBox anime_mal_id={id} />
                    {user && <CommentInput anime_mal_id={id} user_email={user?.email} username={user?.name}
                        anime_title={anime.data.title} />}
                </div>
            </div>
            <div>
                <VideoPlayer youtubeId={anime.data.trailer.youtube_id} />
            </div>
        </>
    )
}

export default Page