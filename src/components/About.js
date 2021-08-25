// eslint-disable-next-line
import React from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'

const AboutTitles = styled.h3`
    color: #fe9000;
`
const AboutLink = styled.a`
    color: #fafafa;
`

export default function About() {

    return (
        <div>
            <h2>&gt;About</h2>
            <AboutTitles>Background: </AboutTitles>
            <p>I have a background in hardware and SYSAdmin work with 2 separate companies, one where i fixed and did maintenance on PC's, Laptops and other technical hardware, and one where i maintained and made a webstore for the company, and helped with general IT.</p>
            <AboutTitles>Skills: </AboutTitles>
            <p>I know how to code in React, React Native, HTML, CSS, JavaScript, and to some extent: Lua, Python, Java and C#, as i have used them for various game related uses such as mods and addons. I'd say i have a preference for Back-end.</p>
            <AboutTitles>School: </AboutTitles>
            <p>I graduated from High School as a Media student, with my main focus being on photography and design.</p>
            <AboutTitles>Contact Me: </AboutTitles>
            <p><b>Email: </b><AboutLink href="mailTo:andre.kodehode@gmail.com">andre.kodehode@gmail.com</AboutLink></p>
        </div>
    )
}