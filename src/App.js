import React from 'react';
import './App.css';
import Input from './components/Input.js';
import TodoItem from './components/TodoItem';

const todoList = [
  {
    item: 'todo',
    done: false,
    id: 123456
  },
  {
    item: 'todo1',
    done: true,
    id: 12345635
  }
];

function App() {
  return (
    <div className='app'>
      <div className='app__container'>
        <div className='app__todoContainer'>
          {todoList.map((item) => (
            <TodoItem name={item.item} done={item.done} id={item.id} />
          ))}
        </div>
      </div>
      <Input />
    </div>
  );
}

export default App;
