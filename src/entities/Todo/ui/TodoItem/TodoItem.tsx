import Button from 'shared/ui/Button/Button';
import Input from 'shared/ui/Input/Input';
import DeleteIcon from 'shared/assets/icons/delete.svg';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import { todoActions } from '../../model/slices/todoSlice/todoSlice';

import styles from './TodoItem.module.scss';

interface TodoItemProps {
  id: string;
  title: string;
}

export const TodoItem = ({ title, id }: TodoItemProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = () => {
    dispatch(todoActions.deleteTodo(id));
  };

  const handleEdit = (title: string) => {
    dispatch(todoActions.editTodo({ id, title }));
  };

  return (
    <li className={styles.todoItem}>
      <Input value={title} onValueChange={handleEdit} placeholder='Edit todo' />
      <Button icon={DeleteIcon} onClick={handleDelete} />
    </li>
  );
};
