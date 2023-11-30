export interface TodoSchema {
  id: string;
  title: string;
  userId: string;
  completed: false;
}

export interface NewTodoSchema {
  id: string;
  title: string;
}

export interface TodosSchema {
  todos: TodoSchema[];
  error?: string;
  isLoading: boolean;
  currentPage: number;
  itemsPerPage: number;
}
