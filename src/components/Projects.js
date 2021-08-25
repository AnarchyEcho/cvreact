// eslint-disable-next-line
import React, { useState, useEffect } from 'react';
// eslint-disable-next-line
import styled, { ThemeProvider} from 'styled-components';
// eslint-disable-next-line
import ReactDOM from 'react-dom'

const List = styled.li`
    list-style: none;
    margin-left: -40px;
    padding: 0;
`

const ListSubTitle = styled.h3`
  color: #fe9000;
`
const ListSpan = styled.span`
  color: #fe9000;
`

export default function Projects() {
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState([]);
  
    // Note: the empty deps array [] means
    // this useEffect will run once
    // similar to componentDidMount()
    useEffect(() => {
      fetch("https://api.github.com/users/KodeAndre/repos")
        .then(res => res.json())
        .then(
          (result) => {
            setIsLoaded(true);
            setItems(result);
            console.log(result)
          },
          // Note: it's important to handle errors here
          // instead of a catch() block so that we don't swallow
          // exceptions from actual bugs in components.
          (error) => {
            setIsLoaded(true);
            setError(error);
          }
        )
    }, []);

   if (error) {
    return <div>Error: {error.message}</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <div>
          <ul>
            {items.map(item => (
              <List key={item.id} style={{lineHeight: "20px"}}>
                <ListSubTitle>{item.name}</ListSubTitle>
                <p>Description: {item.description}</p>
                <p><ListSpan>Link</ListSpan>: <a href={item.html_url} target="_blank" rel="noreferrer" style={{color: "white"}}>{item.html_url}</a></p> <br/>
              </List>
            ))}
          </ul>
          
      </div>
    );
  }
}