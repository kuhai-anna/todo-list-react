import { statusFilters } from 'redux/filters/constants';
import { selectStatusFilter } from 'redux/filters/selectors';

// "атомарний" селектор (повертає честину стану без обчислень)
export const selectTasks = state => state.tasks;

// "складовий" селектор (повертає значення, що обчислюються)
export const selectVisibleTasks = state => {
  const tasks = selectTasks(state);
  const statusFilter = selectStatusFilter(state);

  switch (statusFilter) {
    case statusFilters.active:
      return tasks.filter(task => !task.completed);
    case statusFilters.completed:
      return tasks.filter(task => task.completed);
    default:
      return tasks;
  }
};

// -------- код для використання бази даних
// export const getIsLoading = state => state.tasks.isLoading;

// export const getError = state => state.tasks.error;
