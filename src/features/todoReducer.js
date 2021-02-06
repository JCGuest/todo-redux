// import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  todoList: []
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        ...state,
        todoList: state.todoList.concat({
          item: action.item,
          done: action.done,
          id: action.id
        })
      };
    case 'CHECK':
      return {
        ...state,
        todoList: state.todoList.map((item) =>
          item.id === action.id ? { ...item, done: !item.done } : item
        )
      };

    default:
      return state;
  }
}

// I tried to use createSlice as I believe that it is the more standard way of doing it but i did not like
// the fact that it is not a tradition pure functional reducer. I will keep some of the code in here for refference

// const todoSlice = createSlice({
//   name: 'todos',
//   initialState,
//   reducers: {
//     saveTodo: (state, action) => {
//       state.todoList.push(action.payload);
//     },
//     increment: (state) => {
//       state.counter = 1;
//     }
//   }
// });

// export const { saveTodo, increment } = todoSlice.actions;
// export default todoSlice.reducer;
export const selectTodoList = (state) => state.todos.todoList;

export default todoReducer;
