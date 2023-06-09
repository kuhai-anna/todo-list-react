// -------- код для використання бази даних
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchTasks } from 'redux/operations';

import { Helmet } from 'react-helmet';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
// -------- код для використання бази даних
import { getError, getIsLoading } from 'redux/tasks/selectors';

const Tasks = () => {
  // -------- код для використання бази даних
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <TaskForm />
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList />
    </>
  );
};

export default Tasks;
