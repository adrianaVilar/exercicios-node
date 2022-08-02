// Importa o metódo createGlobalStyle do styled-components que permite criar estilos de componente globais (substitui o css)
import styled, { createGlobalStyle } from 'styled-components';
// Importa tudo (*) como 'colors' do arquivo '../config/colors.js'
import * as colors from '../config/colors';
// Importa o CSS do react-toastify
import 'react-toastify/dist/ReactToastify.css';

// Exporta o componente createGlobalStyles
export default createGlobalStyle`
:root{
  --toastify-icon-color-success: white;
  --toastify-icon-color-error: white;
}

* {
  margin: 0;
  padding: 0;
  outline: none;
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: ${colors.primaryDarkColor};
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
  color: #fff;
  padding: 10px 20px;
  border-radius: 4px;
  font-weight: 700;
}

ul {
  list-style: none;
}

body .Toastify .Toastify__toast-container .Toastify__toast--success {
  background: ${colors.successColor};
  color: white;
}

.Toastify__progress-bar--success {
  background: white;
}


body .Toastify .Toastify__toast-container .Toastify__toast--error {
  background: ${colors.errorColor};
  color: white;
}

.Toastify__progress-bar--error {
  background: white;
}
`;

// Exporta a constante Container com os parametros de css/jsx
export const Container = styled.section`
  max-width: 360px;
  background: #fff;
  margin: 30px auto;
  padding: 30px;
  border-radius: 4px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
`;
