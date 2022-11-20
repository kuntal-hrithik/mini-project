import React from "react";
import styled from "styled-components";

const Movies = () => {
  return (
    <Container>
      <h2>Recommended for You!</h2>
      <Content>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            src="https://i0.wp.com/thenerddaily.com/wp-content/uploads/2018/08/Reasons-To-Watch-Anime.jpg?w=1000&ssl=1"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
};

export default Movies;

const Container = styled.div`
text-align:center;
`;
const Content = styled.div`
  display: grid;
  grid-gap: 25px;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;
const Wrap = styled.div`
cursor: pointer;
  border-radius: 10px;
  overflow: hidden;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shaddow: rgb(0 0 0 / 69%) 0x 26px 30px -10px,
    rgb(0 0 0 /73%) 0px 16px 10px -10px;
    transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  &:hover{
    transform:scale(1.05);
    box-shadow: rgb(0 0 0 / 80%) 0px 40px 58px -16px, rgb(0 0 0 / 72%) 0px 30px 22px -10px;
    border-color: rgba(249, 249, 249, 0.8);
    
  }
`;
