import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function VideoHorizontal({
    id, description, title, thumbnail
}) {
    return (
        <div className="thumbnail-h">
        <Link to={`/watch?v=${id}`}>
            <img src={thumbnail} />
            </Link>

        <div className="info">
            <div className="video-content">
                <a href="#">
                    <div className="video-name">{title} </div>
                </a>
                <a href="#">
                    <div className="channel-name">Channel Name</div>
                </a>
                <div className="video-date-view">246B görüntüleme &nbsp; • &nbsp; 1 Ay Önce</div>
            </div>
        </div>
    </div>
    )
}
