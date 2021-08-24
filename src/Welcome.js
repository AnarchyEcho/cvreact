// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'
import { CodeBlock, dracula } from "react-code-blocks";
import Codeblock from './CodeblockList'

const CodeWrapper = styled.div`
    width: 600px;
    position: absolute;
    right: 0;
    margin-right: 50px;
`
const Code = styled(CodeBlock)`

`
const CodeSelect = styled.select`
    margin-bottom: 10px;
    position: relative;
    left: 10px;
    width: 100px;
    height: 50px;
    border-radius: 6px;
    -webkit-appearance: none;
    padding-left: 30px;
    font-family: inherit;
    &:focus{
        outline: none;
    }
`

export default function Welcome() {
    // eslint-disable-next-line
    const [language, changeLanguage] = useState("jsx");
    // eslint-disable-next-line
    const [lineNumbers, toggleLineNumbers] = useState(false);
    // eslint-disable-next-line
    const [lang, setLang] = useState(Codeblock['jsx']);

    function handleChange(e) {
        setLang(Codeblock[e.target.value]);
        return changeLanguage(e.target.value);
    }

    return (
      <CodeWrapper>
            <label>Pick a language i know: </label>
            <CodeSelect onChange={handleChange}>
              <option value='jsx'>jsx</option>
              <option value='html'>html</option>
            </CodeSelect>

            <Code
                language={language}
                text={lang}
                showLineNumbers={lineNumbers}
                theme={dracula}
                wrapLines={true}
                codeBlock
            />
          
      </CodeWrapper>
    );
  };