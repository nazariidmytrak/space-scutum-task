import { ReducersMapObject, configureStore } from '@reduxjs/toolkit';

import { todoReducer } from 'entities/Todo/index';
import { StateSchema } from './StateSchema';

export function createReduxStore(initialState?: StateSchema) {
  const rootReducer: ReducersMapObject<StateSchema> = {
    todo: todoReducer,
  };

  const store = configureStore({
    reducer: rootReducer,
    preloadedState: initialState,
  });

  return store;
}

export type AppDispatch = ReturnType<typeof createReduxStore>['dispatch'];
