// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'

const FooterWrapper = styled.div`
    position: fixed;
    bottom: 0;
`
const FooterRights = styled.div`

`
const FooterSocials = styled.div`

`

export default function Footer() {

    return (
        <FooterWrapper>

            <FooterRights>
                <p>rights</p>
            </FooterRights>

            <FooterSocials>
                <p>socials</p>
            </FooterSocials>

        </FooterWrapper>
    )
}