import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700;900&display=swap');

:root {
  --background: #f9f9f9;
  --fill: #f0f2f5;
  --blue-light: #6933FF;
  --blue: #5429CC;
  --red: #E52E4D;
  --text: #363F5F;
  --text-title:#969CB3;
  --shape: #ffffff;
  --green: #33CC95;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: 0;
  font-size: 16px;
}

  a{
    text-decoration: none;
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
    }
  }

  li{
    list-style: none;
  }
  body{
    background: var(--fill);
    font-size: 14px;
    color: #333; 
    font-family: Roboto, sans-serif;
    width: 100%;
    height: 100vh;
    @media screen and (max-width: 600px) {
    padding-bottom: 140px;
    
  }
  }
  .animeLeft {
    opacity: 0;
    transform: translatex(-50px);
    animation: animeLeft 0.9s forwards;
}
@keyframes animeLeft {
    to {
        opacity: 1;
        transform: initial;
    }
}
  .br{
    border: 1px solid red;
  }
`;
