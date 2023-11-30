import { useSelector } from 'react-redux';

import { useTodoPagination } from '../../model/hooks/useTodoPagination/useTodoPagination';
import { TodoItem } from '../TodoItem/TodoItem';
import { getTodos } from '../../model/selectors/getTodos/getTodos';
import { TodoSchema } from '../../model/types/todo';

import styles from './TodoList.module.scss';

export const TodoList = () => {
  const todos = useSelector(getTodos);
  const { itemsToDisplay } = useTodoPagination(todos);

  return (
    <>
      <ul className={styles.todoList}>
        {itemsToDisplay.map((todo: TodoSchema) => (
          <TodoItem key={todo.id} title={todo.title} id={todo.id} />
        ))}
      </ul>
    </>
  );
};
