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
`
const FooterSocials = styled.div`
    grid-area: FooterSocials;
    place-self: flex-end;
    margin-right: 20px;
`
const FooterLink = styled.a`
  color: #fafafa;
`
const FooterIcon = styled(FontAwesomeIcon)`
    margin-left: 5px;
    margin-bottom: 10px;
`

export default function Footer() {

    return (
        <FooterContainer>
            <FooterWrapper>
                <FooterRights>
                    <p>
                        &copy; Copyright 2021 <FooterLink href="https://github.com/kodeandre" target="_blank" rel="noreferrer">Andrè Hagen</FooterLink>
                    </p>
                </FooterRights>
                <FooterSocials>
                    <FooterIcon icon={Git} size="2x" />
                    <FooterIcon icon={Li} size="2x" />
                </FooterSocials>
            </FooterWrapper>
        </FooterContainer>
    )
}