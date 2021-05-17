import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Video({
    id, description, title, thumbnail, width, height, isAvatar
}) {
    return (
        <div className="thumbnail">
            <Link to={`/watch?v=${id}`}>
                <img src={thumbnail} 
                    width={width}
                    height={height}
                />
                </Link>

            <div className="info">
                { isAvatar === true && <img src="/img/avatar.png" />}
                <div className="video-content">
                    <a href="#">
                        <div className="video-name">{title} </div>
                    </a>
                    <a href="#">
                        <div className="channel-name">Channel Name</div>
                    </a>
                    <div className="video-date-view">246 B görüntüleme &nbsp; • &nbsp; 1 Ay Önce</div>
                </div>
            </div>
        </div>
    )
}
