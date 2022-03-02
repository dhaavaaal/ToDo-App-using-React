import TodoList from './TodoList';
import styles from'./TodoContent.module.css'

function TodoContent(props) {
    return (
        <ul className={styles.todocontentcontainer}>
            {props.data.map((dummy) => (
                <TodoList key={dummy.id} id={dummy.id} data={dummy.data} />
            ))}
        </ul>
    )
}

export default TodoContent;