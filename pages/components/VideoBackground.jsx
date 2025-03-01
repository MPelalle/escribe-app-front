import React from 'react'
import '../../styles/video-background.css'

const VideoBackground = () => {
    return (
    <video autoPlay loop muted playsInline className="video-background">
    <source src="../styles/assets/video-background.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
    </video>
    )
}

export default VideoBackground