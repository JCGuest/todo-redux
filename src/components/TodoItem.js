import React from 'react';
import './TodoItem.css';
import Checkbox from '@material-ui/core/Checkbox';
import { useDispatch } from 'react-redux';

const TodoItem = ({ name, done, id }) => {
  const dispatch = useDispatch();

  const handleCheck = () => {
    dispatch({ type: 'CHECK', item: name, done: done, id: id });
  };

  return (
    <div className='todoItem'>
      <Checkbox
        checked={done}
        color='primary'
        onChange={handleCheck}
        inputProps={{ 'aria-label': 'secondary checkbox' }}
      />
      <p className={done && 'todoItem--done'}>{name}</p>
    </div>
  );
};

export default TodoItem;
