import './App.css';
import { useState } from 'react';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';

export type TodoType = {
  id: number
  text: string
  isChecked: boolean
}

function App() {
  const [text, setText] = useState('');
  const [todos, setTodos] = useState<TodoType[]>([]);

  const handleTextChange = (text: string) => {
    setText(text)
  }

  const handleSubmit = () => {
    
  }

  return (
    <main className="App">
      <TodoHeader />
      <TodoInput text={text} onTextChange={handleTextChange} onSubmit={handleSubmit} />
      <TodoListTools />
      <Divider />
      <TodoList todos={todos} />
    </main>
  );
}

export default App;
