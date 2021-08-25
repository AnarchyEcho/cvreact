// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'

const LiveEdit = styled(LiveEditor)`
    width: 1000px;
    border-left: 4px solid #D1949E;
`
const LivePre = styled(LivePreview)`
    width: 1000px;
    margin-top: 50px;
    background: #171717;
    color: #ddd;
    padding: 10px;
    border-radius: 10px;
`

export default function LiveCode() {

    let codeExample = 
    `function LiveCode() {
        
        return(
            <div>
            <h1>This is a live React editor</h1>
            <p>You can try to write some React jsx here!</p>
            <p>It'll show the output of what you write here inside the darker preview area</p>
            </div>
        )
    }`
    
    return(
        <LiveProvider code={codeExample}>
            <LiveEdit />
            <LiveError />
            <LivePre />
        </LiveProvider>
    )
}