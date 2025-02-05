import {userAuthSession} from "@/libs/auth-libs"
import Image from "next/image"
import Link from "next/link"

const Page = async() =>{
    const user = await userAuthSession()
    return(
        <div className="text-color-primary mt-8 flex flex-col justify-center items-center">
            <h1 className="text-2xl font-bold">Welcome, {user.name}</h1>
            <Image src={user.image} alt="..." width={250} height={250} />
            <div className="py-8 flex flex-wrap gap-4">
                <Link
                href="/users/dashboard/collection"
                className="bg-color-accent text-color-dark font-bold
                px-4 py-3 text-xl">
                    My Collection
                </Link>
                <Link
                href="/users/dashboard/comment"
                className="bg-color-accent text-color-dark font-bold
                px-4 py-3 text-xl">
                    My Comment
                </Link>
            </div>
        </div>
    )
}

export default Page