import { createSelector } from '@reduxjs/toolkit';
import { statusFilters } from 'redux/filters/constants';
import { selectStatusFilter } from 'redux/filters/selectors';

// "атомарний" селектор (повертає честину стану без обчислень)
export const selectTasks = state => state.tasks;

// мемоізований "складовий" селектор (повертає значення, що обчислюються)
export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, statusFilter) => {
    console.log('Calculating visible tasks. Now memoized!');

    switch (statusFilter) {
      case statusFilters.active:
        return tasks.filter(task => !task.completed);
      case statusFilters.completed:
        return tasks.filter(task => task.completed);
      default:
        return tasks;
    }
  }
);

// мемоізований "складовий" селектор
export const selectTaskCount = createSelector([selectTasks], tasks => {
  console.log('Calculating count tasks. Now memoized!');

  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { completed: 0, active: 0 }
  );
});

// -------- код для використання бази даних
export const getIsLoading = state => state.tasks.isLoading;

export const getError = state => state.tasks.error;
