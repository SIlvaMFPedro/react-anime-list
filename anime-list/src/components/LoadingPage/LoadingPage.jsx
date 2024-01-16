import React from "react";
import './LoadingPage.css';

const LoadingPage = () => {
    <div className="loading--container">
        <h2>Fetching Anime...</h2>
        <iframe title="Saitama GIF" 
                src="https://giphy.com/embed/13cswZEvNJM7ZK" 
                style={{width: 480, height: 270, border: 0}}
                className="giphy-embed" 
                allowFullScreen/>
    </div>

};

export default LoadingPage;