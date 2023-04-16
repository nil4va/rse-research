import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="Home">
            <h1>Home Page</h1>
            <br />
            <ul>
                <li>
                    <Link to="/blocked-ui">Blocked UI</Link>
                </li>
                <li>
                    <Link to="/fixed-ui">Fixed UI</Link>
                </li>
                <li>
                    <Link to="/without-memo">Without memoziation</Link>
                </li>
                <li>
                    <Link to="/with-memo">With memoziation</Link>
                </li>
                <li>
                    <Link to="/debounce-and-throttle">Debounce and Throttle</Link>
                </li>
            </ul>
        </div>
    );
}

export default Home;
