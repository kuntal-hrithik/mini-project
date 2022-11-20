import React from 'react'
import styled from 'styled-components'

const Choice = () => {
  return (
    <Container>
            <Wrap>
                <h2>Action</h2>
            </Wrap>
            <Wrap>
                <h2>Romance</h2>
            </Wrap>
            <Wrap>
                <h2>Thriller</h2>
            </Wrap>
            <Wrap>
                <h2>Comedy</h2>
            </Wrap>
            <Wrap>
                <h2>Sci-Fi</h2>
            </Wrap>
        </Container>
  )
}

export default Choice

const Container  = styled.div`
margin-top:30px;
display:grid;
grid-gap:25px;
grid-template-columns:repeat(5,minmax(0,1fr));


`

const Wrap = styled.div`
cursor:pointer;
border-radius:10px;
border:3px solid rgba(249,249,249,0.1);
box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px, rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

text-align:center;
    h2{
        text-align:center;
        width:100%;
        height:100%;
    }
    &:hover{
        box-shadow: rgb( 0 0 0 / 80% ) 0px 40px 58px -16px, rgb( 0 0 0 / 72% ) 0px 30px 22px -10px;
        transform:scale(1.05);
        border-color: rgba(249, 249, 249, 0.8);

    }
`
