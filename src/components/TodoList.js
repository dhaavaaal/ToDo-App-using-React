import styles from'./TodoList.module.css'

function TodoList(props) {
    return(
        <li>
            <div className={styles.listitems}>
                <div className={styles.data}>{props.data}</div>
                <div>
                    <input type="checkbox" id={props.id} className={styles['checkbox-round']} />
                </div>
            </div>     
        </li>
    )
}

export default TodoList;