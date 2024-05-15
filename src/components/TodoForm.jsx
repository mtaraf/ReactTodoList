import { useState } from "react";
import styles from "./form.module.css";

export default function TodoForm({ list, setList }) {
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();
    setList([...list, todo]);
    setTodo({ name: "", done: false });
  }

  return (
    <div>
      <form className={styles.todoForm} onSubmit={handleSubmit}>
        <div className={styles.inputContainer}>
          <input
            className={styles.todoInput}
            onChange={(e) => setTodo({ name: e.target.value, done: false })}
            type="text"
            value={todo.name}
            placeholder="Enter Todo Item..."
          />
          <button className={styles.todoButton} type="submit">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
