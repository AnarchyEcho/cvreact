// eslint-disable-next-line
export default {
    jsx: `import React from 'react';
    import styled from 'styled-components';
    import Norway from './Country'
    export default function WhoAmI() {
        return (
          <div id="Coder">
            <h1>Hi, i'm Andrè</h1>
            <p>I'm a 23 years old Software Developer</p>
            <p>Welcome to my CV/Portfolio!</p>
          </div>
        );
      }`,
    html: `<!DOCTYPE html>
    <html lang="nb">
      <head>
        <meta charset="utf-8" />
        <title>Andrè's CV</title>
      </head>
      <body>
        <div>
          <h1>Hi, i'm Andrè</h1>
          <p>I'm a 23 years old Software Developer</p>
          <p>Welcome to my CV/Portfolio!</p>
        </div>
      </body>
    </html>`,
    python: `f = open("who.txt", "r")
    print(f.read())
    expected output: "Hi, i'm Andrè.",
    "I'm a 23 years old Software Developer",
    "Welcome to my CV/Portfolio!")`,
    lua: `print("Hi, i'm Andrè.
    I'm a 23 years old Software Developer
    Welcome to my CV/Portfolio!")`
}