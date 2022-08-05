import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default (reducers) => {
  const persistedReducers = persistReducer(
    {
      key: 'CONSUMO-API',
      storage,
      whitelist: ['auth'],
    },
    // eslint-disable-next-line prettier/prettier
    reducers,
  );

  return persistedReducers;
};
