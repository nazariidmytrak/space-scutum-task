import { useState } from 'react';

import { todoActions } from 'entities/Todo/index';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';
import Input from 'shared/ui/Input/Input';
import Button from 'shared/ui/Button/Button';
import PlusIcon from 'shared/assets/icons/plus.svg';

import styles from './AddTodo.module.scss';

export const AddTodo = () => {
  const dispatch = useAppDispatch();
  const [title, setTitle] = useState('');

  const handleAdd = () => {
    if (!title.trim()) {
      return;
    }
    dispatch(todoActions.addTodo({ id: Date.now().toString(), title }));
    setTitle('');
  };

  return (
    <div className={styles.addTodo}>
      <Input value={title} onValueChange={setTitle} label='Add todo' />
      <Button icon={PlusIcon} onClick={handleAdd} />
    </div>
  );
};
