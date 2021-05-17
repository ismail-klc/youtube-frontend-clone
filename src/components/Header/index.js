import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function Header({
    setShow
}) {
    return (
        <header>
            <nav onClick={setShow}>
                <i class="material-icons">menu</i>
                <Link to="/">
                        <img src="/img/youtube-logo.png" />
                </Link>
            </nav>
            <div className="search">
                <form>
                    <input placeholder="Ara" />
                    <button type="submit"> <i className="fas fa-search"></i> </button>
                </form>
            </div>
            <div className="actions">
                <ul>
                    <li>
                        <a href="#">
                            <i class="material-icons">videocam</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">apps</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons">notifications</i>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <i class="material-icons display-this">account_circle</i>
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    )
}
