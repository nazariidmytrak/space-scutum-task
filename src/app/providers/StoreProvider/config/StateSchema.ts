import { TodosSchema } from 'entities/Todo';

export interface StateSchema {
  todo: TodosSchema;
}

export interface ThunkConfig<T> {
  rejectValue: T;
}
