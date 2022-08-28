import React from 'react'
import Parser from 'html-react-parser';
import styled from 'styled-components';
import BlockContent from '@sanity/block-content-to-react';

const Video = ({data}) => {

const VideoContainer = styled.section`
    padding: 48px 0;
    width: ${data.videoSize}%;
    margin: 0 auto;
    .cont {
        position: relative;
        overflow: hidden;
        width: 100%;
        padding-top: 56.25%; /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */
    }
    iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
    p {
        padding: 5px 20px;
        text-transform: uppercase;
    }
`
    return(
        <VideoContainer>
            <div className='cont'>
                {Parser(data.embedUrl)}
            </div>
            <div className='meta'>
            `   <BlockContent
                    blocks={data._rawCaption}
                />
            </div>
        </VideoContainer>
    )
}



export default Video