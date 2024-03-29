import * as types from '../types';

const initialState = {
  botaoClicado: false,
};

export default function (state = initialState, action = 0) {
  switch (action.type) {
    case types.BOTAO_CLICADO_SUCCESS: {
      console.log('Deu certo =)');
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      return newState;
    }
    case types.BOTAO_CLICADO_FAILURE: {
      console.log('Deu erro =(');
      return state;
    }
    case types.BOTAO_CLICADO_REQUEST: {
      console.log('Fazendo requisição');
      return state;
    }

    default: {
      return state;
    }
  }
}
