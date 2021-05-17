import React, { useEffect, useState } from 'react'
import Video from '../../components/Video'
import './style.css'
import media from '../../videos'

export default function Home() {
    const [videos, setVideos] = useState([])
    useEffect(() => {
        setVideos(media.categories[0].videos);
    }, [])

    return (
        <div className="videos">
            {videos.map(v => (
                <Video
                    isAvatar={true}
                    width={350}
                    height={210}
                    key={v.id}
                    id={v.id}
                    thumbnail={v.thumb}
                    description={v.description}
                    title={v.title}
                />
            ))}
        </div>
    )
}
