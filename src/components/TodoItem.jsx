import styles from "./todoitem.module.css";

export default function TodoItem({ item, list, setList }) {
  function deleteItem(item) {
    setList(list.filter((todoItem) => todoItem !== item));
  }

  function markDone(itemName) {
    const tempList = list.map((todoItem) =>
      todoItem.name === itemName
        ? { ...todoItem, done: !todoItem.done }
        : todoItem
    );
    setList(tempList);
  }

  const itemCompleted = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <span className={itemCompleted} onClick={() => markDone(item.name)}>
          {item.name}
        </span>
        <span>
          <button
            className={styles.deleteButton}
            onClick={() => deleteItem(item)}
          >
            x
          </button>
        </span>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
