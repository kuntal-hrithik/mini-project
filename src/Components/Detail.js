import React from "react";
import styled from "styled-components";
import Header from "./Header";

const Detail = () => {
  return (
    <Container>
      <Background>
        <img src="./images/971586.jpg" alt="" />
      </Background>
      <ImageTitle>
        <h2>One Piece</h2>
      </ImageTitle>
      <Controls>
            <PlayButton></PlayButton>
            <TrailerButton></TrailerButton>
            <AddButton></AddButton>
            <GroupWatch></GroupWatch>
      </Controls>
    </Container>
  );
};

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
  position: relative;
`;
const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index:-1;
  opacity:0.8;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
 
  }
`;

const ImageTitle = styled.div`
min-height:170px;
min-width:200px;
height:30vh;
width:35vw;
h2{
    font-size:3.2rem;
}
`;

const Controls=styled.div``;
const PlayButton=styled.button`
`;
const TrailerButton = styled.button`;
`
const AddButton=styled.button``;

const GroupWatch=styled.button``;