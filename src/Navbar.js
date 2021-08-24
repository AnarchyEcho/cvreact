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
margin-bottom: 100px;
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
  color: #fafafa;
  width: 170px;
`

let NavLink = styled(Link)`
  font-size: ${props => props.theme.link.fontSize};
  text-decoration: none;
  color: #fafafa;
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
    }, 
    link: {
      fontSize: '18px',
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