import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import Footer from "./Footer";

export default function Todo() {
  const [list, setList] = useState([]);
  const completed = list.filter((item) => item.done).length;
  const numItems = list.length;

  return (
    <div>
      <TodoForm list={list} setList={setList} />
      <TodoList list={list} setList={setList} />
      <Footer completed={completed} total={numItems} />
    </div>
  );
}
