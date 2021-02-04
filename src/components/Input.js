import React, { useState } from 'react';
import './Input.css';
import { useDispatch } from 'react-redux';
// import saveTodo from '../features/todoSlice';
// import increment from '../features/todoSlice';
import todoReducer from '../features/todoReducer';

const Input = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const addTodo = () => {
    console.log(`Adding ${input}`);

    dispatch({ type: 'ADD_TODO', item: input, done: false, id: Date.now() });

    // dispatch(
    //   saveTodo({
    //     item: input,
    //     done: false,
    //     id: Date.now()
    //   })
    // );
  };

  return (
    <div className='input'>
      <input
        type='text'
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={addTodo}>Add!</button>
    </div>
  );
};

export default Input;