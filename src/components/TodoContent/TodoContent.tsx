import TodoList from '../TodoList/TodoList';
import styles from './TodoContent.module.css';
import { PropValues } from '../../Interface/PropValues';

const TodoContent: React.FC<{ values: PropValues[] }> = (props) => {
  return (
    <ul className={styles.todocontentcontainer}>
      {props.values.map((data) => (
        <TodoList id={data.id} task={data.task} />
      ))}
    </ul>
  );
};

export default TodoContent;
