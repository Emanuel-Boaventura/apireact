import styled, { createGlobalStyle } from 'styled-components';
import * as colors from '../config/colors';
import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    background: ${colors.primaryDarkColor};
    color: ${colors.primaryDarkColor};
  }

  html, body, #root {
    height: 100%;
  }

  button {
    cursor: pointer;
    background: ${colors.primaryColor};
    border: none;
    color: white;
    padding: 10px 20px;
    border-radius: 6px;
    font-weight: 700;
    transition: all .3s;
  }

  button:hover{
    background-color: #9c0632;

  }

  a {
    text-decoration: none;
    color: ${colors.primaryColor}
  }

  ul {
    list-style: none;
  }

  body .Toastify .Toastify__toast-container .Toastify-toast--sucess {
    background: ${colors.sucessColor};
  }

  body .Toastify .Toastify__toast-container .Toastify-toast--error {
    background: ${colors.errorColor};
  }

`;

export const Container = styled.section`
  max-width: 360px;
  background: white;
  margin: auto;
  padding: 15px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
`;
