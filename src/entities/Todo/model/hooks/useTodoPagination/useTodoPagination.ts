import { useSelector } from 'react-redux';

import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import { getCurrentPage } from '../../selectors/getCurrentPage/getCurrentPage';
import { getItemsPerPage } from '../../selectors/getItemsPerPage/getItemsPerPage';
import { todoActions } from '../../slices/todoSlice/todoSlice';
import { TodoSchema } from '../../types/todo';

export const useTodoPagination = (items: TodoSchema[]) => {
  const dispatch = useAppDispatch();
  const currentPage = useSelector(getCurrentPage);
  const itemsPerPage = useSelector(getItemsPerPage);

  const handlePrev = () => {
    dispatch(todoActions.setCurrentPage(currentPage - 1));
  };
  const handleNext = () => {
    dispatch(todoActions.setCurrentPage(currentPage + 1));
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = items.slice(startIndex, endIndex);

  return {
    currentPage,
    itemsPerPage,
    handlePrev,
    handleNext,
    itemsToDisplay,
  };
};
