import { useState } from 'react';
import styles from'./TodoList.module.css'

function TodoList(props) {
    const [isChecked,setIsChecked] = useState('false');
    const checkHandler = () => {
        setIsChecked(!isChecked);
    }
    return(
        <li>
            <div className={styles.listitems}>
                <div className={styles.data} style = {isChecked ? {color: '#54575f'} : {color: '#e4e5e7'}}>{props.data}</div>
                <div>
                    <input type="checkbox" id={props.id} className={styles['checkbox-round']} onChange={ checkHandler }/>
                </div>
            </div>     
        </li>
    )
}

export default TodoList;