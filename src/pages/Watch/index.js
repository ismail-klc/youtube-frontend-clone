import React, { useEffect, useState } from 'react'
import {
    useLocation
} from "react-router-dom";
import VideoInfo from '../../components/VideoInfo';
import './style.css'
import media from '../../videos'
import VideoHorizontal from '../../components/VideoHorizontal';
import Comment from '../../components/Comment';

export default function Watch() {
    let query = useQuery();
    const id = query.get('v')
    const [video, setVideo] = useState(null)
    const [recommends, setRecommends] = useState(null)
    const [comments, setComments] = useState(null)

    function useQuery() {
        return new URLSearchParams(useLocation().search);
    }

    useEffect(() => {
        window.scrollTo(0, 0)
        
        setVideo(media.categories[0].videos.find(a =>
            a.id == id));
        setRecommends(media.categories[0].videos.filter(a =>
            a.id != id));
        fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
            .then(response => response.json())
            .then(json => setComments(json))
    }, [id])

    if (!video) {
        return null
    }

    return (
        <div className="main-content">
            <div className="video">
                <video
                    controls
                    src={video.sources}>
                </video>
                <VideoInfo
                    title={video.title}
                />
                <hr />
                <div className="video-detail">
                    <img className="avatar" src="/img/avatar.png" />
                    <div className="descriptions">
                        <div className="channel-name">Channel Name</div>
                        <div className="sub-count">400 B Abone</div>
                        <div className="desc">{video.description}</div>
                    </div>
                    <button className="sub-btn">ABONE OL</button>
                </div>
                <hr />
                <div className="comments">
                    <div className="comment-info">
                        <div className="count">
                            {comments && comments.length}
                            &nbsp; comments
                        </div>
                        <div className="sort">
                            <i className="material-icons">
                                sort
                            </i> &nbsp; SORT BY
                        </div>
                    </div>
                    <div className="comment-form">
                        <img className="avatar" src="/img/avatar.png" />
                        <input placeholder="Add a public comment..."/>
                    </div>
                    <div className="comment-list">
                        {
                            comments && 
                            comments.map(c => (
                                <Comment 
                                    name={c.email}
                                    comment={c.body}
                                    key={c.id}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            <div className="recommend">
                {recommends && recommends.map(v => (
                    <VideoHorizontal
                        width={168}
                        height={94}
                        key={v.id}
                        id={v.id}
                        thumbnail={v.thumb}
                        title={v.title}
                    />
                ))}
            </div>
        </div>
    )
}
