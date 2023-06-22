// -------- код для використання бази даних
import { useDispatch } from 'react-redux'; //useSelector
import { useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { fetchTasks } from 'redux/tasks/operations';
import { TaskForm } from 'components/TaskForm/TaskForm';
import { TaskList } from 'components/TaskList/TaskList';
// -------- код для використання бази даних
// import { getError, getIsLoading } from 'redux/tasks/selectors';
import { TaskCounter } from 'components/TaskCounter/TaskCounter';
import { StatusFilter } from 'components/StatusFilter/StatusFilter';

const Tasks = () => {
  // -------- код для використання бази даних
  const dispatch = useDispatch();
  // const isLoading = useSelector(getIsLoading);
  // const error = useSelector(getError);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <>
      <Helmet>
        <title>Your tasks</title>
      </Helmet>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <TaskCounter />
        <StatusFilter />
      </div>

      <TaskForm />
      {/* {isLoading && !error && <b>Request in progress...</b>} */}
      <TaskList />
    </>
  );
};

export default Tasks;
