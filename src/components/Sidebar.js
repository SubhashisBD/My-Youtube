import React from 'react'
import { useSelector } from "react-redux"
import { Link } from "react-router-dom";

const Sidebar = () => {
    const isMenuOpen = useSelector((store) => store.app.isMenuOpen);

    if (!isMenuOpen) return null;

    return (
        <div className="col-span-2 shadow-lg p-5">
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>Sports</li>
                <li>Video</li>
                <li>Live</li>
            </ul>
            <h2 className="font-bold">Subscriptions</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Live</li>
                <li>Cricket</li>
            </ul>
            <h2 className="font-bold">Watch Later</h2>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar
