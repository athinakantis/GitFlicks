import { Tooltip } from '@mui/material';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import CopyIcon from './icons/Copy';
import { useState } from 'react';

const Copy = ({ shortUrl }: { shortUrl: string }) => {
    const [open, setOpen] = useState(false);

    const handleTooltip = () => {
        setOpen(prev => !prev)
        setTimeout(() => setOpen(false), 2000)
    }

    return (
        <CopyToClipboard text={shortUrl}>
            <Tooltip title='Copied!' open={open} placement='top'>
                <button onClick={handleTooltip} aria-label='Copy link'>
                    <CopyIcon />
                </button>
            </Tooltip>
        </CopyToClipboard>
    );
};

export default Copy;
