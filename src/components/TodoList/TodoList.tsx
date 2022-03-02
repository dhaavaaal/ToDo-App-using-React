import { useState } from 'react';
import { PropValues } from '../../Interface/PropValues';
import styles from './TodoList.module.css';

const TodoList = (props: PropValues) => {
  const [isChecked, setIsChecked] = useState(false);
  const checkHandler = () => {
    setIsChecked(!isChecked);
  };
  return (
    <li>
      <div className={styles.listitems}>
        <div
          className={styles.data}
          style={isChecked ? { color: '#e4e5e7' } : { color: '#54575f' }}
        >
          {props.task}
        </div>
        <div>
          <input
            type='checkbox'
            key={props.id}
            className={styles['checkbox-round']}
            onChange={checkHandler}
          />
        </div>
      </div>
    </li>
  );
};

export default TodoList;
