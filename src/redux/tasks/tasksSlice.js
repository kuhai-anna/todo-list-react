import { createSlice } from '@reduxjs/toolkit'; //nanoid
// -------- код для використання бази даних

import {
  fetchTasks,
  addTask,
  deleteTask,
  toggleCompleted,
} from 'redux/tasks/operations';

const hendlePending = state => {
  state.isLoading = true;
};

const hendleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const taskSlice = createSlice({
  name: 'tasks',
  // initialState: [],
  // -------- код для використання бази даних

  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  // редюсери для 'зовнішніх' типів екшенів
  extraReducers: {
    // Виконається в момент старту HTTP-запиту
    [fetchTasks.pending]: hendlePending,
    [addTask.pending]: hendlePending,
    [deleteTask.pending]: hendlePending,
    [toggleCompleted.pending]: hendlePending,
    // Виконається якщо HTTP-запит завершився з помилкою
    [fetchTasks.rejected]: hendleRejected,
    [addTask.rejected]: hendleRejected,
    [deleteTask.rejected]: hendleRejected,
    [toggleCompleted.rejected]: hendleRejected,
    // Виконається якщо HTTP-запит завершився успішно
    [fetchTasks.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items = action.payload;
    },
    [addTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.items.push(action.payload);
    },
    [deleteTask.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.findIndex(task => task.id === action.payload);
      state.splice(index, 1);
    },
    [toggleCompleted.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.items.findIndex(
        task => task.id === action.payload.id
      );
      state.items.splice(index, 1, action.payload);
    },
  },
  // reducers: {
  //   addTask: {
  //     reducer(state, action) {
  //       state.push(action.payload);
  //     },
  //     prepare(text) {
  //       return {
  //         payload: {
  //           id: nanoid(),
  //           completed: false,
  //           text,
  //         },
  //       };
  //     },
  //   },
  //   deleteTask(state, action) {
  //     const index = state.findIndex(task => task.id === action.payload);
  //     state.splice(index, 1);
  //   },
  //   toggleCompleted(state, action) {
  //     for (const task of state) {
  //       if (task.id === action.payload) {
  //         task.completed = !task.completed;
  //         break;
  //       }
  //     }
  //   },
  // },
});

// export const { addTask, deleteTask, toggleCompleted } = taskSlice.actions;
// export const { fetchingProces, fetchingSucces, fetchingError } =
//   taskSlice.actions;
export const tasksReducer = taskSlice.reducer;
