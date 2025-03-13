import React, { useState } from 'react';
import Hand from './icons/Hand';
import shorten from '../utility/shortenerApi';
import { Loading } from './Loading';
import Copy from './Copy';

const Main: React.FC = () => {
    const [longUrl, setLongUrl] = useState('');
    const [shortUrl, setShortUrl] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLongUrl(e.target.value);
    };

    const handleClick = () => {
        setIsSubmitting(true);
        shorten(longUrl)
            .then((data) => setShortUrl(data.short_url))
            .finally(() => setIsSubmitting(false));
    };

    if (isSubmitting) return <Loading />;

    return (
        <main>
            <div className='content-container'>
                <div id='logo'>
                    <h1>
                        GitFlick<span>s</span>
                    </h1>
                    <Hand classes='hand' />
                    {!shortUrl && <p>A simple, free-to-use URL shortener.</p>}
                </div>
                {shortUrl ? (
                    <div>
                        <div className='output-container'>
                            <p>
                                <span>All done!</span>
                            </p>
                            <p>Here is your shortened URL!</p>
                            <div className='shortened-url'>
                                <p>{shortUrl}</p>
                                <Copy shortUrl={shortUrl}/>
                            </div>
                        </div>
                        <button
                            onClick={() => setShortUrl('')}
                            type='button'
                            className='CTA-button'
                        >
                            <span>Try It Again</span>
                        </button>
                    </div>
                ) : (
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
                        <button
                            onClick={handleClick}
                            type='button'
                            className='CTA-button'
                        >
                            <span>Shorten</span>
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
};

export default Main;
