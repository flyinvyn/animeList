import Header from "@/components/Dashboard/Header"
import { userAuthSession } from "@/libs/auth-libs"
import prisma from "@/libs/prisma"
import Image from "next/image"
import Link from "next/link"

const Page = async () => {
    const user = await userAuthSession()
    const collection = await prisma.collection.findMany({
        where: { user_email: user.email }
    })
    return (
        <section className="mt-4 px-4 w-full">
            <Header title={"My Collection"} />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {collection.map((item, index) => {
                    return (
                        <Link key={index} href={`/anime/${item.anime_mal_id}`} className="relative">
                            <Image
                            src={item.anime_image}
                            alt="..."
                            width={350}
                            height={350}
                            className="w-full"
                            />
                            <div className="w-full bg-color-accent h-16 absolute bottom-0
                    flex items-center justify-center">
                                <h5 className="text-xl text-center">{item.anime_title}</h5>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Page