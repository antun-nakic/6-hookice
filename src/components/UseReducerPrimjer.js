import { useReducer } from "react";
import reducer from "../reducers/reducer.js";

const initialTodos = [
  {
    id: 1,
    title: "Todo 1",
    complete: false,
  },
  {
    id: 2,
    title: "Todo 2",
    complete: false,
  },
];

function UseReducerPrimjer() {
  const [todos, dispatch] = useReducer(reducer, initialTodos);

  const handleComplete = (todo) => {
    dispatch({ type: "COMPLETE", id: todo.id });
  };

  const handleDelete = (todo) => {
    dispatch({ type: "DELETE", id: todo.id });
  };

  return (
    <>
      {todos.map((todo) => (
        <div key={todo.id}>
          <label>
            <input
              type='checkbox'
              checked={todo.complete}
              onChange={() => handleComplete(todo)}
            />
            {todo.title}
          </label>
          <button onClick={() => handleDelete(todo)}>X</button>
        </div>
      ))}
    </>
  );
}

export default UseReducerPrimjer;
