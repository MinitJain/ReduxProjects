import { useSelector, useDispatch } from "react-redux";
import { addTodo, toggleTodo, removeTodo } from "./Redux/store";
import { useState } from "react";
function App() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [text, setText] = useState("");
  return (
    <div style={{ padding: "20px" }}>
      <h1>Todo List</h1>
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add a task..."
      />
      <button
        onClick={() => {
          if (text.trim()) {
            dispatch(addTodo(text));
            setText("");
          }
        }}
      >
        Add
      </button>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none",
            }}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))}>
              {todo.text}
            </span>
            <button onClick={() => dispatch(removeTodo(todo.id))}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
