"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

const CommentInput = ({ anime_mal_id, user_email, username, anime_title }) => {
    const [comment, setComment] = useState("")
    const [isCreated, setIsCreated] = useState(false)

    const router = useRouter()

    const handleInput = (e) => {
        setComment(e.target.value)
    }

    const handlePosting = async (e) => {
        e.preventDefault()
        if (comment === "" || comment.length < 3) {
            alert("Komentar tidak boleh kosong dan minimal harus ada 3 karakter!")
        } else {

            const data = { anime_mal_id, user_email, comment, username, anime_title }

            const response = await fetch("/api/v1/comment", {
                method: "POST",
                body: JSON.stringify(data)
            })
            const postComment = await response.json()
            if (postComment.status == 201) {
                setIsCreated(postComment.isCreated)
                setComment("")
                router.refresh()
            }
            return
        }

    }
    return (
        <div className="flex flex-col gap-2 mt-4">
            {
                isCreated && <p className="text-color-primary">postingan terkirim...</p>
            }
            <textarea
                onChange={handleInput}
                value={comment}
                placeholder="Comment"
                className="w-full h-32 text-xl p-4 rounded"
                required
            />
            <button
                onClick={handlePosting}
                className="w-52 py-2 px-3 bg-color-accent rounded"
            >
                Posting Komentar
            </button>
        </div>
    )
}

export default CommentInput