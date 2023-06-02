// -------- код для використання бази даних

// import axios from 'axios';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// axios.defaults.baseURL = 'https://6478f699362560649a2eb803.mockapi.io';

// // завантаження завдань з бази даних
// export const fetchTasks = createAsyncThunk(
//   'tasks/fetchAll',
//   // Використовуємо символ підкреслення як ім'я першого параметра,
//   // тому що в цій операції він нам не потрібен
//   async (_, thunkAPI) => {
//     try {
//       const response = await axios.get('/tasks');
//       return response.data;
//     } catch (error) {
//       // При помилці запиту повертаємо проміс
//       // який буде відхилений з текстом помилки
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // додавання завдання до бази даних
// export const addTask = createAsyncThunk(
//   'tasks/addTask',
//   async (text, thunkAPI) => {
//     try {
//       const response = await axios.post('/tasks', { text });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // видалення завдання з бази даних
// export const deleteTask = createAsyncThunk(
//   'tasks/deleteTask',
//   async (taskId, thunkAPI) => {
//     try {
//       const response = await axios.delete(`/tasks/${taskId}`);
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// // перемикання статусу завдання
// export const toggleCompleted = createAsyncThunk(
//   'tasks/toggleCompleted ',
//   async (task, thunkAPI) => {
//     try {
//       const response = await axios.put(`/tasks/${task.id}`, {
//         comleted: !task.completed,
//       });
//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
