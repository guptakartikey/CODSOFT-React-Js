import { useDispatch } from "react-redux";
import { bindActionCreators } from "redux";

import AddTodo from "./components/AddTodo/AddTodo";
import TodoList from "./components/TodoList/TodoList";
import { addTodo, deleteTodo, editTodo, finishTodo } from "./Slices/todoSlice";

function App() {
  const disptach = useDispatch();
  const actions = bindActionCreators(
    { addTodo, editTodo, deleteTodo, finishTodo },
    disptach
  );

  return (
    <>
      <AddTodo addTodo={actions.addTodo} />
      <TodoList
        editTodo={actions.editTodo}
        deleteTodo={actions.deleteTodo}
        finishTodo={actions.finishTodo}
      />
    </>
  );
}

export default App;
