import React from 'react';

import { Container } from '../../styles/GlobalStyles';
import { Title, Paragrafo } from './styled';

import axios from '../../services/axios';

export default function Login() {
  /* Se colocar algo entre os colchetes, cada vez que ele mudar, a função vai ser executada
   * Se deixar só algo entre as chaves, só vai executar quando o componente for montado
   */
  React.useEffect(() => {
    async function getData() {
      const response = await axios.get('/events');
      console.log(response);
    }

    getData();
  }, []);

  return (
    <Container>
      <Title isRed={false}>
        Login
        <small>Oii</small>
      </Title>
      <Paragrafo>Lorem ipsum dolor sit amet.</Paragrafo>
      <a href="">Oiiisss</a>
      <p></p>
      <button type="button">Enviar</button>
    </Container>
  );
}
