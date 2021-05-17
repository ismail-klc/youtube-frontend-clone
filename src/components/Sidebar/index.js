import React, { useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import '../Layout/style.css'
import './style.css'

export default function Sidebar() {
    const location = useLocation();
    const path = location.pathname;

    useEffect(() => {
    }, [location])

    return (
        <div className="sidebar">
            <ul>
            <Link to="/" >
                <div className={`side-item ${path === '/' ? 'active' : ''}`}>
                    <i className="material-icons">home</i>
                    Ana Sayfa
                </div>
            </Link>

            <Link to="/feed/explore">
            <div className={`side-item ${path === '/feed/explore' ? 'active' : ''}`}>
                    <i className="material-icons">local_fire_department</i>
                    Keşfet
                </div>
            </Link>

            <Link to="/feed/subscriptions">
            <div className={`side-item ${path === '/feed/subscriptions' ? 'active' : ''}`}>
                <i className="material-icons">subscriptions</i>
                Abonelikler
                </div>
            </Link>

            <div className="break"></div>

            <div className="side-item">
                <i className="material-icons">library_add_check</i>
                Kitaplık
            </div>

            <div className="side-item">
                <i className="material-icons">history</i>
                Geçmiş
            </div>

            <div className="side-item">
                <i className="material-icons">watch_later</i>
                Daha Sonra İzle
            </div>

            <div className="break"></div>

            <div className="text">ABONELİKLER</div>

            {[...Array(7).keys()].map((i, a) => (
            <Link to={`/c/${i + 1}`}>
                <div className="side-item" key={i}>
                    <i className="material-icons display-this">account_circle</i>
                    Kanal {i + 1}
                </div>
            </Link>
            ))}

            <div className="break"></div>

            <div className="text">YOUTUBE'DAN DAHA FAZLA İÇERİK</div>

            <div className="side-item">
                <i className="material-icons">
                    smart_display
                </i>
                Youtube Premium
            </div>

            <div className="side-item">
                <i className="material-icons">videogame_asset</i>
                Oyun
            </div>

            <div className="side-item">
                <i className="material-icons">
                    live_tv
                </i>
                Canlı
            </div>

            <div className="side-item">
                <i className="material-icons">
                    emoji_events
                </i>
                Spor
            </div>

            <div className="break"></div>
            
            <div className="side-item">
                <i className="material-icons">
                settings
                </i>
                Ayarlar
            </div>

            <div className="side-item">
                <i className="material-icons">
                flag
                </i>
                İçerik Bildirme Geçmişi
            </div>

            <div className="side-item">
                <i className="material-icons">
                help
                </i>
                Yardım
            </div>

            <div className="side-item">
                <i className="material-icons">
                feedback
                </i>
                Geri Bildirim Gönder
            </div>

            <div className="break"></div>

            </ul>
        </div>
    )
}
