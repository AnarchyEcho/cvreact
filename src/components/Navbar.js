import React, {useEffect, useState} from 'react';
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';

let NavWrapper = styled.div`
display: grid;
grid-auto-flow: column;
grid-auto-columns: 1fr;
grid-auto-rows: 1fr;
grid-template-columns: 3fr 1fr;
grid-template-rows: 1fr;
gap: 0px 0px;
grid-template-areas:
  "NavWrapperLeft NavWrapperRight";
width: 100%;
height: ${props => props.theme.nav.height};
background-color: ${props => props.theme.nav.backgroundColor};
color: #fafafa;
top: 0;
position: sticky;
margin-bottom: 75px;
`

let NavWrapperLeft = styled.div`
grid-area: NavWrapperLeft;
display: grid; 
grid-auto-flow: column; 
grid-auto-columns: 1fr; 
grid-auto-rows: 1fr; 
grid-template-columns: 1fr; 
grid-template-rows: 1fr; 
gap: 0px 0px; 
grid-template-areas: 
  "."; 
height: ${props => props.theme.nav.height};
align-items: ${props => props.theme.nav.alignItems};
margin-left: 15px;
`

let NavWrapperRight = styled.div`
grid-area: NavWrapperRight;
display: grid; 
grid-auto-flow: column; 
grid-auto-columns: 1fr; 
grid-auto-rows: 1fr; 
grid-template-columns: 1fr 1fr 1fr; 
grid-template-rows: 1fr; 
gap: 0px 0px; 
grid-template-areas: 
  ". . ."; 
height: ${props => props.theme.nav.height};
align-items: ${props => props.theme.nav.alignItems};
justify-content: flex-end;
text-align: center;
width: 500px;
`

let NavTitle = styled(Link)`
  font-size: ${props => props.theme.title.fontSize};
  text-decoration: none;
  color: #000;
  width: 170px;
  background-color: #fafafa;
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  animation: hue 7s infinite;
  &:hover {
  color: #fe9000;
	background-image: -webkit-linear-gradient(92deg, #f35626, #feab3a);
	-webkit-text-fill-color: transparent;
}

@keyframes hue {
  from {
    -webkit-filter: hue-rotate(0deg);
  }
  to {
    -webkit-filter: hue-rotate(-360deg);
  }
}
`

let NavLink = styled(Link)`
  font-size: ${props => props.theme.link.fontSize};
  text-decoration: none;
  color: #fafafa;
  padding: ${props => props.theme.link.padding};
  &:hover {
  animation: pulse 1s infinite
  }
  @keyframes pulse {
   0%   { -webkit-transform: scale(1)   ; opacity: 1;    }
   50%  { -webkit-transform: scale(0.75); opacity: 0.45; }
   100% { -webkit-transform: scale(1)   ; opacity: 1;    }
}
`

let wrapperTheme =
  {
    nav: {
      height:'100px',
      alignItems: 'center',
      backgroundColor: "none",
    }, 
    title: {
      fontSize: '32px',
    }, 
    link: {
      fontSize: '22px',
      padding: "30px 0",
    }
  }

let wrapperThemeScrolled = 
  {
    nav: {
      height:'60px',
      alignItems: 'center',
      backgroundColor: "#fe9000",
    }, 
    title: {
      fontSize: '24px',
      backgroundColor: '#fafafa',
    },
    link: {
      fontSize: '18px',
      padding: "19px 0",
    }
  }

export default function Navbar() {

  let [theme, setTheme] = useState(wrapperTheme);

    useEffect(() => {
        window.addEventListener("scroll", () => {
        if (window.scrollY > 80 ) {
          setTheme(wrapperThemeScrolled);
        }
        if (window.scrollY <= 80 ) {
          setTheme(wrapperTheme);
        }
      });
    }, []);

    return (
      <ThemeProvider theme={theme}>
        <NavWrapper>
              <NavWrapperLeft>
                  <NavTitle to="/">
                    Andrès CV
                  </NavTitle>
              </NavWrapperLeft>
            <NavWrapperRight>

              <NavLink to="/">
                  Home
              </NavLink>

              <NavLink to="/projects">
                  Projects
              </NavLink>

              <NavLink to="/about">
                  About
              </NavLink>

          </NavWrapperRight>
        </NavWrapper>
      </ThemeProvider>
    )
  };