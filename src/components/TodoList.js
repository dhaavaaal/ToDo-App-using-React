import styles from'./TodoList.module.css'

function TodoList(props) {
    return(
        <div>
            <li>
                <label htmlFor={props.id}>
                    <span>{props.data}</span>
                    <input type="checkbox" id={props.id}/>
                </label>
            </li>
        </div>
    )
}

export default TodoList;