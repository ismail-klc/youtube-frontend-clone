import React from 'react'

export default function VideoInfo({
    title
}) {
    return (
        <div>
            <div className="video-info">
                <div className="video-name-date">
                    <div className="video-tag">#tags</div>
                    <div className="video-name">
                        {title}
                    </div>
                    <div className="video-date">
                        246.413 görüntüleme &nbsp; • &nbsp; 17 Ağu 2020
                </div>
                </div>
                <div className="video-actions">
                    <ul>
                        <a href="#">
                            <li>
                                <i className="material-icons">thumb_up</i>
                                    15 B
                                </li>
                        </a>
                        <a href="#">
                            <li>
                                <i className="material-icons">thumb_down</i>
                                    100
                                </li>
                        </a>

                        <a href="#">
                            <li>
                                <i className="material-icons">share</i>
                                    PAYLAŞ
                                </li>
                        </a>

                        <a href="#">
                            <li>
                                <i className="material-icons">library_add</i>
                                    KAYDET
                                </li>
                        </a>

                        <a href="#">
                            <li>
                                <i className="material-icons">more_horiz</i>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
