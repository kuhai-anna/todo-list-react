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
import { authReducer } from './auth/authSlice';
// import { rootReducer } from './reducer';
// import { tasksReducer } from './tasks/reducer';
// import { filtersReducer } from './filters/reducer';

const rootPersistConfig = {
  key: 'root',
  storage,
  whitelist: ['tasks'],
};

const authPersistConfig = {
  key: 'auth',
  storage,
  whitelist: ['token'],
};

const rootReducer = combineReducers({
  tasks: tasksReducer,
  filters: filtersReducer,
});

const persistedAuthReducer = persistReducer(authPersistConfig, authReducer);
const persistedRootReducer = persistReducer(rootPersistConfig, rootReducer);

export const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    root: persistedRootReducer,
  },

  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV === 'development',
});

export const persistor = persistStore(store);

// -------- before --------
// import { createStore } from 'redux';
// import { devToolsEnhancer } from '@redux-devtools/extension';

// Створюємо розширення стора, щоб додати інструменти розробника
// const enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer);
