import React from 'react'
import YouTube from 'react-youtube'

const Video = ({videoId}) => {
    const opts = {
        height: '390',
        width: '640',
    };
    return (
        <div>
            <YouTube 
                opts={opts}
                videoId={videoId}
            />
        </div>
    )
}

export default Video
