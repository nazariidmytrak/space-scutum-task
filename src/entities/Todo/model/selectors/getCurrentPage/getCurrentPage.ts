import { StateSchema } from 'app/providers/StoreProvider';

export const getCurrentPage = (state: StateSchema) => state.todo.currentPage;
