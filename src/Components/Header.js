import React from 'react'
import styled from 'styled-components';
export const Header = () => {
  return (
    <Nav>
        <Logo src="./logo1.png"/>
        <NavMenu>
             <a>
            < img src="./search-icon.svg"/>
            <span>SEARCH</span>
            </a>
            <a>
            < img src="./home-icon.svg"/>
            <span>HOME</span>
            </a>

            <a>
            < img src="./home-icon.svg"/>
            <span>MOOD</span>
            </a>

            <a>
            < img src="./watchlist-icon.svg"/>
            <span>WATCH LIST</span>
            </a>


        </NavMenu>

        <UserImg src="./images.jpeg"/>
    </Nav>
  )
}
 export default Header;
  
 const Nav = styled.nav`
 height:70px;
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
