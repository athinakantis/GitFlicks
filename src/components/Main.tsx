import React, { useState } from 'react';
import Hand from './icons/Hand';

const Main: React.FC = () => {
    const [originalLink, setOriginalLink] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOriginalLink(e.target.value);
    };

    return (
        <main>
            <div className='content-container'>
                <div id='logo'>
                    <h1>GitFlick<span>s</span></h1>
                    <Hand />
                    <p>A simple, free-to-use URL shortener.</p>
                </div>
                <form>
                    <div className='input-container'>
                        <label htmlFor='originalLink'>
                            Paste a URL to shorten
                        </label>
                        <input
                            className='input-link'
                            type='text'
                            value={originalLink}
                            id='originalLink'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button type='submit' className='CTA-button'>
                        <span>Shorten</span>
                    </button>
                </form>
            </div>
        </main>
    );
};

export default Main;
