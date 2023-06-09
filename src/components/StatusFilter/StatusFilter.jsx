import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'components/Button/Button';
import { statusFilters } from 'redux/filters/constants';
import { selectStatusFilter } from 'redux/filters/selectors';
import { setStatusFilter } from 'redux/filters/filtersSlice';
import css from './StatusFilter.module.css';

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filter = useSelector(selectStatusFilter);
  // Викликаємо генератор екшену та передаємо значення фільтра
  // Відправляємо результат - екшен зміни фільтра
  const hendleFilterChange = filter => dispatch(setStatusFilter(filter));

  return (
    <div className={css.container}>
      <h2 className={css.title}>Filter by status</h2>
      <div className={css.wrapper}>
        <Button
          selected={filter === statusFilters.all}
          onClick={() => hendleFilterChange(statusFilters.all)}
        >
          All
        </Button>
        <Button
          selected={filter === statusFilters.active}
          onClick={() => hendleFilterChange(statusFilters.active)}
        >
          Active
        </Button>
        <Button
          selected={filter === statusFilters.completed}
          onClick={() => hendleFilterChange(statusFilters.completed)}
        >
          Completed
        </Button>
      </div>
    </div>
  );
};
