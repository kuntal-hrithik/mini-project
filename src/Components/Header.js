import React from 'react'
import styled from 'styled-components';
export const Header = () => {
  return (
    <Nav>
        <Logo src="./logo.png"/>
        <NavMenu>
            <a>
            < img src="./home-icon.svg"/>
            <span>HOME</span>
            </a>

            <a>
            < img src="./search-icon.svg"/>
            <span>SEARCH</span>
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
 z-index:10;
 position:sticky;
 top:0;
 height:70px;
 background:#002244;
 display:flex;
 align-items:center;
 ` 
const Logo = styled.img`
width:80px;
height:60px;
`
const NavMenu  = styled.div`
display:flex;
flex:1;
margin-left:25px;
align-items:center;
a{
    display:flex;
    align-items:center;
    padding:0 12px;
    cursor:pointer;

    img{
        height:20px;
    }

    span{
        font-size:15px;
        letter-spacing:1.42px;
        position:relative;
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
width:48px;
height:48px;
cursor:pointer;
`
