import { useSelector } from 'react-redux';
import { selectTaskCount } from 'redux/tasks/selectors';
import css from './TaskCounter.module.css';

export const TaskCounter = () => {
  const count = useSelector(selectTaskCount);

  return (
    <div className={css.container}>
      <h2 className={css.title}>Tasks</h2>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
