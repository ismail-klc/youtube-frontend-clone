import React, { useEffect, useState } from 'react'
import VideoHorizontal from '../../components/VideoHorizontal';
import media from '../../videos'
import './style.css'

export default function Trendings() {
    const [videos, setVideos] = useState(null)
    useEffect(() => {
        setVideos(media.categories[0].videos);
    }, [])

    return (
        <div className="trending">
            <div className="head"> Trend videolar</div>

            <div className="recommend">
                {videos && videos.map(v => (
                    <VideoHorizontal
                        width={250}
                        height={140}
                        key={v.id}
                        id={v.id}
                        thumbnail={v.thumb}
                        description={v.description}
                        title={v.title}
                    />
                ))}
            </div>
        </div>
    )
}
