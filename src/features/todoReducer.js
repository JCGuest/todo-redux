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
    default:
      return state;
  }
}

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
export default todoReducer;
