// файл створення стор Redux
import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { filtersReducer } from './filters/filtersSlice';
// import { rootReducer } from './reducer';
// import { tasksReducer } from './tasks/reducer';
// import { filtersReducer } from './filters/reducer';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
    filters: filtersReducer,
  },
});

// -------- before --------
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
