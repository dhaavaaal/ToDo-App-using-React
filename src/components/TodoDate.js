import styles from './TodoDate.module.css';

const TodoDate = () => {
    const date = new Date().toLocaleDateString('en-US', {day: 'numeric'});
    const month = new Date().toLocaleDateString('en-US', {month: 'short'});
    const day = new Date().toLocaleDateString('en-US', {weekday: 'long'});
    const year = new Date().toLocaleDateString('en-US', {year: 'numeric'});
    
    return (
        <div className={styles.tododate}>
            <div className={styles.innertododate}>
                <div className={styles.date}>{date}</div>
                <div className={styles.monthyear}>
                    <p id={styles.month}>{month}</p>
                    <p id={styles.year}>{year}</p>
                </div>
                <div className={styles.day}>{day}</div>
            </div>
        </div>
    )
}

export default TodoDate;