"use client"

import { MagnifyingGlass } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"
import { useRef } from "react"

const InputSearch = () => {
    const router = useRouter()
    const searchRef = useRef()

    const handleSearch = (event) =>{
        const keyword = searchRef.current.value

        if(!keyword || keyword.trim() == "") return

        if(event.key === "Enter" || event.type === "click"){
            event.preventDefault()
            router.push(`/search/${keyword}`)
        }

    }

    return (
        <div className="relative">
            <input
                type="text"
                placeholder="Search Anime..."
                className="p-2 rounded w-full"
                ref={searchRef}
                onKeyDown={handleSearch}
                />
            <button className="absolute top-2 end-2" onClick={handleSearch}>
                <MagnifyingGlass size={25} />
            </button>
        </div>
    )
}

export default InputSearch