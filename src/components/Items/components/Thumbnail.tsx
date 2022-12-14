import { styled } from '@mui/material';
import React from 'react';

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});
const Thumbnail: React.FC<{thumbnail: string | null | undefined}> = (props) => {

    const renderThumbnail = () => {
        if (props.thumbnail === undefined || props.thumbnail === '') {
            return (
                <>
                    <Img 
                    alt="complex" 
                    src="https://i.ytimg.com/vi/BH4IMzxBg14/maxresdefault.jpg" 
                    //src={video.embeddedRecord.thumbnail} 
                    />
                </>
            )
        }
        else {
            return (
                <>
                    <Img 
                    alt="complex" 
                    src={props.thumbnail?.toString()} 
                    //src="https://i.ytimg.com/vi/BH4IMzxBg14/maxresdefault.jpg" 
                    />
                </>
            )
        }
    }
    return (
        <>
            {renderThumbnail()}
        </>
    )
}

export default Thumbnail