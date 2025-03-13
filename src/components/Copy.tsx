import { Tooltip } from '@mui/material';
import copy from 'react-copy-to-clipboard';
import CopyIcon from './icons/Copy';
import { useState } from 'react';

const Copy = ({ shortUrl }: { shortUrl: string }) => {
    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen((prev) => !prev);
        copy(shortUrl);
        setTimeout(() => setOpen(false), 2000);
    };

    return (
        <Tooltip title='Copied!' open={open} placement='top'>
            <button onClick={handleClick} aria-label='Copy link'>
                <CopyIcon />
            </button>
        </Tooltip>
    );
};

export default Copy;
