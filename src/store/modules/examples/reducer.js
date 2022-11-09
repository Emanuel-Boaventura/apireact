import * as types from '../types';

const initialState = {
  botaoClicado: true,
};

// eslint-disable-next-line default-param-last, func-names
export default function (state = initialState, action) {
  switch (action.type) {
    case types.BOTAO_CLICADO_REQUEST: {
      // eslint-disable-next-line no-console
      console.log('Making the Request...');
      return state;
    }

    case types.BOTAO_CLICADO_FAILURE: {
      // eslint-disable-next-line no-console
      console.log('Failure');
      return state;
    }

    case types.BOTAO_CLICADO_SUCCESS: {
      const newState = { ...state };
      newState.botaoClicado = !newState.botaoClicado;
      // eslint-disable-next-line no-console
      console.log('Success');
      return newState;
    }

    default:
      return state;
  }
}
