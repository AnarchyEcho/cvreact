// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
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

let FooterLink = styled.a`
  color: #fafafa;
`

export default function Footer() {

    return (
        <FooterWrapper>

            <FooterRights>
                <p>&copy; Copyright 2021 <FooterLink href="https://github.com/kodeandre" target="_blank" rel="noreferrer">Andrè Hagen</FooterLink></p>
            </FooterRights>

            <FooterSocials>
                <p>socials</p>
            </FooterSocials>

        </FooterWrapper>
    )
}