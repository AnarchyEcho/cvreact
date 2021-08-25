// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const LiveEdit = styled(LiveEditor)`
    width: auto;
    border-left: 4px solid #D1949E;
    background: #171717;
`
const LivePre = styled(LivePreview)`
    width: auto;
    margin-top: 50px;
    background: #171717;
    color: #ddd;
    padding: 10px;
    border-radius: 10px;
`
const LiveWrapper = styled.div`
    position: absolute;
    top: 200px;
    left: 0;
    margin-left: 20px;
    animation: fadeinLeft 1.2s;
    @keyframes fadeinLeft {
    from { left: -1000px; }
    to   { left: 0; }
    }
`

export default function LiveCode() {

    let codeExample = 
    `function LiveCode() {
        function btnFunction() {
            alert("You clicked a button");
        } 
        return(
            <div>
            <h1>This is a live React editor</h1>
            <p>You can try to write some React jsx here!</p>
            <p>It'll show the output of what you write here inside the below preview area</p>
            <h2>For example, a button!</h2>
            <button onClick={btnFunction}>Click me</button>
            </div>
        )
    }`
    
    return(
        <LiveWrapper>
            <LiveProvider code={codeExample}>
                <LiveEdit />
                <LiveError />
                <LivePre />
            </LiveProvider>
        </LiveWrapper>
    )
}