"use client"

import { useState } from "react"
import YouTube from "react-youtube"

const VideoPlayer = ({ youtubeId }) => {
    const [isOpen, setIsOpen] = useState(true)

    const handleVideoPlayer = () => {
        setIsOpen((prevState) => !prevState)
    }

    const option = {
        width: "300",
        height: "300"
    }

    const PlayerOpen = () => {
        return (
            <div className="fixed bottom-2 right-2">
                <button
                    onClick={handleVideoPlayer}
                    className="text-color-primary float-right bg-color-secondary px-3 mb-1 rounded">
                    X
                </button>
                <YouTube videoId={youtubeId}
                    onReady={(e) => e.target.pauseVideo()}
                    opts={option}
                    onError={() => alert("Video is broken, please try another video.")}
                />
            </div>
        )
    }

    const PlayerClose = () => {
        return (
            <button
                onClick={handleVideoPlayer}
                className="fixed bottom-5 right-5 w-32
            bg-color-primary text-color-dark rounded text-lg
            hover:bg-color-accent transition-all shadow-xl">
                Tonton Trailer
            </button>
        )
    }

    return isOpen ? <PlayerOpen /> : <PlayerClose />
}

export default VideoPlayer