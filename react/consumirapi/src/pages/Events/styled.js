// Estiliza os componentes

import styled from 'styled-components';

export const EventContainer = styled.div`
  margin-top: 20px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 0;
  }

  div + div {
    border-top: 1px solid #eee;
  }
`;
export const EventImage = styled.div`
  img {
    width: 100px;
    height: 70px;
    border-radius: 10%;
  }
`;
