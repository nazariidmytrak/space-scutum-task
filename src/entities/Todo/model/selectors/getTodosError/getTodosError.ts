import { StateSchema } from 'app/providers/StoreProvider';

export const getTodosError = (state: StateSchema) => state.todo.error;
