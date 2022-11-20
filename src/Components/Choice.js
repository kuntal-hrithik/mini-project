import React from 'react'
import styled from 'styled-components'

const Choice = () => {
  return (
    <Container>
        <h1>Experience Anime Like Never Before</h1>
        <h3>Choose Your Genre</h3>
        <img src="./down-arrow.png"/>
        <Wrap>
            <h1>Comedy</h1>
        </Wrap>
        <Wrap>
            <h1>Comedy</h1>
        </Wrap>
        <Wrap>
            <h1>Comedy</h1>
        </Wrap>
        <Wrap>
            <h1>Comedy</h1>
        </Wrap>
        <Wrap>
            <h1>Comedy</h1>
        </Wrap>
        </Container>
  )
}

export default Choice

const Container  = styled.div`
margin-top:40px;
justify-content:center;
text-align:center;

img{
    height:40px;
}

`

const Wrap = styled.div`
`
