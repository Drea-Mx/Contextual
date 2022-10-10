import React from 'react'
import Parser from 'html-react-parser';
import styled from 'styled-components';

const Audio = ({data}) => {
    return(
        <AudioContainer>
            {Parser(data.codigo)}
        </AudioContainer>
    )
}

const AudioContainer = styled.section`
    display: flex;
    padding: 48px 20px;

    iframe {
        width: 60%;
        margin: 50px auto;
        @media (max-width: 680px) {
            width: 100%;
        }
    }
`
 
export default Audio