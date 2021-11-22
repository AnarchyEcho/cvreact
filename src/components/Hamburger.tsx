import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars as HB, faTimes as Cross } from '@fortawesome/free-solid-svg-icons'
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';

const HamburgerWrapper = styled.div`
    justify-self: flex-end;
`
const HamLinkWrapper = styled.div`
    top: ${props => props.theme.links.top};
    position: absolute;
    text-align: center;
    left: 0;
    right: 0;
    bottom: 0;
    justify-self: center;
    display: grid;
    background-color: #252525;
    transition: top 0.5s ease-in-out;
    height: 300px;
`
const HamLinkTitle = styled.h2`
    padding-top: 10px;
    padding-bottom: 10px;
`
const HamLink = styled(Link)`
    color: #fe9000;
    text-decoration: none;
`
const HamIcon = styled(FontAwesomeIcon)`
    font-size: 36px;
`
const HamTheme = {
    links: {
        top: "-400px",
    }
}
const HamThemeToggled = {
    links: {
        top: "100px",
    }
}

export default function Hamburger() {

    const [toggled, setToggled] = React.useState(false);
    const [theme, setTheme] = React.useState(HamTheme);
    const [Icon, setIcon] = React.useState(HB);

    function stateChange() {
        if (toggled === true) {
            setIcon(HB);
            setToggled(false);
            setTheme(HamTheme);
        }
        if (toggled === false) {
            setIcon(Cross);
            setToggled(true);
            setTheme(HamThemeToggled);
        }
    }

    return (
    <ThemeProvider theme={theme}>
        <HamburgerWrapper>
            <HamIcon icon={Icon} onClick={stateChange}/>

            <HamLinkWrapper>
                <HamLinkTitle>
                    <HamLink to="/m/" onClick={stateChange}>Home</HamLink>
                </HamLinkTitle>
                <HamLinkTitle>
                    <HamLink to="projects" onClick={stateChange}>Projects</HamLink>
                </HamLinkTitle>
                <HamLinkTitle>
                    <HamLink to="about" onClick={stateChange}>About</HamLink>
                </HamLinkTitle>

            </HamLinkWrapper>
        </HamburgerWrapper>
    </ThemeProvider>
    )
}