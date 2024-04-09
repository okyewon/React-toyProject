import './App.css';
import { useReducer } from 'react';
import Divider from './Divider/Divider';
import TodoHeader from './Header/TodoHeader';
import TodoInput from './Input/TodoInput';
import TodoList from './List/TodoList';
import TodoListTools from './Tools/TodoListTools';
import TodoListArea from './List/TodoListArea';
import { todoInputReducer } from './Todo/todoInputReducer';
import { TodoType, todoReducer } from './Todo/todoReducer';

function App() {
  const [inputState, inputDispatch] = useReducer(todoInputReducer, { text: '' });
  const [todoState, todoDispatch] = useReducer(todoReducer, { todos: [] });

  const handleTextChange = (text: string) => {
    inputDispatch({
      type: 'change',
      payload: text
    })
  }

  const handleSubmit = () => {
    if(!inputState.text) {
      return;
    }

    todoDispatch({
      type: 'add',
      payload: {
        text: inputState.text
      }
    })

    inputDispatch({
      type: 'clear'
    })
  }

  const handleToggle = (id: number) => {
    todoDispatch({
      type: 'checked',
      payload: {
        id: id
      }
    })
  }

  const handleRemove = (id: number) => {
    todoDispatch({
      type: 'remove',
      payload: {
        id: id
      }
    })
  }

  const isTodoAllChecked = () => {
    return todoState.todos.every(todo => todo.isChecked)
  }

  const handleToggleAllClick = () => {
    const isAllChecked = isTodoAllChecked()

    todoDispatch({
      type: 'allChecked',
      payload: isAllChecked
    })

  }

  const handleRemoveAllClick = () => {
    todoDispatch({
      type: 'allRemove'
    })
  }

  return (
    <main className="App">
      <TodoHeader count={todoState.todos.filter(todo => !todo.isChecked).length} />
      <TodoInput text={inputState.text} onTextChange={handleTextChange} onSubmit={handleSubmit} />
      <TodoListArea todoCount={todoState.todos.length}>
        <TodoListTools isAllChecked={isTodoAllChecked()} onRemoveAllClick={handleRemoveAllClick} onToggleAllClick={handleToggleAllClick} />
        <Divider />
        <TodoList todos={todoState.todos} onRemoveClick={handleRemove} onToggleClick={handleToggle} />
      </TodoListArea>
    </main>
  );
}

export default App;
