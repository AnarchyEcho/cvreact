// eslint-disable-next-line
export default {
    jsx: `import React from 'react';
    import styled from 'styled-components';
    import Norwegian from 'Country'
    function MyName() {
        return (
          <div id="Coder">
            <h1>Hi, i'm Andrè</h1>
            <p>I'm a 23 years old Software Developer</p>
            <p>Welcome to my CV/Portfolio!</p>
          </div>
        );
      }
      export default MyName`,
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
    </html>`
}