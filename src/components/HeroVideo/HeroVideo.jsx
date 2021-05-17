import React from 'react';



const HeroVideo = () => {
    return ( <
        div className = "main__hero-video-container" >
        <
        video poster = { Poster }
        src = "../../assets/video/BrainStation Sample Video.mp4"
        type = "video/mp4"
        className = "main__hero-video" / >
        <
        VideoControls / >
        <
        /div>
    )
}

export default HeroVideo;

const VideoControls = () => {
    return ( <
        div className = "main__hero-video-controls" >
        <
        img src = { Play }
        className = "main__hero-video-button main__hero-video-icon main__hero-video-controls-play"
        alt = "Play Icon" / >
        <
        div className = "main__hero-video-button main__hero-video-scrubber-container" >
        <
        img src = { Line }
        className = "main__hero-video-icon main__hero-video-controls-scrubber"
        alt = "Scrubber" / >
        <
        p className = "main__hero-video-time" > 0: 00 / 0: 42 < /p> < /
        div > <
        div className = "main__hero-video-button main__hero-video-fullscreen-volume-container" >
        <
        img src = { Fullscreen }
        className = "main__hero-video-icon main__hero-video-controls-fullscreen"
        alt = "Fullscreen Icon" / >
        <
        img src = { Volume }
        className = "main__hero-video-icon main__hero-video-controls-volume"
        alt = "Volume Icon" / >
        <
        /div> < /
        div >
    )
}