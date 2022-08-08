import React from 'react';
import PropTypes from 'prop-types';
import Lottie from 'lottie-react-web';

import { Container } from './styled';
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
      <Lottie
        options={defaultOptions}
        height={400}
        width={400}
        style={{ background: 'none' }}
      />
    </Container>
  );
}

Loading.defaultProps = {
  isLoading: false,
};

Loading.propTypes = {
  isLoading: PropTypes.bool,
};
