import prisma from "@/libs/prisma"

export async function POST(requset) {
    const { anime_mal_id, user_email, anime_image, anime_title } = await requset.json()
    const data = { anime_mal_id, user_email, anime_image, anime_title }

    const createCollection = await prisma.collection.create({ data })
    if (!createCollection) return Response.json({ status: 500, isCreated: false })
    else return Response.json({ status: 201, isCreated: true })
}