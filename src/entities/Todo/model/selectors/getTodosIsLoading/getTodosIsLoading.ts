import { StateSchema } from 'app/providers/StoreProvider';

export const getTodosIsLoading = (state: StateSchema) => state.todo.isLoading;
