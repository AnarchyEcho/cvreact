import { useState } from 'react';
import styled from 'styled-components';
import { CodeBlock } from "react-code-blocks";
import Codeblock from './CodeblockList'
import codetheme from "./CodeTheme.ts"

import LiveCode from './LiveCode'

const CodeWrapper = styled.div`
    width: 450px;
    position: fixed;
    top: 30%;
    right: 0;
    margin-right: 20px;
    animation: fadeinRight 1.2s;
    @keyframes fadeinRight {
    from { right: -1000px; }
    to   { right: 0; }
}
@media (max-width:769px) {
    width: 95%;
    margin-right: 0;
    margin-left: 8px;
    position: relative;
}
`
const WelcomeWrapper = styled.div`
`
const Code = styled(CodeBlock)`
    z-index: -1;
`
const CodeSelect = styled.select`
    margin-bottom: 40px;
    position: relative;
    left: 10px;
    width: 80px;
    height: 40px;
    border-radius: 6px;
    -webkit-appearance: none;
    padding-left: 15px;
    font-family: inherit;
    &:focus{
        outline: none;
    }
`

export default function Welcome() {
    const [language, changeLanguage] = useState("jsx");
    const [lineNumbers, toggleLineNumbers] = useState(false);
    const [lang, setLang] = useState(Codeblock['jsx']);

    function handleChange(e) {
        setLang(Codeblock[e.target.value]);
        return changeLanguage(e.target.value);
    }

    return (
      <WelcomeWrapper>

        <LiveCode />
            <CodeWrapper>
            <Code
                language={language}
                text={lang}
                showLineNumbers={lineNumbers}
                theme={codetheme}
                wrapLines={true}
                codeBlock
            />
            <label htmlFor="codelang">Pick a language: </label>
            <CodeSelect id="codelang" onChange={handleChange}>
                <option value='tsx'>tsx</option>
                <option value='html'>html</option>
                <option value='python'>python</option>
                <option value='lua'>lua</option>
            </CodeSelect>
        </CodeWrapper>
      </WelcomeWrapper>
    );
  };