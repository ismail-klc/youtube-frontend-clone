import React, { useEffect, useState } from 'react'
import Video from '../../components/Video'
import media from '../../videos'
import './style.css'

export default function Subscriptions() {
    const [videos, setVideos] = useState(null)

    useEffect(() => {
        setVideos(media.categories[0].videos);
    }, [])

    return (
        <div className="subs">
            {
                videos &&
                videos.map(v => (
                    <Video
                    width={210}
                    height={118}
                    key={v.id}
                    id={v.id}
                    thumbnail={v.thumb}
                    description={v.description}
                    title={v.title}
                />
                ))
            }
        </div>
    )
}
