import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styled';
import Lottie from 'lottie-react';

import animatedLoading from '../../assets/check.json';

export default function Loading({ isLoading }) {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animatedLoading,
  };

  if (!isLoading) return <></>;
  return (
    <Container>
      <div />
      <span>Carregando...</span>
      <Lottie options={defaultOptions} height={400} width={400} />
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.boll,
};
