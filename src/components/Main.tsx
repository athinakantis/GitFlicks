import React, { useEffect, useState } from 'react';
import Hand from './icons/Hand';
import shorten from '../utility/shortenerApi';


const Main: React.FC = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLongUrl(e.target.value);
      };

    const handleClick = () =>{
      setIsSubmitting(true)
    }

    useEffect(() =>{
      if(isSubmitting) shorten(longUrl).then((data) => setShortUrl(data.short_url))
    },[isSubmitting])
    

    return (
        <main>
            <div className='content-container'>
                <div id='logo'>
                    <h1>GitFlick<span>s</span></h1>
                    <Hand />
                    <p>A simple, free-to-use URL shortener.</p>
                </div>
                {
                    shortUrl ? 
                    <div>
                        <div className='output-container'>
                            <p>All done!</p>
                            <p>Here is your shortened URL!</p>
                            <div className='shortened-url'>
                                <p>{shortUrl}</p>
                                <img src="" alt="copy-to-clipboard" />
                            </div>

                        </div>
                        <button onClick={handleClick} type='button' className='CTA-button'>
                            <span>Try It Again!</span>
                        </button>
                    </div> : 
                    <div>
                    <div className='input-container'>
                        <label htmlFor='originalLink'>
                            Paste a URL to shorten
                        </label>
                        <input
                            className='input-link'
                            type='text'
                            value={longUrl}
                            id='originalLink'
                            onChange={handleInputChange}
                        />
                    </div>
                    <button onClick={handleClick} type='button' className='CTA-button'>
                        <span>Shorten</span>
                    </button>
                </div>
                }
            </div>
        </main>
    );
};

export default Main;
