import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import { AddTodo } from 'features/AddTodo';
import { TodoPagination } from 'features/TodoPagination';
import {
  getTodosIsLoading,
  fetchTodos,
  TodoList,
  getTodosError,
  getTodos,
} from 'entities/Todo/index';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { Loader } from 'shared/ui/Loader/Loader';
import Button from 'shared/ui/Button/Button';
import RetryIcon from 'shared/assets/icons/retry.svg';

import styles from './TodoWidget.module.scss';

export const TodoWidget = () => {
  const dispatch = useAppDispatch();

  const todos = useSelector(getTodos);
  const isLoading = useSelector(getTodosIsLoading);
  const error = useSelector(getTodosError);

  useEffect(() => {
    dispatch(fetchTodos());
  }, [dispatch]);

  if (isLoading) {
    return (
      <div className={styles.loading}>
        <Loader />
      </div>
    );
  }
  if (error) {
    return (
      <div className={styles.error}>
        {error}
        <Button icon={RetryIcon} onClick={() => dispatch(fetchTodos())} />
      </div>
    );
  }
  return (
    <div className={styles.todoWidget}>
      <AddTodo />
      <TodoList />
      <TodoPagination todos={todos} totalItems={todos.length} />
    </div>
  );
};
