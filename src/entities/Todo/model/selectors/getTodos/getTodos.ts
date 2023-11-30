import { StateSchema } from 'app/providers/StoreProvider';

export const getTodos = (state: StateSchema) => state.todo.todos;
