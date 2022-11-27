import React from 'react'
import styled from 'styled-components';
export const Header = () => {
  return (
    <Nav>
        <Logo src="./logo1.png"/>
        <NavMenu>
             <a>
            < img src="./search-icon.svg"/>
            <Text> Search  </Text>
            </a>
            <a>
            < img src="./home-icon.svg"/>
            <Text> Home  </Text>
            </a>

            <a>
            < img src="./home-icon.svg"/>
            <Text>Mood</Text>
            </a>

            <a>
            < img src="./watchlist-icon.svg"/>
            <Text> Watch List</Text>
            </a>


        </NavMenu>

        <UserImg src="./images.jpeg"/>
    </Nav>
  )
}
 export default Header;
  
 const Nav = styled.nav`
 z-index:10;
 position:sticky;
 top:0;
 height:70px;
 width:100vw;
 background:#002244;
 display:flex;
 align-items:center;
 `  
const Logo = styled.img`
width:140px;
height:50px;
margin-left:20px;
`
const NavMenu  = styled.div`
display:flex;
flex:1;
margin-left:500px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 50px;
    cursor:pointer;

    img{
        height:20px;
        opacity:60%;
    }

    span{
        font-size:16px;
        letter-spacing:1.5px;
        position:relative;
        opacity:60%;
        &:after{
            content:'';
            height:2px;
            background:white;
            position:absolute;
            left:0;
            right:0;
            bottom:-6px;
            opacity:0;
            transform-origin:left center;
            transform: scaleX(0);
        }
    }

    &:hover{
        span:after{
            transform: scaleX(1);
            opacity:1;
        }
    }
}
`
const UserImg = styled.img`
margin-right:20px;
width:38px;
height:70px;
cursor:pointer;
`
const Text = styled.div`
color:white
`;