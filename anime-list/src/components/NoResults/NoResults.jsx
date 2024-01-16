import React from 'react';
import './NoResults.css';

const NoResults = () => {
    <div className="loading--container">
        <h2>{'Sorry. We couldn\'t find a matching anime for this category'}</h2>
        <iframe title="Sorry GIF" 
                src="https://giphy.com/embed/13LunYkkBppSBa"
                style={{width: 480, height: 240, border: 0}}
                className='giphy--embed'
                allowFullScreen/>
    </div>
};

export default NoResults;