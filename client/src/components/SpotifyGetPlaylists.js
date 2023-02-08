import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SpotifyGetPlaylists = () => {
    const [token, setToken] = useState('');
    const [data, setData] = useState({});

    useEffect(() => {
        if (localStorage.getItem("accessToken")) {
            setToken(localStorage.getItem("accessToken"));
        }
    }, []);

    return <button>Get Playlist</button>;
    
}

export default SpotifyGetPlaylists;