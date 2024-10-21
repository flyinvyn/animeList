"use client"

import React, { useState } from 'react'

const CollectionButton = ({ anime_mal_id, user_email, anime_image, anime_title }) => {
    const [isCreated, setIsCreated] = useState(false)

    const handleCollection = async (e) => {
        e.preventDefault()

        const data = { anime_mal_id, user_email, anime_image, anime_title }

        const response = await fetch("/api/v1/collection", {
            method: "POST",
            body: JSON.stringify(data)
        })
        const collection = await response.json()
        if (collection.status == 201) {
            setIsCreated(collection.isCreated)
        }
        return
    }
    return (
        <>
            {
                isCreated
                    ?
                    <p className='text-color-primary'>Berhasil ditambahkan ke koleksi</p>
                    :
                    <button
                        className="px-2 py-1 bg-color-accent"
                        onClick={handleCollection}
                    >
                        Add to collection
                    </button>
            }
        </>
    )
}

export default CollectionButton