// файл оголошення екшенів програми
import { createAction, nanoid } from '@reduxjs/toolkit';

export const addTask = createAction('tasks/addTask', text => {
  return {
    payload: {
      id: nanoid(),
      completed: false,
      text,
    },
  };
});
export const deleteTask = createAction('tasks/deleteTask');
export const toggleCompleted = createAction('tasks/toggleCompleted');

// ------- before -------
// import { nanoid } from 'nanoid';

// export const addTask = text => {
//   return {
//     type: 'tasks/addTask',
//     payload: {
//       id: nanoid(),
//       completed: false,
//       text,
//     },
//   };
// };

// export const deleteTask = taskId => {
//   return {
//     type: 'tasks/deleteTask',
//     payload: taskId,
//   };
// };

// export const toggleCompleted = taskId => {
//   return {
//     type: 'tasks/toggleCompleted',
//     payload: taskId,
//   };
// };
