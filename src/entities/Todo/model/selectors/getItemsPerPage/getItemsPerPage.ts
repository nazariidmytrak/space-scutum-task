import { StateSchema } from 'app/providers/StoreProvider';

export const getItemsPerPage = (state: StateSchema) => state.todo.itemsPerPage;
