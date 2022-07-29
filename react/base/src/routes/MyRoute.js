import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function MyRoute({ component: Component, isClosed, ...rest }) {
  const isLoggedIn = false;

  if (isClosed && !isLoggedIn) {
    return (
      // Redireciona para login e a chave prevPath permite saber o caminho antigo, para redirecionar para o mesmo
      <Redirect
        to={{ pathname: '/login', state: { prevPath: rest.location.pathname } }}
      />
    );
  }

  return <Route {...rest} component={Component} />;
}

MyRoute.defaultProps = {
  // Por padrão, a rota é aberta
  isClosed: false,
};

MyRoute.propTypes = {
  // Pode ser duas coisas: elemento ou função
  component: PropTypes.oneOfType(PropTypes.element, PropTypes.func).isRequired,
  isClosed: PropTypes.bool,
};
