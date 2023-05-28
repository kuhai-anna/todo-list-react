// файл створення стор Redux
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { filtersReducer } from './filters/filtersSlice';
import { tasksReducer } from './tasks/tasksSlice';
// import { rootReducer } from './reducer';
// import { tasksReducer } from './tasks/reducer';
// import { filtersReducer } from './filters/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedRootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);

// -------- before --------
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
