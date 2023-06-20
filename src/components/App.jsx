import { useEffect } from 'react'; // , lazy
import { useDispatch } from 'react-redux';
import { Route, Routes } from 'react-router-dom';

import { refreshUser } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { Layout } from './Layout/Layout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import Home from 'pages/Home';
import Register from 'pages/Register';
import Login from 'pages/Login';
import Tasks from 'pages/Tasks';

// const HomePage = lazy(() => import('../pages/Home'));
// const RegisterPage = lazy(() => import('../pages/Register'));
// const LoginPage = lazy(() => import('../pages/Login'));
// const TasksPage = lazy(() => import('../pages/Tasks'));

export const App = () => {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b>Refreshing user...</b>
  ) : (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route
          path="register"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Register />} />
          }
        />
        <Route
          path="login"
          element={
            <RestrictedRoute redirectTo="/tasks" component={<Login />} />
          }
        />
        <Route
          path="tasks"
          element={<PrivateRoute redirectTo="/login" component={<Tasks />} />}
        />
      </Route>
    </Routes>
  );
};

// // -------- код для використання бази даних
// // import { useDispatch, useSelector } from 'react-redux';
// // import { useEffect } from 'react';
// // import { fetchTasks } from 'redux/operations';
// import { Layout } from 'components/Layout/Layout';
// import { AppBar } from 'components/AppBar/AppBar';
// import { TaskForm } from 'components/TaskForm/TaskForm';
// import { TaskList } from 'components/TaskList/TaskList';
// // -------- код для використання бази даних
// // import { getError, getIsLoading } from 'redux/tasks/selectors';

// export const App = () => {
//   // -------- код для використання бази даних
//   // const dispatch = useDispatch();
//   // const isLoading = useSelector(getIsLoading);
//   // const error = useSelector(getError);

//   // useEffect(() => {
//   //   dispatch(fetchTasks());
//   // }, [dispatch]);

//   return (
//     <Layout>
//       <AppBar />
//       <TaskForm />

//       {/* {isLoading && !error && <b>Request in progress...</b>} */}
//       <TaskList />
//     </Layout>
//   );
// };
