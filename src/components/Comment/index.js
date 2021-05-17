import React from 'react'
import './style.css'
export default function Comment({
    name, comment
}) {
    return (
        <div className="comment">
            <img className="avatar" src="/img/avatar.png" />
            <div>
                <div className="user">
                    <div className="name">{name}</div>
                    <div className="date"> 2 years ago</div>
                </div>
                <div className="com-content">
                    {comment}
                </div>
                <div className="com-actions">
                    <ul>
                        <a href="#">
                            <li>
                                <i class="material-icons">thumb_up</i>
                                    15 B
                                </li>
                        </a>
                        <a href="#">
                            <li>
                                <i class="material-icons">thumb_down</i>
                                    100
                                </li>
                        </a>
                        <a href="#">
                            <li>
                                    REPLY
                                </li>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
    )
}
