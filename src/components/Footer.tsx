// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
// eslint-disable-next-line
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// eslint-disable-next-line
import { faGithub as Git, faLinkedin as Li } from "@fortawesome/free-brands-svg-icons";

const FooterContainer = styled.div`
    position: absolute;
    bottom: 0;
    padding-top: 10px;
    width: 100%;
`
const FooterWrapper = styled.div`
    display: grid;
    grid-auto-flow: column;
    grid-auto-columns: 1fr;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    gap: 0px 0px;
    grid-template-areas:
        "FooterRights FooterSocials";
    width: 100%;
`
const FooterRights = styled.div`
    grid-area: FooterRights;
    margin-left: 20px;
    align-self: center;
    color: #fafafa60;
`
const FooterSocials = styled.div`
    grid-area: FooterSocials;
    display: grid; 
    grid-auto-flow: column; 
    grid-auto-columns: 1fr; 
    grid-auto-rows: 1fr; 
    grid-template-columns: 1fr 1fr; 
    grid-template-rows: 1fr; 
    gap: 0px 0px; 
    grid-template-areas: 
        "Email Icons"; 
    place-self: flex-end;
    margin-right: 20px;
    align-self: center;
`
const FooterLink = styled.a`
  color: #fafafa60;
`
const FooterIcon = styled(FontAwesomeIcon)`
    color: #fafafa;
    margin-left: 5px;
    &:hover {
        filter: invert(50%) sepia(48%) saturate(1537%) hue-rotate(2deg) brightness(108%) contrast(107%);
    }
`

export default function Footer() {

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRights>
                    <p>
                        &copy; Copyright 2021 <FooterLink href="https://github.com/kodeandre" target="_blank" rel="noreferrer">Andrè Kodehode</FooterLink>
                    </p>
                </FooterRights>
                <FooterSocials>
                        <FooterLink href="https://github.com/KodeAndre" target="_blank" rel="noreferrer"><FooterIcon icon={Git} size="2x" /></FooterLink>
                        {/* <FooterLink href="https://www.linkedin.com/in/andr%C3%A8-hagen-a0a821217/" target="_blank" rel="noreferrer"><FooterIcon icon={Li} size="2x" /></FooterLink> */}
                </FooterSocials>
            </FooterWrapper>
        </FooterContainer>
    )
}