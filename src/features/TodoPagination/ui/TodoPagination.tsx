import { TodoSchema } from 'entities/Todo/model/types/todo';
import { useTodoPagination } from 'entities/Todo';
import Button from 'shared/ui/Button/Button';
import PreviusIcon from 'shared/assets/icons/previous.svg';
import NextIcon from 'shared/assets/icons/next.svg';

import styles from './TodoPagination.module.scss';

interface Props {
  totalItems: number;
  todos: TodoSchema[];
}

export const TodoPagination = ({ totalItems, todos }: Props) => {
  const { currentPage, itemsPerPage, handlePrev, handleNext } =
    useTodoPagination(todos);

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div className={styles.todoPagination}>
      <Button
        icon={PreviusIcon}
        onClick={handlePrev}
        disabled={currentPage === 1}
      />
      <div>
        {currentPage} / {totalPages}
      </div>
      <Button
        icon={NextIcon}
        onClick={handleNext}
        disabled={currentPage === Math.ceil(totalItems / itemsPerPage)}
      />
    </div>
  );
};
