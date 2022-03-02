import React from "react";
import Todo from "./components/Todo";
import styles from './App.module.css'

class App extends React.Component {
  render() {
    return(
      <>
        <div className={styles.App}>
          <Todo />
        </div>
      </>
    )
  }
}

export default App;