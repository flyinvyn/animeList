"use client"
import { ArrowSquareLeft } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const Header = ({title}) => {
    const router = useRouter()

    const handleBack = (e) => {
        e.preventDefault()
        router.back()
    }
    return(
        <div className="flex items-center justify-between mb-4">
                <button
                className="text-color-primary"
                onClick={handleBack}
                >
                    <ArrowSquareLeft size={32} />
                </button>
                <h3 className="text-2xl text-color-primary">{title}</h3>
            </div>
    )
}

export default Header