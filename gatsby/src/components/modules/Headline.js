import React from 'react'
import styled from 'styled-components'

const Headline = ({data}) => {
    return(
        <HeadlineContainer>
            <h2>{data.headlineText}</h2>
        </HeadlineContainer>
    )
}

const HeadlineContainer = styled.section`
    text-align: center;
    padding: 20px;
    font-size: 68.66px;
    font-weight: normal;
    line-height: 1;
`

export default Headline