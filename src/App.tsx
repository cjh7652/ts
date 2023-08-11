import Todos from './components/Todos';
import NewTodo from './components/NewTodo';
import Todo from './models/todo';
import './App.css';

function App() {
  const todos = [
    new Todo('타입스크립트'),
    new Todo('리액트 공부하')
  ];
  const addTodoHandler= (todoText: string) => {};
  return (
    <div>
        <NewTodo onAddTodo={addTodoHandler} />
        <Todos items={todos} />
    </div>
  );
}

export default App;
