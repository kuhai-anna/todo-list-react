import { useDispatch } from 'react-redux';
import { MdClose } from 'react-icons/md';
import css from './Task.module.css';
import { deleteTask, toggleCompleted } from 'redux/tasks/tasksSlice';

export const Task = ({ task }) => {
  const dispatch = useDispatch();

  const hendleDelete = () => dispatch(deleteTask(task.id));
  // Викликаємо генератор екшену та передаємо ідентифікатор завдання
  // Відправляємо результат - екшен перемикання статусу завдання
  const hendleToggle = () => dispatch(toggleCompleted(task.id));

  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
        checked={task.completed}
        onChange={hendleToggle}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={hendleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
